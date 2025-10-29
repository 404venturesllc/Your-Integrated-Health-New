// Real customer testimonials
// Update this file to change reviews across the entire site

export interface Testimonial {
  name: string;
  role?: string;
  age?: string;
  content: string;
  rating: number;
  accentColor?: string;
  image?: string;
}

// Testimonials for homepage carousel (simple format)
export const homePageTestimonials: Testimonial[] = [
  {
    name: 'Sarah R.',
    role: 'Verified Patient',
    content: 'Megan is an incredibly compassionate and caring integrative practitioner. Her knowledge of integrative medicine and hormones is truly extraordinary. I highly recommend her if you\'re looking for a practitioner who genuinely cares!',
    rating: 5,
  },
  {
    name: 'Serina Centers',
    role: 'Metabolic Health Success',
    content: 'Meghan has been an amazing resource along my metabolic journey to better health. Her care and commitment to her patients health are evident in how she listens, talks and recommends "treatments" for each individual persons needs and concerns.',
    rating: 5,
  },
  {
    name: 'Kathy Moussavi',
    role: 'Verified Patient',
    content: 'Megan is Very professional and knowledgeable, I recommend to all friends and family. Thanks',
    rating: 5,
  },
  {
    name: 'Mehr',
    role: 'Migraine & Hormone Health',
    content: 'Integrative medicine has been a game-changer for me! With their guidance, I gained valuable insights into the underlying causes of my symptoms. Taking an active role in my healthcare decisions was empowering. With the support of integrative medicine, I\'m regaining my sense of self and experiencing a life with renewed vitality.',
    rating: 5,
  },
  {
    name: 'Nazi',
    role: 'PCOS & Menopause',
    content: 'Really good experience. I consulted with Megan, she was very thorough in both appointments, really listening to my concerns and finding the right supplements and life style changes. I\'m 43-year-old with PCOS and after having gone to several doctors I finally found a place where they did the correct exams and truly listened to my concerns. It\'s pricey, but worth every penny. I highly recommend it.',
    rating: 5,
  },
  {
    name: 'Jas',
    role: 'GLP-1 Success',
    content: 'Megan sent the LillyDirect script Friday morning; I ordered that afternoon and the vials arrived by Monday. By week 4, I felt more in control around food.',
    rating: 5,
  },
  {
    name: 'Teressa',
    role: 'Lost 23 lbs in 45 Days',
    content: 'I have tried countless diets and exercise programs, but nothing ever gave me the sustainable results I was looking for. Within days of starting the program, I felt a significant improvement in my health and wellbeing. Now, after 45 days, I have lost 23lbs of my body weight and have experienced added benefits such as improved mental clarity and a more positive attitude towards life. I am not hungry, I still eat out, and I am happier with my progress than I have ever been before.',
    rating: 5,
  },
];

// Testimonials for services page (detailed format with images)
export const servicesPageTestimonials: Testimonial[] = [
  {
    name: "Sarah R.",
    age: "Patient",
    accentColor: "#61a94e",
    content: "Megan is an incredibly compassionate and caring integrative practitioner. Her knowledge of integrative medicine and hormones is truly extraordinary. I highly recommend her if you're looking for a practitioner who genuinely cares!",
    rating: 5,
  },
  {
    name: "Serina Centers",
    age: "Patient",
    accentColor: "#236189",
    content: "Meghan has been an amazing resource along my metabolic journey to better health. Her care and commitment to her patients health are evident in how she listens, talks and recommends treatments for each individual persons needs and concerns. I highly recommend anyone looking to improve your health and quality of life to go see Meghan.",
    rating: 5,
  },
  {
    name: "Kathy Moussavi",
    age: "Patient",
    accentColor: "#61a94e",
    content: "Megan is Very professional and knowledgeable, I recommend to all friends and family. Thanks",
    rating: 5,
  },
];

