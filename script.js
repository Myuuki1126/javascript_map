// JavaScript

var map = L.map('map').setView([33.670683537506484, 130.4454933231803], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
 const whiteIcon = L.icon({
   iconUrl: 'images/ico.png',
   shadowUrl: 'images/ico_shadow.png',
 
 iconSize:     [40, 40], // size of the icon
 shadowSize:   [40, 40], // size of the shadow
 iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
 shadowAnchor: [20, 40],  // the same for the shadow
 popupAnchor:  [0, 42] // point from which the popup should open relative to the iconAnchor
 });

L.marker([33.670683537506484, 130.4454933231803], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');

const circle = L.circle([33.670683537506484, 130.4454933231803], {
  color: 'red', //円の輪郭線の色
  fillColor: '#f03', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 300 //半径、メートルで指定
}).addTo(map);
circle.bindPopup("半径300mの範囲");

// 多角形の表示
const polygon = L.polygon([
  [33.673461, 130.445266],
  [33.677711, 130.44591],
  [33.673854, 130.441146]
], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.3
}).addTo(map);

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);