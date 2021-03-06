﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Ocean Class
    export class BgSky {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("bgSky"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= -635) {
                this.image.x = 0;
            }
        }

        reset() {
            this.image.x = 0;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}