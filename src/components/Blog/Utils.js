export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  export const blogPosts = [
    {
      id: 1,
      title: "Cloud Computing: Transforming the Way We Work and Innovate",
      author: "Kushal Pipaliya",
      authorImage: "https://res.cloudinary.com/day0qlfda/image/upload/v1735037695/bhivpgbh9x6xn5n7ka7n.png  ",
      date: "2024-12-20",
      category: "Cloud Computing",
      image: "https://res.cloudinary.com/day0qlfda/image/upload/v1735038253/uepdfgga1qcnwzgocark.jpg",
      excerpt: "Cloud computing has revolutionized the way we work, offering cost-efficiency, scalability, and innovation. Learn how it’s shaping the future of technology.",
      likes: 18,
      views: 26,
      content: [
        {
          title: "Introduction",
          data: "Imagine accessing your files, tools, and even entire servers from anywhere in the world with just an internet connection. This is the power of cloud computing a technology that has transformed the way businesses and individuals work. But how exactly does it work, and what makes it so impactful? Let’s explore. For more insights and resources, visit smartlearningwithkhp.netlify.app."
        },
        {
          title: "The Basics of Cloud Computing",
          data: "Cloud computing allows you to store, manage, and process data on remote servers hosted on the internet instead of local computers. Think of it as renting a virtual space to store and access your data securely."
        },
        {
          title: "Key Benefits of Cloud Computing",
          data: [
            {
              point: "Cost Efficiency",
              description: "Companies no longer need to invest in expensive hardware. With cloud services, you pay only for what you use."
            },
            {
              point: "Scalability",
              description: "Whether you're a small startup or a growing enterprise, cloud computing adjusts to your needs seamlessly."
            },
            {
              point: "Accessibility",
              description: "Work from anywhere in the world with your files and applications just a click away."
            }
          ]
        },
        {
          title: "Real-World Examples",
          data: [
            {
              example: "Netflix",
              description: "Uses cloud computing to manage its vast library of shows and movies, ensuring smooth streaming for millions of users."
            },
            {
              example: "Dropbox",
              description: "Allows individuals and businesses to store and share files effortlessly."
            }
          ]
        },
        {
          title: "Challenges in Cloud Computing",
          data: [
            {
              point: "Security Concerns",
              description: "With sensitive data stored online, ensuring security is a top priority."
            },
            {
              point: "Downtime",
              description: "Internet outages can affect access to cloud services, which can be a drawback for businesses."
            }
          ]
        },
        {
          title: "The Future of Cloud Computing",
          data: "As technology evolves, cloud computing will only become more advanced, incorporating trends like edge computing and AI-driven cloud services. Businesses that embrace this technology will stay ahead in the competitive landscape."
        },
        {
          title: "Conclusion",
          data: "Cloud computing is more than just a tech buzzword; it's a revolution. Whether it's improving cost efficiency, enabling innovation, or supporting remote work, its impact is undeniable. Have you explored cloud solutions for your personal or professional needs? Let us know in the comments below!"
        }
      ]
    }
  ];