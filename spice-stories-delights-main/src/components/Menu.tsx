import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuCategories = [
  {
    name: "Appetizers (शुरुआत)",
    items: [
      { name: "Samosa", description: "Crispy pastry with spiced potatoes", price: "₹80" },
      { name: "Paneer Tikka", description: "Grilled cottage cheese with tandoori spices", price: "₹220" },
      { name: "Aloo Tikki Chaat", description: "Potato patties with tangy chutneys", price: "₹120" },
      { name: "Mumbai Vada Pav", description: "Spiced potato fritter in soft bun", price: "₹60" },
    ],
  },
  {
    name: "Main Course (मुख्य व्यंजन)",
    items: [
      { name: "Dal Makhani", description: "Maa ke haath ka swad - creamy black lentils", price: "₹280" },
      { name: "Butter Chicken", description: "Tender chicken in rich tomato cream sauce", price: "₹380" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in velvety gravy", price: "₹320" },
      { name: "Mumbai Pav Bhaji", description: "Spiced vegetable curry with buttered buns", price: "₹180" },
      { name: "Biryani (Special)", description: "Fragrant basmati with aromatic spices", price: "₹350" },
    ],
  },
  {
    name: "Breads (रोटी)",
    items: [
      { name: "Butter Naan", description: "Soft leavened bread", price: "₹60" },
      { name: "Garlic Naan", description: "With fresh garlic and butter", price: "₹80" },
      { name: "Tandoori Roti", description: "Whole wheat flatbread", price: "₹40" },
      { name: "Laccha Paratha", description: "Flaky layered bread", price: "₹70" },
    ],
  },
  {
    name: "Desserts (मिठाई)",
    items: [
      { name: "Gulab Jamun", description: "Soft milk dumplings in rose syrup", price: "₹100" },
      { name: "Kulfi", description: "Traditional Indian ice cream", price: "₹100" },
      { name: "Gajar Halwa", description: "Sweet carrot pudding with nuts", price: "₹140" },
    ],
  },
  {
    name: "Beverages (पेय)",
    items: [
      { name: "Masala Chai", description: "Traditional spiced tea", price: "₹50" },
      { name: "Sweet Lassi", description: "Refreshing yogurt drink", price: "₹80" },
      { name: "Mango Lassi", description: "With fresh mango pulp", price: "₹100" },
      { name: "Fresh Lime Soda", description: "Swad anusaar - sweet or salty", price: "₹60" },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-xl text-muted-foreground">
            From dal-chawal to biryani, every dish has a story
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, idx) => (
            <Card
              key={idx}
              className="hover-lift border-border bg-card animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border-b border-border pb-3 last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <span className="font-bold text-accent">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
