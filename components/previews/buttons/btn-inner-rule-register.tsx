import { btnInnerRuleRegister } from "@/data/buttons/btn-inner-rule-register";

export default function BtnInnerRuleRegister() {
  return (
    <>
      <style>{btnInnerRuleRegister.css}</style>
      <button className="he-btn-inner-rule-register" type="button">
        <span className="rule rule-above deco"></span>
        <span className="rule rule-below deco"></span>
        <span className="label">Rename file</span>
      </button>
    </>
  );
}
