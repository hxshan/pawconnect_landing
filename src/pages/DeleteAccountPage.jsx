export default function DeleteAccountPage() {
  const email = "chamod914@gmail.com";

  const handleCopy = (e) => {
    navigator.clipboard.writeText(email);
    const btn = e.currentTarget;
    btn.textContent = "Copied!";
    btn.classList.remove("bg-black", "hover:bg-gray-800");
    btn.classList.add("bg-green-600");
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.classList.remove("bg-green-600");
      btn.classList.add("bg-black", "hover:bg-gray-800");
    }, 2000);
  };

  const mailtoLink = `mailto:${email}?subject=Account%20Deletion%20Request&body=Hi%2C%20I%20would%20like%20to%20delete%20my%20PawConnect%20account.%0A%0ARegistered%20email%3A%20`;

  const steps = [
    <>Send an email to <span className="font-medium text-gray-800">{email}</span></>,
    <>Use subject line: <span className="font-medium text-gray-800">Account Deletion Request</span></>,
    <>Include your <span className="font-medium text-gray-800">registered email address</span> in the message body</>,
  ];

  const deletedItems = [
    "Your account information",
    "Profile data and preferences",
    "Uploaded photos and content",
    "Connection history and messages",
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F9] flex flex-col items-center justify-center px-4 py-10">

      {/* Logo */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-[#FFBEDA] rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
          🐾
        </div>
        <p className="text-xl font-medium text-[#FB6F92]">PawConnect</p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border border-[#FFBEDA] p-6 sm:p-8 w-full max-w-md">

        <h1 className="text-lg font-medium text-gray-900 mb-1">Account deletion request</h1>
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          To delete your PawConnect account, send us an email using the details below.
          We'll process your request within 7 business days.
        </p>

        {/* Contact */}
        <div className="mb-6">
          <p className="text-xs font-medium text-[#FB6F92] uppercase tracking-widest mb-2">Contact</p>
          <div className="bg-[#FFF0F3] border border-[#F4C0D1] rounded-xl px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-[#72243E] break-all">{email}</span>
            <button
              onClick={handleCopy}
              className="bg-black text-white hover:bg-gray-800 text-xs px-3 py-1.5 rounded-lg shrink-0 transition-colors duration-150"
            >
              Copy
            </button>
          </div>
        </div>

        {/* How to request */}
        <div className="mb-6">
          <p className="text-xs font-medium text-[#FB6F92] uppercase tracking-widest mb-2">How to request</p>
          <div className="space-y-0">
            {steps.map((text, i) => (
              <div
                key={i}
                className={`flex gap-3 items-start py-3 ${i < steps.length - 1 ? "border-b border-[#FFF0F3]" : ""}`}
              >
                <div className="w-6 h-6 bg-[#FFBEDA] rounded-full flex items-center justify-center text-xs font-medium text-[#72243E] shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What will be deleted */}
        <div className="mb-6">
          <p className="text-xs font-medium text-[#FB6F92] uppercase tracking-widest mb-2">What will be deleted</p>
          <div className="bg-gray-50 rounded-xl px-4 py-3 space-y-2">
            {deletedItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FB6F92] shrink-0 mt-2" />
                <p className="text-sm text-gray-500">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data retention */}
        <div className="mb-6">
          <p className="text-xs font-medium text-[#FB6F92] uppercase tracking-widest mb-2">Data retention</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-sm text-yellow-800 leading-relaxed">
            Some data may be retained for up to <span className="font-medium">30 days</span> for
            security and legal purposes before being permanently removed.
          </div>
        </div>

        {/* CTA */}
        <a
          href={mailtoLink}
          className="block w-full bg-black text-white text-center text-sm sm:text-base font-medium py-3.5 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
        >
          Send deletion request email
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-6 text-center">
        © {new Date().getFullYear()} PawConnect. All rights reserved.
      </p>
    </div>
  );
}
