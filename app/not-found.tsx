import Wrapper from "@/components/common/wrapper"
import { Button } from "@/components/ui/button"
const NotFound = () => {
    return (
        <Wrapper className="font-host py-20 font-host flex gap-2 items-center justify-center flex-col">
          <h1 className="text-8xl  font-semibold">404 Error</h1>
          <p className="text-2xl font-semibold text-neutral-400">You have reached the void!</p>
          <p className="text-neutral-500">Page Not Found</p>
          <Button className="mt-4" variant="outline">Back to home</Button>
        </Wrapper>
    )
}
export default NotFound