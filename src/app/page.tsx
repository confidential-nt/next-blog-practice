import FeaturedPosts from "@/components/FeaturedPosts";
import ProfileCard from "@/components/ProfileCard";
import YouMayLike from "@/components/YouMayLike";

export default function HomePage() {
  return (
    <>
      <section className="flex justify-center items-center mb-12">
        <h2 className="hidden">자기소개 섹션</h2>
        <ProfileCard />
      </section>
      <FeaturedPosts />
      <YouMayLike />
    </>
  );
}
