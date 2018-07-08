
var MenuLayer = cc.Layer.extend({
    sprite:null,
    isFlipY: false,
    isShow: true,
    ctor:function () {

        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.x = cc.winSize.width /2;
        this.sprite.y = cc.winSize.height *6 /8;
        this.addChild(this.sprite);

        //this.isShow = true;

        var item1 = new cc.MenuItemFont("test1",this.item1,this);
        var item2 = new cc.MenuItemFont("test2",this.item2,this);
        var item3 = new cc.MenuItemFont("test3",this.item3,this);

        var item4 = new cc.MenuItemFont("test4",this.item4,this);
        var item5 = new cc.MenuItemFont("test5",this.item5,this);
        var item6 = new cc.MenuItemFont("test6",this.item6,this);
        var menu= new cc.Menu(item1,item2,item3,item4,item5,item6);
        menu.alignItemsHorizontally();
        this.addChild(menu);



        return true;
    },

    item1: function () {
        this.sprite.runAction(
            cc.place(new cc.Point(this.sprite.x-100,this.sprite.y-400))
        );
    },

    item2: function () {
        this.isFlipY = !this.isFlipY;
        this.sprite.runAction(
            cc.flipY(this.isFlipY)
        );
    },

    item3: function () {
        this.isShow = !this.isShow;
        this.sprite.runAction(
            this.isShow?cc.show():cc.hide()
        );
    },
    item4: function () {
        var storage = cc.sys.localStorage;
        storage.setItem("stage", "25");
        storage.setItem("username", "yu");
    },
    item5: function () {
        var storage = cc.sys.localStorage;
        var stage = storage.getItem("stage");
        var user = storage.getItem("username");
        cc.log(user+ ":" + stage);
    },
    item6: function () {
        var storage = cc.sys.localStorage;
        storage.removeItem("stage");
        storage.removeItem("username");
    },


});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

