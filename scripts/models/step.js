var jp = jp || {};

$(document).ready(function () {
    var _private = {
        // Euclidean distance, C = current, T = target
        distanceE: function (xC, yC, xT, yT) {
            var dx = xT - xC, dy = yT - yC;
            return Math.sqrt((dx * dx) + (dy * dy));
        },

        // Manhattan distance (use this one)
        distanceM: function (xC, yC, xT, yT) {
            var dx = Math.abs(xT - xC), dy = Math.abs(yT - yC);
            return dx + dy;
        }
    };

    jp.step = function(xC, yC, xT, yT, totalSteps) {
        // herustic
        var h = _private.distanceM(xC, yC, xT, yT);

        return {
            x: x,
            y: y,
            g: totalSteps,
            h: h,
            f: totalSteps + h
        }
    };
});