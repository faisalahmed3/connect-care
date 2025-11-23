const doctors = [
  {
    id: 1,
    name: "Dr. Amelia Thompson",
    degree: "MBBS, FCPS (Cardiology)",
    hospital: "GreenLife Hospital",
    specialty: "Cardiologist",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=47",
    biography:
      "Dr. Amelia Thompson is a senior cardiologist with over 12 years of experience in treating cardiovascular diseases. She is known for her expertise in heart failure, cardiac imaging, and preventive cardiology.",
    specialization:
      "Heart disease prevention, cardiac imaging, heart failure management, ECG interpretation.",
    timeSlots: [
      { day: "Monday", time: "9:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "3:00 PM - 6:00 PM" },
      { day: "Friday", time: "5:00 PM - 9:00 PM" },
    ],
    reviews: [
      { user: "John Doe", rating: 5, comment: "Explains everything clearly and patiently." },
      { user: "Sarah Mia", rating: 4, comment: "Very professional and kind doctor." },
    ],
  },

  {
    id: 2,
    name: "Dr. Ethan Carter",
    degree: "MBBS, MD (Neurology)",
    hospital: "United Hospital",
    specialty: "Neurologist",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=52",
    biography:
      "Dr. Ethan Carter is a highly skilled neurologist specializing in stroke, epilepsy, and brain disorders. With 10+ years of experience, he is known for accurate diagnosis and compassionate care.",
    specialization: "Stroke management, epilepsy, migraines, nerve disorders.",
    timeSlots: [
      { day: "Sunday", time: "10:00 AM - 1:00 PM" },
      { day: "Tuesday", time: "2:00 PM - 6:00 PM" },
    ],
    reviews: [
      { user: "Alex Khan", rating: 5, comment: "Helped me recover from chronic migraines." },
      { user: "Marium", rating: 4, comment: "Very understanding and knowledgeable." },
    ],
  },

  {
    id: 3,
    name: "Dr. Sophia Reynolds",
    degree: "MBBS, DDV (Dermatology)",
    hospital: "Popular Diagnostic Centre",
    specialty: "Dermatologist",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=32",
    biography:
      "Dr. Sophia Reynolds is a dermatologist known for treating acne, allergies, and cosmetic skin conditions. She has treated thousands of patients successfully.",
    specialization: "Acne treatment, skin allergy, cosmetic dermatology, laser treatment.",
    timeSlots: [
      { day: "Monday", time: "4:00 PM - 8:00 PM" },
      { day: "Thursday", time: "10:00 AM - 1:00 PM" },
    ],
    reviews: [{ user: "Nadia", rating: 5, comment: "Cleared my acne completely!" }],
  },

  {
    id: 4,
    name: "Dr. Benjamin Clarke",
    degree: "MBBS, MS (Ortho Surgery)",
    hospital: "Square Hospital",
    specialty: "Orthopedic Surgeon",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=15",
    biography:
      "Dr. Benjamin Clarke is an orthopedic surgeon specializing in fractures, joint replacement, and sports injury treatment.",
    specialization: "Bone fracture treatment, joint replacement, sports injuries.",
    timeSlots: [
      { day: "Tuesday", time: "10:00 AM - 1:00 PM" },
      { day: "Thursday", time: "3:00 PM - 7:00 PM" },
    ],
    reviews: [
      { user: "Rafi", rating: 5, comment: "Helped me recover after a knee injury." },
    ],
  },

  {
    id: 5,
    name: "Dr. Olivia Martinez",
    degree: "MBBS, FCPS (Medicine)",
    hospital: "Ibn Sina Medical",
    specialty: "General Physician",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=10",
    biography:
      "Dr. Olivia Martinez is a senior general physician with broad experience in diagnosing complex medical conditions.",
    specialization: "General medicine, diabetes management, hypertension treatment.",
    timeSlots: [
      { day: "Sunday", time: "5:00 PM - 8:00 PM" },
      { day: "Wednesday", time: "9:00 AM - 1:00 PM" },
    ],
    reviews: [
      { user: "Zara", rating: 5, comment: "Very friendly and accurate diagnosis." },
    ],
  },

  {
    id: 6,
    name: "Dr. Liam Anderson",
    degree: "MBBS, MD (Pediatrics)",
    hospital: "Evercare Hospital",
    specialty: "Pediatrician",
    rating: 4.6,
    image: "https://i.pravatar.cc/300?img=56",
    biography:
      "Dr. Liam Anderson is a child specialist with expertise in childhood diseases, nutrition, and vaccine management.",
    specialization: "Childhood infections, nutrition, vaccination, child growth disorders.",
    timeSlots: [
      { day: "Monday", time: "3:00 PM - 6:00 PM" },
      { day: "Thursday", time: "2:00 PM - 5:00 PM" },
    ],
    reviews: [
      { user: "Parents of Aisha", rating: 5, comment: "Very gentle with children." },
    ],
  },

  {
    id: 7,
    name: "Dr. Harper Wilson",
    degree: "MBBS, FCPS (GYNAE)",
    hospital: "Labaid Hospital",
    specialty: "Gynecologist",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=22",
    biography:
      "Dr. Harper Wilson is a gynecology expert with 14 years of experience in pregnancy care, infertility, and women's health.",
    specialization: "Pregnancy care, infertility treatment, menstrual disorders.",
    timeSlots: [
      { day: "Sunday", time: "2:00 PM - 6:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 1:00 PM" },
    ],
    reviews: [
      { user: "Sadia", rating: 5, comment: "Very supportive during pregnancy." },
    ],
  },

  {
    id: 8,
    name: "Dr. Noah Bennett",
    degree: "MBBS, MS (ENT)",
    hospital: "Medinova Hospital",
    specialty: "ENT Specialist",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=5",
    biography:
      "Dr. Noah Bennett specializes in ear, nose, and throat diseases with advanced surgical skills in ENT.",
    specialization: "Sinus issues, ear infections, tonsil treatment, ENT surgery.",
    timeSlots: [
      { day: "Tuesday", time: "4:00 PM - 8:00 PM" },
      { day: "Friday", time: "10:00 AM - 1:00 PM" },
    ],
    reviews: [
      { user: "Hassan", rating: 5, comment: "Solved my sinus issue permanently!" },
    ],
  },

  // --------------------------------------------
  // NOW THE REMAINING DOCTORS (IDs 9–36)
  // SAME STRUCTURE CONTINUED
  // --------------------------------------------

  ...Array.from({ length: 28 }, (_, i) => {
    const base = 9 + i;
    return {
      id: base,
      name: `Dr. Sample Doctor ${base}`,
      degree: "MBBS, MD (Specialized)",
      hospital: "City Hospital",
      specialty: ["Cardiologist", "Neurologist", "Dermatologist", "Pediatrician"][
        i % 4
      ],
      rating: (Math.random() * (5 - 3.8) + 3.8).toFixed(1),
      image: `https://i.pravatar.cc/300?img=${40 + i}`,
      biography:
        "This doctor is highly experienced and has been serving patients with dedication and excellence.",
      specialization: "General specialty care, diagnosis, and treatment.",
      timeSlots: [
        { day: "Monday", time: "10:00 AM - 1:00 PM" },
        { day: "Thursday", time: "3:00 PM - 6:00 PM" },
      ],
      reviews: [
        { user: "Patient A", rating: 5, comment: "Very helpful and caring." },
      ],
    };
  }),
];

export default doctors;
