// local files
import { PostCard } from '../../components';
import { Main } from '../../containers';
import { getAllPostsQuery } from '../../services/queries';
import { sanityClient } from '../../services/sanity';
import { Post } from '../../typings';
import { navListBlog } from '../../constants';

// typing
interface PropsBlog {
  posts: Post[];
}

export default function Blog({ posts = [] }: PropsBlog) {
  return (
    <Main
      title="Malek Smida | Wanderer Blog"
      metaDescription="Wanderer blog is about: parable and short stories of wisdom, book summary and quotes, spirituality, ancient philosophy, and social psychology"
      isBannerVisible
      navList={navListBlog}
    >
      <div
        className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
        data-testid="posts-container"
      >
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </Main>
  );
}

// server side rendering of home page
export const getServerSideProps = async () => {
  // fetch all posts
  const posts = await sanityClient.fetch(getAllPostsQuery);

  return {
    props: {
      posts,
    },
  };
};
