require.config({
    baseUrl: '../app',
    paths:{
        jquery: '../../libs/jquery/dist/jquery.min',
        underscore: '../../libs/underscore/underscore-min',
        backbone: '../../libs/backbone/backbone',
        bootstrap: '../../libs/bootstrap/dist/js/bootstrap.min',
        'text' : '../../libs/requirejs-text/text',
        chai : '../../libs/chai/chai',
        qunit : '../../libs/qunit/qunit/qunit',
        mocha : '../../libs/mocha/mocha'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        bootstrap: {
            deps: ['jquery']
        },
        backbone: {
            deps: ['underscore', 'jquery', 'text','bootstrap'],
            exports: 'Backbone'
        },
        chai: {
            exports: 'chai'
        },
        qunit: {
            exports: 'qunit'
        },
        mocha: {
            exports: 'mocha'
        }
    }
});
// require([
//     '../test/spec/example.spec'
//     ], function () {
//         mocha.run();
// });

//tdd
require(['backbone'], function(Backbone) {
    require([
        'require',
        'dashboard/main',
        './mobil/main',
        './motor/main'
        ], function(require, Dashboard, Mobil, Motor){
        suite('Check Module Dahboard', function () {
            var dashboard = new Dashboard;
            // console.log('module Dashboard');
            // console.log(Dashboard);
            test("Check Dahboard object availability", function () {
                assert.equal(typeof dashboard, 'object');
            });
        });
        suite('Check Model and Method of Module Mobil', function () {
            var mobilMain = new Mobil;
            // console.log('module Mobil');
            // console.log(mobilMain);
            var mobil = mobilMain.model;

            mobil.jualKe('Wintoro');
            test("Mobil.jualKe --> Wintoro", function () {
                assert.equal(mobil.get('pemilik'), 'Wintoro');
            });

            mobil.mutasiKe('Jogja');
            test("Mobil.mutasiKe --> Jogja", function () {
                assert.equal(mobil.get('daerah'), 'Jogja');
            });

            mobil.gantiDesain('HIJAU');
            test("Mobil.gantiDesain --> HIJAU", function () {
                assert.equal(mobil.get('warna'), 'HIJAU');
            });

            mobil.bayarPajak('2015');
            test("Mobil.bayarPajak --> 2015", function () {
                assert.equal(mobil.get('tahun'), '2015');
            });
        });
        suite('Check Model and Method of Module Motor', function () {
            var motorMain = new Motor;
            // console.log('module Motor');
            // console.log(motorMain);
            var motor = motorMain.model;

            motor.jualKe('Wintoro');
            test("Motor.jualKe --> Wintoro", function () {
                assert.equal(motor.get('pemilik'), 'Wintoro');
            });

            motor.mutasiKe('Jogja');
            test("Motor.mutasiKe --> Jogja", function () {
                assert.equal(motor.get('daerah'), 'Jogja');
            });

            motor.gantiDesain('HIJAU');
            test("Motor.gantiDesain --> HIJAU", function () {
                assert.equal(motor.get('warna'), 'HIJAU');
            });

            motor.bayarPajak('2015');
            test("Motor.bayarPajak --> 2015", function () {
                assert.equal(motor.get('tahun'), '2015');
            });
            mocha.run();
        });
    });
});
