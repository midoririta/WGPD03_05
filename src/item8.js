var Item8Layer = cc.Layer.extend({
    sprite:null,
    isFlipX: true,
    counter:0,
    a1: null,
    a2: null,
    ctor: async function () {
        this._super();

        this.sprite = new cc.Sprite(res.s1_0025_png);
        this.sprite.attr({x:cc.winSize.width/2, y:cc.winSize.height/2});
        this.addChild(this.sprite);

        var item1 = new cc.MenuItemFont('test1',this.item1,this);
        var item2 = new cc.MenuItemFont('test2',this.item2,this);

        item1.attr({x:-400,y:240});
        item2.attr({x:-320,y:240});

        var menu = new cc.Menu(item1,item2);
        this.addChild(menu);

        cc.spriteFrameCache.addSpriteFrames(res.s1_plist,res.s1_png);
        var animFrames = [];
        for (var i=1; i<=25; i++){
            var str = "s1_00" + (i>=10?'':'0') + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        var anim = new cc.Animation(animFrames, 1/15, 1);
        var anims = new cc.Animate(anim);   // Action


        await sleep(1*1000);

         this.a1 = cc.moveTo(3,100,100);
         this.a2 = cc.repeatForever(anims);
         this.sprite.runAction(this.a1);
         this.sprite.runAction(this.a2);





        this.scheduleUpdate();

        return true;
    },
    item1: function () {
        this.sprite.stopAllActions();
    },
    item2: function () {
        this.sprite.stopAction(this.a1); //control stop action or animation
    },

    update: function () {
        // if (this.counter % 10 == 0){
        //     this.isFlipX = !this.isFlipX;
        //     this.sprite.runAction(new cc.FlipX(this.isFlipX));
        // }
        // this.counter++;
        // if (this.counter == 10) this.counter = 0;



    }


});

var Item8Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item8Layer();
        this.addChild(layer);
    }
});

function sleep(ms) {
    return new Promise(a => setTimeout(a, ms));
}