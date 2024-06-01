import Container from "../../pages/shared/Container";

const Skeleton = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row justify-center gap-10 mt-5">
            <div className="flex flex-col gap-4 w-60">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
            <div className="flex flex-col gap-4 w-60">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
            <div className="flex flex-col gap-4 w-60">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
        </div>
        </Container>
    );
};

export default Skeleton;