import { sendMailButton } from "@/data/buttons/send-mail";

export default function BtnSendMail() {
  return (
    <>
      <style>{sendMailButton.css}</style>
      <button type="button" className="btn-send-mail">
        <span className="he-send-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
          </svg>
        </span>
        <span className="he-label">Send</span>
      </button>
    </>
  );
}