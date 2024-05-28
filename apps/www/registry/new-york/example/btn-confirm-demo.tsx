import { BtnConfirm } from "@/registry/new-york/ui/btn-confirm"

export default function BadgeDemo() {
  return (
    <BtnConfirm
      btnText="OK"
      title="Confirm"
      description="Are you sure?"
      action={() => console.log("Confirm")}
    />
  )
}
