/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Bullet {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("bullet"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 10;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= -this.width - 3000) {
                this.reset();
            }
        }

        reset() {
            this.image.x = stage.canvas.width + 1000;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}