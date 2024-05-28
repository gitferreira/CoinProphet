import Heading from "../components/Heading";
import Post from "../components/Post";
import Section from "../components/Section";
import { blogPosts } from "../constants";

const Blog = () => {
  return (
    <div className="">
      <Section
        crosses
        className="overflow-hidden flex flex-col items-center justify-center pt-[9.75rem] "
      >
        <div className="w-[40rem] text-center text-wrap">
          <Heading className="!mb-0" title="CoinProphet's Blog" />{" "}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8 text-center text-wrap w-[20rem] md:w-[40rem]">
            Stay Ahead of the Market with the Latest News and Comprehensive
            Insights
          </p>
        </div>
        <div className="w-1/3 mb-6">
          <input
            type="text"
            placeholder=" Search by Topic"
            className=" hidden lg:flex p-3 bg-n-9/10 backdrop-blur border border-n-1/10 rounded-3xl my-3 w-full text-left "
          />
        </div>

        <div className="flex w-full lg:w-[70rem] ">
          <div className=" hidden lg:flex w-1/3  p-4">
            <ul>
              <li className="mb-15 border-b border-n-1/10 pb-3 font-bold hover:border-n-9/30">
                <a href="#future">The Future of DeFi</a>
              </li>
              <li className="mb-15 border-b border-n-1/10 pb-3 font-bold hover:border-n-9/30 ">
                <a href="#top-10">Top 10 Emerging Cryptocurrencies </a>
              </li>
              <li className="mb-15 border-b border-n-1/10 pb-3 font-bold hover:border-n-9/30">
                <a href="#crypto-security">Crypto Security</a>
              </li>
              <li className="mb-15 border-b border-n-1/10 pb-3 font-bold hover:border-n-9/30">
                <a href="#ai">The Role of AI in Crypto Trading</a>
              </li>
            </ul>
          </div>

          <div className="w-[100%] flex flex-col justify-center items-center ">
            {blogPosts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                text1={post.text1}
                text2={post.text2}
                number={post.number}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
