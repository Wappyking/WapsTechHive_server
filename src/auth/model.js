const supabase = require("../../config/supaconfig_index");

function contactUs_public_model({ name, email, phone, subject, message }) {
  return supabase
    .from("contact_us")
    .insert([
      {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      },
    ])
    .select();
}

module.exports = { contactUs_public_model };
