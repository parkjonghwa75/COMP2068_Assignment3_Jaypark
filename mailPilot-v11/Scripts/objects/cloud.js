/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Cloud = (function () {
        function Cloud(stage, game) {
            this.stage = stage;
            this.game = game;

            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("cloud"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Cloud.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -this.width) {
                this.reset();
            }
        };

        Cloud.prototype.reset = function () {
            this.image.x = 1000;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 10 + 1);
        };

        Cloud.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Cloud;
    })();
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map
