// import { useRouter } from "next/router";

const ProjectView = ({params}: any) => {
    // const router = useRouter();
    // const { orderId } = router.query;
    return (
        <div>project view with id: {params.id}</div>
    )
}
export default ProjectView