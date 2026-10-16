import { badgeTicketNotches } from "@/data/badges/badge-ticket-notches";

export default function BadgeTicketNotches() {
  return (
    <>
      <style>{badgeTicketNotches.css}</style>
      <span className="he-badge-ticket-notches"><i className="bdg26-notch bdg26-l" aria-hidden="true"></i><span className="bdg26-code">EVT–1042</span><i className="bdg26-notch bdg26-r" aria-hidden="true"></i></span>
    </>
  );
}
