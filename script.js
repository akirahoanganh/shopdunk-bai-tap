const sanPham = [
    { ten: 'iPhone 17 Pro Max', loai: 'iPhone', anh: 'iphone-pro-max.png', gia: 34990000, mota: 'Điện thoại màn hình lớn, phù hợp chụp ảnh và giải trí.' },
    { ten: 'iPhone 17 Pro', loai: 'iPhone', anh: 'iphone-pro.png', gia: 29990000, mota: 'Điện thoại dòng Pro với thiết kế gọn hơn.' },
    { ten: 'iPad Pro M5', loai: 'iPad', anh: 'ipad-pro.png', gia: 27990000, mota: 'Máy tính bảng phục vụ học tập, vẽ và làm việc.' },
    { ten: 'iPad A16', loai: 'iPad', anh: 'ipad.png', gia: 9990000, mota: 'Máy tính bảng cho học online và giải trí hằng ngày.' },
    { ten: 'MacBook Air M4', loai: 'Mac', anh: 'macbook.jpeg', gia: 24990000, mota: 'Máy tính xách tay mỏng nhẹ, thuận tiện mang theo.' },
    { ten: 'Apple Watch SE 3', loai: 'Watch', anh: 'watch.jpeg', gia: 6490000, mota: 'Đồng hồ thông minh hỗ trợ theo dõi vận động.' },
    { ten: 'AirPods 4', loai: 'Am thanh', anh: 'airpods.jpeg', gia: 3490000, mota: 'Tai nghe không dây dùng để nghe nhạc và gọi điện.' },
    {"ten":"iPhone 16 128GB","loai":"iPhone","anh":"san-pham-1.jpeg","gia":10990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 16 Plus 128GB","loai":"iPhone","anh":"san-pham-2.jpeg","gia":11990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 15 128GB","loai":"iPhone","anh":"san-pham-3.webp","gia":12990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 16e 128GB","loai":"iPhone","anh":"san-pham-4.jpeg","gia":13990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 15 Plus 128GB","loai":"iPhone","anh":"san-pham-5.jpeg","gia":14990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 13 128GB","loai":"iPhone","anh":"san-pham-6.png","gia":15990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 16 256GB","loai":"iPhone","anh":"san-pham-7.jpeg","gia":16990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 16e 256GB","loai":"iPhone","anh":"san-pham-8.jpeg","gia":17990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 16e 512GB","loai":"iPhone","anh":"san-pham-9.jpeg","gia":18990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 14 Plus 128GB","loai":"iPhone","anh":"san-pham-10.png","gia":19990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"iPhone 14  128GB","loai":"iPhone","anh":"san-pham-11.png","gia":20990000,"mota":"Điện thoại Apple với nhiều lựa chọn phù hợp nhu cầu sử dụng."},
    {"ten":"MacBook Neo 13 inch 256GB","loai":"Mac","anh":"san-pham-12.jpeg","gia":30490000,"mota":"Máy tính Apple dành cho học tập và làm việc."},
    {"ten":"MacBook Neo 13 inch 512GB","loai":"Mac","anh":"san-pham-13.jpeg","gia":30990000,"mota":"Máy tính Apple dành cho học tập và làm việc."},
    {"ten":"MacBook Air M5 13 inch 512GB","loai":"Mac","anh":"san-pham-14.jpeg","gia":31490000,"mota":"Máy tính Apple dành cho học tập và làm việc."},
    {"ten":"MacBook Pro M5 Pro 14 inch","loai":"Mac","anh":"san-pham-15.jpeg","gia":31990000,"mota":"Máy tính Apple dành cho học tập và làm việc."},
    {"ten":"Mac mini M6 256GB","loai":"Mac","anh":"san-pham-16.jpeg","gia":32490000,"mota":"Máy tính Apple dành cho học tập và làm việc."},
    {"ten":"Mac mini M6 512GB","loai":"Mac","anh":"san-pham-17.jpeg","gia":32990000,"mota":"Máy tính Apple dành cho học tập và làm việc."},
    {"ten":"iPad Air (M4) 11-inch Wi-Fi","loai":"iPad","anh":"san-pham-18.jpeg","gia":15990000,"mota":"Máy tính bảng cho đọc tài liệu, ghi chú và giải trí."},
    {"ten":"iPad mini (A17 Pro) Wi-Fi 128GB","loai":"iPad","anh":"san-pham-19.jpeg","gia":15990000,"mota":"Máy tính bảng cho đọc tài liệu, ghi chú và giải trí."}
];
let loaiDangChon = 'tat-ca';
const oTimKiem = document.getElementById('tu-khoa');
const danhSach = document.getElementById('danh-sach-san-pham');
const hopChiTiet = document.getElementById('chi-tiet');
function hienSanPham() {
    danhSach.innerHTML = '';
    const tuKhoa = oTimKiem.value.trim().toLowerCase();
    let soKetQua = 0;
    sanPham.forEach(function (sp, viTri) {
        if ((loaiDangChon === 'tat-ca' || sp.loai === loaiDangChon) && sp.ten.toLowerCase().includes(tuKhoa)) {
            const the = document.createElement('article');
            the.className = 'the-san-pham';
            the.innerHTML = '<img src="images/' + sp.anh + '" alt="' + sp.ten + '">' +
                '<h3>' + sp.ten + '</h3><p class="gia">' + sp.gia.toLocaleString('vi-VN') + ' ₫</p>' +
                '<button type="button">Xem chi tiết</button>';
            the.querySelector('button').onclick = function () { xemChiTiet(viTri); };
            danhSach.appendChild(the);
            soKetQua++;
        }
    });
    document.getElementById('khong-tim-thay').hidden = soKetQua !== 0;
    document.getElementById('ket-qua-tim').textContent = soKetQua + ' sản phẩm';
}
function chonLoai(loai) {
    loaiDangChon = loai;
    document.querySelectorAll('[data-loai]').forEach(function (nut) {
        const duocChon = nut.dataset.loai === loai;
        nut.classList.toggle('dang-chon', duocChon);
        nut.setAttribute('aria-pressed', duocChon);
    });
    hienSanPham();
}
document.querySelectorAll('[data-loai]').forEach(function (nut) {
    nut.onclick = function () { chonLoai(nut.dataset.loai); };
});
document.getElementById('form-tim-kiem').onsubmit = function (suKien) {
    suKien.preventDefault();
    hienSanPham();
    document.getElementById('san-pham').scrollIntoView();
};
oTimKiem.oninput = hienSanPham;
document.getElementById('xem-tat-ca').onclick = function () {
    oTimKiem.value = '';
    chonLoai('tat-ca');
};
function xemChiTiet(viTri) {
    const sp = sanPham[viTri];
    document.getElementById('ten-chi-tiet').textContent = sp.ten;
    document.getElementById('anh-chi-tiet').src = 'images/' + sp.anh;
    document.getElementById('anh-chi-tiet').alt = sp.ten;
    document.getElementById('mo-ta-chi-tiet').textContent = sp.mota;
    hopChiTiet.showModal();
}
document.getElementById('dong-chi-tiet').onclick = function () { hopChiTiet.close(); };
const banner = [0, 2, 4];
let viTriBanner = 0;
function doiBanner(buoc) {
    viTriBanner = (viTriBanner + buoc + banner.length) % banner.length;
    const sp = sanPham[banner[viTriBanner]];
    document.getElementById('ten-banner').textContent = sp.ten;
    document.getElementById('mo-ta-banner').textContent = sp.mota;
    document.getElementById('anh-banner').src = 'images/' + sp.anh;
    document.getElementById('anh-banner').alt = sp.ten;
    document.getElementById('vi-tri-banner').textContent = (viTriBanner + 1) + ' / 3';
}
document.getElementById('banner-truoc').onclick = function () { doiBanner(-1); };
document.getElementById('banner-sau').onclick = function () { doiBanner(1); };
document.getElementById('xem-banner').onclick = function () {
    oTimKiem.value = '';
    chonLoai(sanPham[banner[viTriBanner]].loai);
};
hienSanPham();
