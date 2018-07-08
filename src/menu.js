
var MenuLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var item1 = new cc.MenuItemFont("test1",this.item1,this);
        var item2 = new cc.MenuItemFont("test2",this.item2,this);
        var item3 = new cc.MenuItemFont("test3",this.item3,this);
        var menu= new cc.Menu(item1,item2,item3);
        menu.alignItemsHorizontally();
        this.addChild(menu);

        this.scheduleUpdate();

        return true;
    },

    item1: function () {

    },

    item2: function () {

    },

    item3: function () {

    },


});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

