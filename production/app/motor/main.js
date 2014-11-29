(function(){define("motor/model",["backbone"],function(e){var t=e.Model.extend({defaults:{id:"",nopol:"",merk:"",jenis:"",tahun:"",pemilik:"",warna:"",daerah:""},jualKe:function(e){this.set("pemilik",e)},mutasiKe:function(e){this.set("daerah",e)},gantiDesain:function(e){this.set("warna",e)},bayarPajak:function(e){this.set("tahun",e)}}),n=e.Collection.extend({model:t,url:"../data/initMotor.json"});return{Model:t,Collection:n}}),define("text!motor/template/ViewList.html",[],function(){return'<h2>Motor</h2>\n<table class="table table-bordered">\n    <thead>\n        <th>ID</td>\n        <th>No Polisi</td>\n        <th>Merk</td>\n        <th>Jenis</td>\n        <th>Tahun</td>\n        <th>Pemilik</td>\n        <th>Warna</td>\n        <th>Daerah</td>\n        <th>Action</th>\n    </thead>\n    <tbody>\n    </tbody>\n</table>\n<button class="btn btn-default btn-block" add>\n    <span class="glyphicon glyphicon-plus"></span> Add New\n</button><br/>\n<div class="row">\n    <div id="detailDiv" class="col-sm-12"></div>\n</div>\n'}),define("text!motor/template/View.html",[],function(){return'<td> <%= id %> </td>\n<td> <%= nopol %> </td>\n<td> <%= merk %> </td>\n<td> <%= jenis %> </td>\n<td> <%= tahun %> </td>\n<td> <%= pemilik %> </td>\n<td> <%= warna %> </td>\n<td> <%= daerah %> </td>\n<td>\n    <span class="btn btn-primary btn-xs" btnJual >Jual</span>\n    <span class="btn btn-primary btn-xs" btnMutasi >Mutasi</span>\n    <span class="btn btn-primary btn-xs" btnDesign >Ganti Desain</span>\n    <span class="btn btn-primary btn-xs" btnPajak >Pajak</span>\n    <span class="btn btn-danger btn-xs" btnRemove >Remove</span>\n    <span class="btn btn-warning btn-xs" btnEdit >Edit</span>\n    <span class="btn btn-info btn-xs" btnDetail >Detail</span>\n</td>\n'}),define("text!motor/template/ViewAction.html",[],function(){return'<div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal">×</button>\n            <h4 class="modal-title">Action Form</h4>\n        </div>\n        <div class="modal-body">\n            <form  id="formEdit" class="form-horizontal row" action="#">\n                <fieldset>\n                    <div class="form-group">\n                        <label class="col-md-4 control-label">Value</label>\n                        <div class="col-md-4">\n                            <input id="textValue" type="text" class="form-control input-md">\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n        <div class="modal-footer">\n            <span id="modalError" class="pull-left"></span>\n            <button class="btn btn-default" data-dismiss="modal">Cancel</button>\n            <a class="btn btn-primary" btnSubmit>Submit</a>\n        </div>\n    </div>\n</div>\n'}),define("motor/viewAction",["backbone","text!./template/ViewAction.html"],function(e,t){var n=e.View.extend({className:"modal fade",template:t,initialize:function(e){this.options=e,_.bindAll(this,"render")},render:function(){this.$el.html(this.template),this.$el.modal()},events:{"click [btnSubmit]":"saveChange","hidden.bs.modal":"remove"},saveChange:function(){var e=this.options.jobtype,t=$("#textValue").val().toUpperCase();switch(e){case"jual":this.model.jualKe(t);break;case"mutasi":this.model.mutasiKe(t);break;case"gantidesain":this.model.gantiDesain(t);break;case"bayarpajak":this.model.bayarPajak(t)}this.$el.modal("hide")}});return n}),define("text!motor/template/ViewEdit.html",[],function(){return'<div class="modal-dialog">\n        <div class="modal-content">\n        <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal">X</button>\n            <h4 class="modal-title">Form Edit Single Item</h4>\n        </div>\n        <div class="modal-body">\n            <form  id="formAddNew" class="form-horizontal row" action="#">\n                <fieldset>\n                <div class="form-group">\n                    <label class="col-md-4 control-label" >Nomor Polisi</label>\n                    <div class="col-md-5">\n                        <input id="textNoPol" value="<%= nopol %>" type="text" class="form-control input-md">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label class="col-md-4 control-label">Merk</label>\n                    <div class="col-md-5">\n                        <input id="textMerk" value="<%= merk %>" type="text"class="form-control input-md">\n                </div>\n                </div>\n                <div class="form-group">\n                    <label class="col-md-4 control-label">Nama Pemilik</label>\n                    <div class="col-md-6">\n                        <input id="textPemilik" value="<%= pemilik %>"type="text" class="form-control input-md">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label class="col-md-4 control-label">Jenis</label>\n                    <div class="col-md-4">\n                        <input id="textJenis" type="text" value="<%= jenis %>" class="form-control input-md">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label class="col-md-4 control-label">Daerah</label>\n                    <div class="col-md-4">\n                        <input id="textDaerah" type="text" value="<%= daerah %>"class="form-control input-md">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label class="col-md-4 control-label">Tahun</label>\n                    <div class="col-md-4">\n                        <input id="textTahun" type="text" value="<%= tahun %>"class="form-control input-md">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label class="col-md-4 control-label">Warna</label>\n                    <div class="col-md-4">\n                        <input id="textWarna" type="text" value="<%= warna %>" class="form-control input-md">\n                    </div>\n                </div>\n                </fieldset>\n            </form>\n        </div>\n        <div class="modal-footer">\n            <span id="modalError" class="pull-left"></span>\n            <button class="btn btn-default" data-dismiss="modal">Cancel</button>\n            <button class="btn btn-primary" save>Save</button>\n        </div>\n        </div>\n    </div>\n</div>\n'}),define("motor/viewEdit",["backbone","text!./template/ViewEdit.html"],function(e,t){var n=e.View.extend({className:"modal fade",template:_.template(t),render:function(){this.$el.html(this.template(this.model.toJSON())),this.$el.modal("show")},events:{"click [save]":"save","hidden.bs.modal":"remove"},save:function(){var e=this.$("#textNoPol").val().toUpperCase(),t=this.$("#textMerk").val().toUpperCase(),n=this.$("#textJenis").val().toUpperCase(),r=this.$("#textTahun").val().toUpperCase(),i=this.$("#textPemilik").val().toUpperCase(),s=this.$("#textWarna").val().toUpperCase(),o=this.$("#textDaerah").val().toUpperCase();this.model.set({nopol:e,merk:t,jenis:n,tahun:r,pemilik:i,daerah:s,warna:o}),this.$el.modal("hide")}});return n}),define("text!motor/template/ViewDetail.html",[],function(){return'<div class="panel panel-default">\n    <div class="panel-heading">\n        <h3 class="panel-title">Details</h3>\n    </div>\n    <div class="panel-body">\n        <form  id="formAddNew" class="form-horizontal row" action="#">\n            <fieldset>\n            <div class="form-group">\n                <label class="col-md-4 control-label" >Nomor Polisi</label>\n                <div class="col-md-5">\n                    <input value="<%= nopol %>" type="text" class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Merk</label>\n                <div class="col-md-5">\n                    <input value="<%= merk %>" type="text"class="form-control input-md">\n            </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Nama Pemilik</label>\n                <div class="col-md-6">\n                    <input value="<%= pemilik %>"type="text" class="form-control input-md disable">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Jenis</label>\n                <div class="col-md-4">\n                    <input type="text" value="<%= jenis %>" class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Daerah</label>\n                <div class="col-md-4">\n                    <input type="text" value="<%= daerah %>"class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Tahun</label>\n                <div class="col-md-4">\n                    <input type="text" value="<%= tahun %>"class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Warna</label>\n                <div class="col-md-4">\n                    <input type="text" value="<%= warna %>" class="form-control input-md">\n                </div>\n            </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n'}),define("motor/viewDetail",["backbone","text!./template/ViewDetail.html"],function(e,t){var n=e.View.extend({template:_.template(t),initialize:function(){this.model.on("change",this.render,this),this.collection.on("remove",this.remove,this)},render:function(){this.$el.html(this.template(this.model.toJSON()))}});return n}),define("motor/view",["require","backbone","text!./template/View.html"],function(e,t,n){var r=t.View.extend({tagName:"tr",template:_.template(n),initialize:function(e){this.options=e||{},this.listenTo(this.model,"change",function(){this.render(),this.showNotify("Action")},this)},render:function(){this.$el.html(this.template(this.model.toJSON()))},events:{"click [btnJual]":"jual","click [btnMutasi]":"mutasi","click [btnDesign]":"gantiDesain","click [btnPajak]":"bayarPajak","click [btnRemove]":"remove","click [btnEdit]":"edit","click [btnDetail]":"showDetail"},jual:function(){var t=this;e(["./viewAction"],function(e){var n=new e({model:t.model,jobtype:"jual"});n.render()})},mutasi:function(){var t=this;e(["./viewAction"],function(e){var n=new e({model:t.model,jobtype:"mutasi"});n.render()})},gantiDesain:function(){var t=this;e(["./viewAction"],function(e){var n=new e({model:t.model,jobtype:"gantidesain"});n.render()})},bayarPajak:function(){var t=this;e(["./viewAction"],function(e){var n=new e({model:t.model,jobtype:"bayarpajak"});n.render()})},edit:function(){var t=this;e(["./viewEdit"],function(e){var n=new e({model:t.model});n.render(),t.showNotify("Edit")})},remove:function(){this.collection.remove(this.model),t.View.prototype.remove.call(this),this.showNotify("Remove")},showDetail:function(){var t=this;e(["./viewDetail"],function(e){var n=new e({model:t.model,collection:t.collection});n.render(),t.options.parent.$("#detailDiv").html(n.$el)})},showNotify:function(e){$("#errorLog").text(e+" success !"),$("#errorLog").addClass("label label-success")}});return r}),define("text!motor/template/ViewAdd.html",[],function(){return'<div class="modal-dialog">\n    <div class="modal-content">\n    <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal">×</button>\n        <h4 class="modal-title">Form Add New Item</h4>\n    </div>\n    <div class="modal-body">\n        <form  id="formAddNew" class="form-horizontal row" action="#">\n            <fieldset>\n            <div class="form-group">\n                <label class="col-md-4 control-label" >Nomor Polisi</label>\n                <div class="col-md-5">\n                    <input id="textNoPol" type="text" class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Merk</label>\n                <div class="col-md-5">\n                    <input id="textMerk" type="text"class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Nama Pemilik</label>\n                <div class="col-md-6">\n                    <input id="textPemilik" type="text" class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Jenis</label>\n                <div class="col-md-4">\n                    <input id="textJenis" type="text" class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Daerah</label>\n                <div class="col-md-4">\n                    <input id="textDaerah" type="text" class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Tahun</label>\n                <div class="col-md-4">\n                    <input id="textTahun" type="text" class="form-control input-md">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-md-4 control-label">Warna</label>\n                <div class="col-md-4">\n                    <input id="textWarna" type="text" class="form-control input-md">\n                </div>\n            </div>\n            </fieldset>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <span id="modalError" class="pull-left"></span>\n        <button class="btn btn-default" data-dismiss="modal">Cancel</button>\n        <a class="btn btn-primary" submit>Submit</a>\n    </div>\n    </div>\n</div>\n'}),define("motor/viewAdd",["backbone","text!./template/ViewAdd.html"],function(e,t){var n=e.View.extend({className:"modal fade",template:t,render:function(){this.$el.html(this.template),this.$el.modal("show")},events:{"click [submit]":"add","hidden.bs.modal":"remove"},add:function(){var e=this.$("#textNoPol").val().toUpperCase(),t=this.$("#textMerk").val().toUpperCase(),n=this.$("#textJenis").val().toUpperCase(),r=this.$("#textTahun").val().toUpperCase(),i=this.$("#textPemilik").val().toUpperCase(),s=this.$("#textWarna").val().toUpperCase(),o=this.$("#textDaerah").val().toUpperCase();this.collection.add({id:this.collection.length+2,nopol:e,merk:t,jenis:n,tahun:r,pemilik:i,daerah:s,warna:o}),this.$el.modal("hide")}});return n}),define("motor/main",["require","backbone","./model","text!./template/ViewList.html"],function(e,t,n,r){return t.View.extend({tagName:"div",className:"viewList",template:r,initialize:function(){var e=this;e.model=new n.Model,e.collection=new n.Collection,e.listenTo(e.collection,"add",function(t){e.addOne(t),e.showNotify()})},render:function(){this.$el.html(this.template)},events:{"click [add]":"add"},addOne:function(t){var n=this;e(["./view"],function(e){var r=new e({model:t,collection:n.collection,parent:n});r.render(),n.$("tbody").append(r.el)})},add:function(){var t=this;e(["./viewAdd"],function(e){var n=new e({collection:t.collection});n.render()})},showNotify:function(){$("#errorLog").text("Add new data success !"),$("#errorLog").addClass("label label-success")}})})})();