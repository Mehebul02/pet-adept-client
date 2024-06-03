import { useParams } from "react-router-dom";
import Container from "../shared/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Skeleton from "../../components/skeleton/Skeleton";

const DonationDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: donation = {}, isLoading } = useQuery({
    queryKey: ["donation"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/donation/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return <Container>donation name{donation.name}</Container>;
};

export default DonationDetails;
