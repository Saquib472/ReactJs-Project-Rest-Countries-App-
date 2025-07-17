import { useRouteError } from "react-router"

export default function Error() {
  const error = useRouteError()
  return (
    <div>Something Went Wrong! {error.status} : {error.statusText}</div>
  )
}
