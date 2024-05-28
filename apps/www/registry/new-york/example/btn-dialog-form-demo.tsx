import { BtnDialogForm } from "@/registry/new-york/ui/btn-dialog-form"

const defaultValues = {}

const Form = ({ action }: { action: () => void }) => {
  return (
    <>
      <h1>Form</h1>
      <button onClick={action}>Submit</button>
    </>
  )
}

export default function BadgeDemo() {
  const create = () => new Promise(() => console.log("create"))

  return (
    <BtnDialogForm
      title="New"
      action={create}
      Component={Form}
      btnVariant={"default"}
      defaultValues={defaultValues}
    />
  )
}
