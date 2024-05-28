import { BtnRemove } from "@/registry/new-york/ui/btn-remove"

export default function BtnConfirmDemo() {
  const remove = (id: any) => console.log(id) as any

  return <BtnRemove action={remove} entityId={1} />
}
