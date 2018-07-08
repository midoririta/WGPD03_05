var MenuLayer = cc.Layer.extend({
    sprite:null,
    isFlipY: false,
    isShow: true,
    ctor:function () {
        this._super();


        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.x = cc.winSize.width / 2;
        this.sprite.y = cc.winSize.height * 6/ 8;
        this.addChild(this.sprite);

        var item1 = new cc.MenuItemFont('test1',this.item1,this);
        var item2 = new cc.MenuItemFont('test2',this.item2,this);
        var item3 = new cc.MenuItemFont('test3',this.item3,this);
        var item4 = new cc.MenuItemFont('test4',this.item4,this);
        var item5 = new cc.MenuItemFont('test5',this.item5,this);
        var item6 = new cc.MenuItemFont('test6',this.item6,this);
        var item7 = new cc.MenuItemFont('test7',this.item7,this);
        var item8 = new cc.MenuItemFont('test8',this.item8,this);
        var item9 = new cc.MenuItemFont('test9',this.item9,this);

        item1.attr({x:-240,y:-200});
        item2.attr({x:-160,y:-200});
        item3.attr({x:-80,y:-200});
        item4.attr({x:0,y:-200});
        item5.attr({x:80,y:-200});
        item6.attr({x:160,y:-200});

        item7.attr({x:-240,y:-240});
        item8.attr({x:-160,y:-240});
        item9.attr({x:-80,y:-240});

        var menu = new cc.Menu(item1,item2,item3,item4,item5,item6,
            item7,item8,item9);
        this.addChild(menu);

        return true;
    },

    item1: function () {
        this.sprite.runAction(
            cc.place(new cc.Point(this.sprite.x-100,this.sprite.x-400))
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
        storage.setItem("stage", "4");
        storage.setItem("username", "yu");
    },
    item5: function () {
        var storage = cc.sys.localStorage;
        var stage = storage.getItem("stage");
        var user = storage.getItem("username");
        cc.log(user + ":" + stage);
    },
    item6: function () {
        var storage = cc.sys.localStorage;
        storage.removeItem("stage");
        storage.removeItem("username");
    },

    item7: function () {
        cc.spriteFrameCache.addSpriteFrames(res.s1_plist,res.s1_png);
        var animFrames = [];
        for (var i=1; i<=25; i++){
            var str = "s1_00" + (i>=10?'':'0') + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var sprite = new cc.Sprite(animFrames[0]);
        sprite.attr({x:160,y:cc.winSize.height/2});
        this.addChild(sprite);

        var anim = new cc.Animation(animFrames, 1/15, 1);
        var anims = new cc.Animate(anim);   // Action
        sprite.runAction(cc.repeatForever(anims));

    },
    item8: function () {
        cc.director.pushScene(new Item8Scene());
    },
    item9: function(){
        cc.director.pushScene(new Item9Scene());
    },

});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});