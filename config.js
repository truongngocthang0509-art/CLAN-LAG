// File cấu hình (tùy chọn). Nếu để trống, web dùng khóa Supabase mặc định trong index.html.
// - Muốn đổi sang dự án Supabase khác: điền 2 giá trị vào đây.
// - Muốn chạy thử không cần Supabase (dữ liệu giả lưu trong trình duyệt): đặt DEMO: true.
// Chỉ dùng khóa Publishable/anon. TUYỆT ĐỐI không dán khóa secret / service_role vào đây.
window.CONFIG = {
  SUPABASE_URL: '',
  SUPABASE_ANON_KEY: '',
  DEMO: false
};
