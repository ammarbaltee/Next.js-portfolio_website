import { Button } from "./ui/moving-border"
import Link from "next/link"

const Cta = () => {
  return (
    <section id="cta" className="py-10 bg-primary dark:bg-secondary/40 mx-20">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-white text-center mb-8">Prepared to turn your ideas into reality? I am here to help</h2>
                <div className="mt-6 mb-6">
                    <Link href='/contact'>
                        <Button borderRadius="1.75rem">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
   
  )
}

export default Cta;