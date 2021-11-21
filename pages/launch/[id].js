import { useRouter } from 'next/router'
export default function Launch() {

    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            Launch klk {id}
        </div>
    )
}
