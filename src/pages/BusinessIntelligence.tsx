import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft,
  Database, 
  BarChart, 
  Monitor, 
  TrendingUp,
  CheckCircle,
  ArrowDown,
  Layers,
  Filter,
  Eye
} from "lucide-react";

const BusinessIntelligence = () => {
  const biLayers = [
    {
      layer: "Data Layer (Data Sources & Integration)",
      description: "Foundation layer collecting data from various sources",
      components: [
        {
          title: "Sources",
          items: ["Operational databases (ERP, CRM)", "Spreadsheets", "External data (market, competitor, social media)"]
        },
        {
          title: "Integration",
          items: ["Data Warehouse", "ETL (Extract, Transform, Load) tools", "Data quality management"]
        }
      ],
      icon: Database,
      color: "text-blue-600"
    },
    {
      layer: "Data Storage Layer",
      description: "Centralized repository for historical and current data",
      components: [
        {
          title: "Repository",
          items: ["Data Warehouse", "Data Marts (departmental)", "Metadata management"]
        },
        {
          title: "Organization",
          items: ["Structured for querying", "OLAP cubes", "Multidimensional analysis"]
        }
      ],
      icon: Layers,
      color: "text-green-600"
    },
    {
      layer: "Analytics Layer (Business Analytics)",
      description: "Processing and analysis of stored data to extract insights",
      components: [
        {
          title: "Tools",
          items: ["Statistical analysis", "Data mining", "Machine learning", "Predictive analytics"]
        },
        {
          title: "Purpose",
          items: ["Identify trends", "Pattern recognition", "Forecast outcomes", "Performance analysis"]
        }
      ],
      icon: BarChart,
      color: "text-purple-600"
    },
    {
      layer: "Presentation Layer (User Interface)",
      description: "Visual representation and delivery of insights to users",
      components: [
        {
          title: "Output",
          items: ["Dashboards", "Scorecards", "Reports", "Visualization tools"]
        },
        {
          title: "Features",
          items: ["KPIs display", "Drill-down capabilities", "Interactive charts", "Real-time updates"]
        }
      ],
      icon: Monitor,
      color: "text-orange-600"
    }
  ];

  const biFeatures = [
    {
      title: "Data Integration",
      description: "Combines data from multiple sources into a unified view",
      benefits: ["Single source of truth", "Consistent data quality", "Reduced data silos"],
      icon: Filter
    },
    {
      title: "Historical Analysis",
      description: "Stores and analyzes historical data for trend identification",
      benefits: ["Trend analysis", "Performance comparison", "Seasonal patterns"],
      icon: TrendingUp
    },
    {
      title: "Real-time Monitoring",
      description: "Provides up-to-date information for timely decision making",
      benefits: ["Immediate alerts", "Current performance", "Proactive responses"],
      icon: Eye
    },
    {
      title: "Self-Service Analytics",
      description: "Empowers users to create their own reports and analyses",
      benefits: ["Reduced IT dependency", "Faster insights", "User empowerment"],
      icon: Monitor
    }
  ];

  const implementationSteps = [
    {
      step: "1. Data Assessment",
      description: "Identify and evaluate current data sources",
      activities: ["Data audit", "Quality assessment", "Source mapping", "Gap analysis"]
    },
    {
      step: "2. Infrastructure Setup",
      description: "Build the technical foundation for BI",
      activities: ["Data warehouse design", "ETL process development", "Security implementation", "Performance optimization"]
    },
    {
      step: "3. Analytics Development",
      description: "Create analytical models and reports",
      activities: ["KPI definition", "Dashboard design", "Report templates", "Alert configuration"]
    },
    {
      step: "4. User Training & Adoption",
      description: "Ensure successful user adoption and utilization",
      activities: ["Training programs", "Documentation", "Support processes", "Feedback collection"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Business Intelligence Framework</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Understanding BI architecture, processes, and technologies that transform data into actionable insights
        </p>
      </div>

      {/* BI Definition */}
      <section>
        <Card className="gradient-primary text-white shadow-elegant">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">What is Business Intelligence?</h2>
            <p className="text-lg opacity-90 mb-4">
              Business Intelligence (BI) is a combination of processes, tools, and technologies that collect, integrate, 
              analyze, and present business information to support better decision-making across all organizational levels.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-primary">Data Integration</Badge>
              <Badge variant="secondary" className="text-primary">Analytics</Badge>
              <Badge variant="secondary" className="text-primary">Visualization</Badge>
              <Badge variant="secondary" className="text-primary">Decision Support</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* BI Architecture Layers */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Architecture of BI Framework</h2>
        <div className="space-y-4">
          {biLayers.map((layer, index) => (
            <div key={index} className="relative">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <layer.icon className={`h-6 w-6 ${layer.color}`} />
                    {layer.layer}
                  </CardTitle>
                  <p className="text-muted-foreground">{layer.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {layer.components.map((component, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold mb-2">{component.title}:</h4>
                        <ul className="space-y-1">
                          {component.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-accent" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {index < biLayers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Key BI Features */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Key BI Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {biFeatures.map((feature, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
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

      {/* Implementation Process */}
      <section>
        <h2 className="text-3xl font-bold mb-6">BI Implementation Process</h2>
        <div className="space-y-4">
          {implementationSteps.map((step, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {step.step}
                </CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {step.activities.map((activity, idx) => (
                    <Badge key={idx} variant="outline" className="justify-center py-2">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Summary */}
      <section>
        <Card className="gradient-secondary shadow-elegant">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Business Intelligence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Improved Decision Making</h3>
                <p className="text-muted-foreground">Data-driven insights lead to better strategic and operational decisions</p>
              </div>
              <div className="text-center">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-muted-foreground">Streamlined processes and automated reporting reduce manual effort</p>
              </div>
              <div className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Competitive Advantage</h3>
                <p className="text-muted-foreground">Real-time insights enable faster response to market opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <Link to="/decision-support">
          <Button variant="outline" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Previous: Decision Support
          </Button>
        </Link>
        <Link to="/analytics">
          <Button className="group">
            Next: Analytics & Big Data
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessIntelligence;