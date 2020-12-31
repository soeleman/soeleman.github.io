window.onload = function () {
    'use strict';
	
	Array.prototype.random = function () {
	  return this[Math.floor((Math.random()*this.length))];
	}
	
	var imgs = ["chinatown_hdr-1280x800.jpg","city_nights__lights-1280x800.jpg","false_creek_at_night-1280x800.jpg","hancock_center_illinois-1280x800.jpg","manhattan_downtown-1280x800.jpg","paris_eiffel_tower-1280x800.jpg","san_diego_skyline-1280x800.jpg","san_francisco_sunset-1280x800.jpg","seoul_south_korea-1280x800.jpg","sunset_over_new_jersey-1280x800.jpg","tokyo_nights-1280x960.jpg"];
	var yts = ["iTEEdfO8GCQ","IUzNSXXrDis","6rMekV_uP4I","0zpaPX_5hwo","2pbEarwdusc","Lxjaq1R3AYw","cMdT7SMbBCc","Gl0fdnJPKXE","KD8gEYrLd5c","447yaU_4DF8","OOO4ROO_sPM","68xjjR5ztoQ","gOMhN-hfMtY"];

    var t = document.getElementById('background');
    t.onload = function() {
        var engine = new RainyDay({
            image: this
        });
        engine.rain([[0, 2, 200], [3, 3, 1]], 100);
    };
    t.crossOrigin = 'anonymous';
    t.src = "https://dl.dropboxusercontent.com/u/19973434/images/Rainy/" + imgs.random();

    var n = document.getElementById('youtube');
    var r = document.createElement('iframe');
    r.frameborder = '0';
    r.height = '1';
    r.width = '1';
    r.src = 'https://youtube.com/embed/' + yts.random() + '?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1';
    n.appendChild(r);
};