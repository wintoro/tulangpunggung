define([
    "require",
    "backbone",
    "./model",
    "text!./template/ViewList.html"
], function(require, Backbone, Model, Template){
    return Backbone.View.extend({
        tagName: "div",
        className: "viewList",
        template: Template,
        initialize: function(){
            var  self = this;
            self.model = new Model.Model();
            self.collection = new Model.Collection();
            self.listenTo(self.collection, "add", function(model){
                self.addOne(model);
                self.showNotify();
            });
        },
        render: function(){
            this.$el.html(this.template);
        },
        events:{
            "click [add]" : "add"
        },
        addOne: function(model){
            var self = this;
            require(["./view"], function(View){
                var view = new View({ model: model,  collection : self.collection, parent : self });
                view.render();
                self.$("tbody").append(view.el);
            });
        },
        add: function(){
            var self = this;
            require(["./viewAdd"], function(View){
                var view = new View({collection: self.collection});
                view.render();
            });
        },
        showNotify: function(){
            $("#errorLog").text("Add new data success !");
            $("#errorLog").addClass("label label-success");
        }
    });
});
