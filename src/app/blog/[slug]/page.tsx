import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "spring-2025-nail-trends": {
      id: "spring-2025-nail-trends",
      title: "Spring 2025 Nail Color Trends You Need to Try",
      excerpt:
        "Discover the hottest nail colors and designs that are taking over this spring season.",
      category: "trends",
      date: "March 15, 2025",
      author: "Sandali",
      readTime: "5 min read",
      image: "🌸",
      content: `
        <p>Spring is here, and with it comes a fresh palette of stunning nail colors that are perfect for the season! As a professional nail technician, I'm excited to share the top trends that I'm seeing in my salon and across the beauty industry.</p>

        <h2>1. Soft Pastels Take Center Stage</h2>
        <p>This spring, we're seeing a beautiful shift towards soft, dreamy pastels. Think baby pink, lavender, mint green, and butter yellow. These colors are perfect for both everyday wear and special occasions.</p>

        <h2>2. Creamy Nudes with a Twist</h2>
        <p>While nudes are always classic, this season we're adding subtle undertones of peach, rose, and beige. These sophisticated shades complement all skin tones and look stunning with both short and long nails.</p>

        <h2>3. Bold Coral and Salmon</h2>
        <p>For those who love a pop of color, coral and salmon shades are having a major moment. These vibrant yet wearable colors are perfect for transitioning from spring into summer.</p>

        <h2>4. Metallic Accents</h2>
        <p>Adding metallic accents to your spring manicure is a great way to elevate any look. Rose gold, champagne, and soft silver work beautifully as accent nails or in nail art designs.</p>

        <h2>Pro Tips for Spring Nails</h2>
        <ul>
          <li>Always use a good base coat to protect your nails</li>
          <li>Consider gel polish for longer-lasting color</li>
          <li>Don't forget to moisturize your cuticles daily</li>
          <li>Book touch-ups every 2-3 weeks to maintain the look</li>
        </ul>

        <p>Ready to try these spring trends? Book your appointment at Pretty Tips and let's create the perfect spring manicure for you!</p>
      `,
    },
    "manicure-last-longer": {
      id: "manicure-last-longer",
      title: "7 Pro Tips to Make Your Manicure Last 2+ Weeks",
      excerpt:
        "Learn the secrets that nail technicians use to extend the life of your manicure.",
      category: "care",
      date: "March 10, 2025",
      author: "Sandali",
      readTime: "8 min read",
      image: "💅",
      content: `
        <p>Nothing is more frustrating than spending money on a beautiful manicure only to have it chip within a few days. As a professional nail technician with over 8 years of experience, I'm sharing my top secrets for making your manicure last 2+ weeks!</p>

        <h2>1. Start with Healthy Nails</h2>
        <p>The foundation of a long-lasting manicure is healthy nails. Make sure your nails are clean, properly shaped, and your cuticles are pushed back before applying any polish.</p>

        <h2>2. Use a Quality Base Coat</h2>
        <p>Never skip the base coat! A good base coat creates a smooth surface and helps the polish adhere better to your nails. I recommend using a ridge-filling base coat for the best results.</p>

        <h2>3. Apply Thin, Even Coats</h2>
        <p>Instead of applying two thick coats, use three thin coats of polish. This allows each layer to dry properly and creates a more durable finish.</p>

        <h2>4. Seal the Edges</h2>
        <p>This is a professional secret! When applying your base coat, color, and top coat, make sure to "seal" the free edge of your nail by running the brush along the tip.</p>

        <h2>5. Invest in a Good Top Coat</h2>
        <p>A high-quality top coat is essential for protecting your manicure. Look for one that's chip-resistant and provides a high-gloss finish.</p>

        <h2>6. Give It Time to Cure</h2>
        <p>Rushing the drying process is the #1 cause of chipped manicures. Wait at least 2 hours before doing any activities that could damage your nails.</p>

        <h2>7. Maintain Your Manicure</h2>
        <p>Apply cuticle oil daily and reapply top coat every 3-4 days to maintain the shine and protection.</p>

        <p>Follow these professional tips, and I guarantee your manicure will last much longer! For the best results, book a professional manicure at Pretty Tips where we use only premium products and techniques.</p>
      `,
    },
  };

  return posts[slug as keyof typeof posts] || null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Pretty Tips by Sandali",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Pretty Tips by Sandali`,
    description: post.excerpt,
    keywords: ["nail care", "manicure", "beauty tips", post.category],
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>

            <div className="text-center">
              <div className="text-8xl mb-6">{post.image}</div>
              <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>By {post.author}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
                color: "#374151",
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                  👩‍🎨
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sandali</h3>
                  <p className="text-gray-600">
                    Professional Nail Technician & Owner
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                With over 8 years of experience in the nail industry, Sandali is
                passionate about creating beautiful nails and sharing her
                knowledge with clients. She specializes in gel applications,
                nail art, and helping clients maintain healthy, strong nails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/nail-art-basics">
                <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">🎨</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Nail Art for Beginners: Simple Designs You Can Do at Home
                  </h3>
                  <p className="text-gray-600">
                    Start your nail art journey with these easy-to-follow
                    designs and techniques.
                  </p>
                </div>
              </Link>
              <Link href="/blog/nail-health-guide">
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">🌿</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    The Complete Guide to Healthy Nails: What You Need to Know
                  </h3>
                  <p className="text-gray-600">
                    Everything about maintaining strong, healthy nails from
                    cuticle care to nutrition.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s bring these nail trends to life! Book your appointment
            today.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-pink-600 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
