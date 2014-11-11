/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var BgSky = (function () {
        function BgSky(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("bgSky"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        BgSky.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -635) {
                this.image.x = 0;
            }
        };

        BgSky.prototype.reset = function () {
            this.image.x = 0;
        };

        BgSky.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return BgSky;
    })();
    objects.BgSky = BgSky;
})(objects || (objects = {}));
//# sourceMappingURL=bgsky.js.map
