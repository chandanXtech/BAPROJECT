import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft,
  BarChart, 
  TrendingUp, 
  Target, 
  CheckCircle,
  Database,
  Zap,
  Palette,
  Shield,
  DollarSign,
  Clock,
  HardDrive,
  Gauge
} from "lucide-react";

const Analytics = () => {
  const analyticsTypes = [
    {
      type: "Descriptive Analytics",
      question: "What has happened?",
      description: "Explains past performance using historical data to identify patterns and trends",
      techniques: ["Data aggregation", "Data mining", "OLAP", "Reporting", "Statistical analysis"],
      example: "Analyzing last quarter's sales revenue by region and product to understand performance trends",
      icon: BarChart,
      color: "text-blue-600"
    },
    {
      type: "Predictive Analytics", 
      question: "What is likely to happen?",
      description: "Uses statistical models and machine learning to forecast future outcomes",
      techniques: ["Regression analysis", "Classification", "Time-series forecasting", "Machine learning", "Neural networks"],
      example: "Predicting the probability of loan default based on customer credit history and behavior patterns",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      type: "Prescriptive Analytics",
      question: "What should we do?",
      description: "Recommends the best course of action among alternatives using optimization",
      techniques: ["Optimization models", "Decision analysis", "Simulation", "AI-driven recommendations", "Game theory"],
      example: "Optimizing delivery routes to minimize cost and time while maximizing customer satisfaction",
      icon: Target,
      color: "text-purple-600"
    }
  ];

  const bigDataVs = [
    {
      v: "Volume",
      description: "Enormous amount of data generated every second",
      example: "Facebook generates >4 petabytes/day",
      significance: "Requires scalable storage (HDFS, cloud)",
      icon: HardDrive,
      color: "text-blue-600"
    },
    {
      v: "Velocity", 
      description: "Speed at which data is generated, collected, and processed",
      example: "Stock trading systems processing data in milliseconds",
      significance: "Requires real-time processing tools (Apache Kafka, Spark Streaming)",
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      v: "Variety",
      description: "Different forms of data: structured, semi-structured, unstructured",
      example: "E-commerce platforms handle order data, customer reviews, images",
      significance: "Requires advanced tools to handle multiple data formats",
      icon: Palette,
      color: "text-green-600"
    },
    {
      v: "Veracity",
      description: "Reliability, accuracy, and quality of data",
      example: "Social media data includes fake reviews, spam",
      significance: "Data cleaning, preprocessing, and validation are critical",
      icon: Shield,
      color: "text-orange-600"
    },
    {
      v: "Value",
      description: "Deriving insights and business opportunities from raw datasets",
      example: "Retailers use purchase data to personalize offers",
      significance: "Without extracting value, data is a cost burden",
      icon: DollarSign,
      color: "text-purple-600"
    }
  ];

  const comparisonData = [
    {
      aspect: "Data Volume",
      traditional: "Smaller, structured datasets (GBs), RDBMS",
      bigData: "Massive datasets (TB, PB+), multiple sources"
    },
    {
      aspect: "Data Variety",
      traditional: "Structured data (rows, columns)",
      bigData: "Structured, semi-structured (JSON, XML), unstructured (text, video)"
    },
    {
      aspect: "Data Velocity",
      traditional: "Batch processing (periodic analysis)",
      bigData: "Real-time or near real-time processing"
    },
    {
      aspect: "Tools & Technologies",
      traditional: "SQL, OLAP, SPSS, SAS",
      bigData: "Hadoop, Spark, NoSQL, Cloud, AI/ML models"
    },
    {
      aspect: "Storage & Infrastructure",
      traditional: "Centralized data warehouses, limited scalability",
      bigData: "Distributed file systems (HDFS), cloud platforms"
    },
    {
      aspect: "Analytical Approach",
      traditional: "Descriptive & diagnostic (\"what happened,\" \"why\")",
      bigData: "Predictive & prescriptive (forecast, optimize)"
    },
    {
      aspect: "Business Value",
      traditional: "Historical insights, reporting, compliance",
      bigData: "Actionable intelligence, agility, personalization, innovation"
    }
  ];

  const useCases = [
    {
      industry: "Retail",
      application: "Customer Analytics",
      description: "Analyzing shopping patterns for personalized recommendations",
      benefits: ["Increased sales", "Better customer experience", "Inventory optimization"]
    },
    {
      industry: "Healthcare",
      application: "Predictive Diagnostics",
      description: "Early disease detection using patient data and medical images",
      benefits: ["Improved patient outcomes", "Cost reduction", "Personalized treatment"]
    },
    {
      industry: "Finance",
      application: "Risk Management",
      description: "Real-time fraud detection and credit risk assessment",
      benefits: ["Reduced fraud losses", "Better risk decisions", "Regulatory compliance"]
    },
    {
      industry: "Manufacturing",
      application: "Predictive Maintenance",
      description: "Equipment failure prediction using sensor data",
      benefits: ["Reduced downtime", "Lower maintenance costs", "Improved safety"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Business Analytics & Big Data</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Understanding analytics types, Big Data characteristics, and how they transform business decision-making
        </p>
      </div>

      {/* Business Analytics Types */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Types of Business Analytics</h2>
        <div className="space-y-6">
          {analyticsTypes.map((analytics, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="flex items-center gap-3">
                    <analytics.icon className={`h-6 w-6 ${analytics.color}`} />
                    {analytics.type}
                  </CardTitle>
                  <Badge variant="outline" className="text-sm">
                    {analytics.question}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{analytics.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Techniques:</h4>
                  <div className="flex flex-wrap gap-2">
                    {analytics.techniques.map((technique, idx) => (
                      <Badge key={idx} variant="secondary">{technique}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Example:</h4>
                  <p className="text-muted-foreground italic">{analytics.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Big Data 5 Vs */}
      <section>
        <h2 className="text-3xl font-bold mb-6">The 5 Vs of Big Data</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bigDataVs.map((v, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                    <v.icon className="h-5 w-5 text-white" />
                  </div>
                  {v.v}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Definition:</h4>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Example:</h4>
                  <p className="text-sm text-muted-foreground italic">{v.example}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{v.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Traditional vs Big Data Analytics Comparison */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Traditional vs Big Data Analytics</h2>
        <Card className="shadow-elegant">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Aspect</th>
                    <th className="text-left p-4 font-semibold text-blue-600">Traditional Analytics</th>
                    <th className="text-left p-4 font-semibold text-purple-600">Big Data Analytics</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 font-medium">{row.aspect}</td>
                      <td className="p-4 text-muted-foreground text-sm">{row.traditional}</td>
                      <td className="p-4 text-muted-foreground text-sm">{row.bigData}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Real-World Use Cases */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Real-World Applications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{useCase.application}</CardTitle>
                  <Badge variant="outline">{useCase.industry}</Badge>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Analytics Maturity Journey */}
      <section>
        <Card className="gradient-secondary shadow-elegant">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Analytics Maturity Journey</h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">Descriptive</h3>
                <p className="text-sm text-muted-foreground">What happened?</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">Diagnostic</h3>
                <p className="text-sm text-muted-foreground">Why did it happen?</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto">
                  <Gauge className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">Predictive</h3>
                <p className="text-sm text-muted-foreground">What will happen?</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">Prescriptive</h3>
                <p className="text-sm text-muted-foreground">What should we do?</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <Link to="/business-intelligence">
          <Button variant="outline" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Previous: Business Intelligence
          </Button>
        </Link>
        <Link to="/framework">
          <Button className="group">
            Next: Framework Analysis
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Analytics;