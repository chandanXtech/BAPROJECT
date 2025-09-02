import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  BarChart3, 
  Database, 
  TrendingUp, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Decision Support Systems",
      description: "Learn about DSS components, architecture, and how they support semi-structured and unstructured decisions.",
      path: "/decision-support"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Explore BI frameworks, data warehousing, OLAP, and presentation layers for better decision-making.",
      path: "/business-intelligence"
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Understand the 5 Vs of Big Data and how analytics transforms massive datasets into business value.",
      path: "/analytics"
    },
    {
      icon: TrendingUp,
      title: "Analytical Framework",
      description: "Discover Gorry and Scott Morton's framework that bridges management levels with decision types.",
      path: "/framework"
    }
  ];

  const learningObjectives = [
    "Understand different types of decisions and their IS support requirements",
    "Learn the architecture and components of Decision Support Systems",
    "Explore Business Intelligence frameworks and their practical applications",
    "Analyze Big Data characteristics and analytics methodologies",
    "Apply Gorry and Scott Morton's framework to real-world scenarios"
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="gradient-primary rounded-2xl p-12 text-white shadow-elegant">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business Analytics
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Information Systems Support for Decision Making
          </p>
          <Badge variant="secondary" className="mb-8 text-lg px-4 py-2">
            Module 1 - CDT42
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/decision-support">
              <Button size="lg" variant="secondary" className="group">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section>
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Course Modules */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Course Modules</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth cursor-pointer">
              <Link to={feature.path}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Overview */}
      <section className="gradient-secondary rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">What You'll Learn</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Decision Types</h3>
            <p className="text-muted-foreground">Structured, Semi-structured, and Unstructured decisions across management levels</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">System Architecture</h3>
            <p className="text-muted-foreground">Database, Model, and User Interface components of decision support systems</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Analytics Evolution</h3>
            <p className="text-muted-foreground">From traditional MIS to modern Big Data analytics and AI-driven insights</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;