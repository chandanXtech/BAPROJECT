import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  Building,
  Users,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Target,
  BarChart,
  Brain
} from "lucide-react";

const Framework = () => {
  const frameworkMatrix = [
    {
      level: "Strategic Planning",
      structured: {
        title: "Short-term Financial Planning",
        description: "Routine financial forecasts and budget allocations",
        examples: ["Annual budget planning", "Quarterly forecasts", "Capital allocation"],
        systems: ["Financial Planning Systems", "ERP Systems"]
      },
      semiStructured: {
        title: "M&A Analysis",
        description: "Merger and acquisition evaluation with analytical models",
        examples: ["Market valuation", "Risk assessment", "Integration planning"],
        systems: ["Financial Modeling Tools", "DSS"]
      },
      unstructured: {
        title: "Market Entry & Policy",
        description: "Complex strategic decisions with high uncertainty",
        examples: ["New market expansion", "Strategic partnerships", "Policy formulation"],
        systems: ["ESS", "Knowledge Management"]
      }
    },
    {
      level: "Managerial Control",
      structured: {
        title: "Budgeting & Credit Approval",
        description: "Standard control processes with defined criteria",
        examples: ["Department budgeting", "Credit scoring", "Performance monitoring"],
        systems: ["MIS", "Automated Approval Systems"]
      },
      semiStructured: {
        title: "Production Scheduling & Sales Planning",
        description: "Planning decisions requiring analysis and judgment",
        examples: ["Production optimization", "Sales forecasting", "Resource allocation"],
        systems: ["DSS", "Planning Software"]
      },
      unstructured: {
        title: "New Product Development",
        description: "Innovation and development decisions",
        examples: ["Product innovation", "Market research", "R&D planning"],
        systems: ["Collaboration Tools", "Innovation Platforms"]
      }
    },
    {
      level: "Operational Control",
      structured: {
        title: "Payroll & Order Entry",
        description: "Routine operational processes",
        examples: ["Payroll processing", "Order management", "Transaction processing"],
        systems: ["TPS", "Automated Systems"]
      },
      semiStructured: {
        title: "Inventory Control",
        description: "Operational decisions with analytical support",
        examples: ["Stock optimization", "Reorder planning", "Demand forecasting"],
        systems: ["Inventory Management", "DSS"]
      },
      unstructured: {
        title: "Customer Complaints & Complex Issues",
        description: "Unique operational problems requiring judgment",
        examples: ["Complex customer issues", "Exception handling", "Crisis management"],
        systems: ["CRM", "Knowledge Base"]
      }
    }
  ];

  const frameworkSignificance = [
    {
      point: "Different Decisions Need Different IS Support",
      description: "Recognized that decision complexity determines the type of information system support required",
      impact: "Foundation for modern decision support architecture",
      icon: Target
    },
    {
      point: "Foundation for DSS Development",
      description: "Provided the theoretical basis for developing Decision Support Systems",
      impact: "Guided the evolution from simple reporting to analytical systems",
      icon: Brain
    },
    {
      point: "Guided System Designers",
      description: "Helped designers understand how to support managerial and strategic decision-making",
      impact: "Improved alignment between business needs and IT solutions",
      icon: Building
    },
    {
      point: "Bridged MIS and Decision Theory",
      description: "Connected management information systems with decision-making theories",
      impact: "Created a unified approach to information systems design",
      icon: BarChart
    },
    {
      point: "Inspired Evolution to BI",
      description: "Led to the development of Business Intelligence and analytics platforms",
      impact: "Foundation for modern data-driven decision making",
      icon: TrendingUp
    },
    {
      point: "Foundation for Analytics & Big Data",
      description: "Established principles that guide today's advanced analytics implementations",
      impact: "Continues to influence modern data science and AI applications",
      icon: Lightbulb
    }
  ];

  const implementationGuidelines = [
    {
      step: "1. Assess Decision Types",
      description: "Identify and categorize the types of decisions made at each management level",
      activities: ["Decision inventory", "Complexity analysis", "Frequency assessment", "Impact evaluation"]
    },
    {
      step: "2. Map Current Systems",
      description: "Evaluate existing information systems and their decision support capabilities",
      activities: ["System audit", "Capability assessment", "Gap analysis", "User satisfaction"]
    },
    {
      step: "3. Design Support Architecture",
      description: "Plan information systems architecture based on the framework",
      activities: ["Architecture design", "Integration planning", "Technology selection", "Data flow design"]
    },
    {
      step: "4. Implement & Monitor",
      description: "Deploy systems and continuously improve based on user feedback",
      activities: ["Phased implementation", "User training", "Performance monitoring", "Continuous improvement"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Gorry and Scott Morton's Framework</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The foundational framework that bridges management activities and decision types for effective IS support
        </p>
      </div>

      {/* Framework Introduction */}
      <section>
        <Card className="gradient-primary text-white shadow-elegant">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Framework Overview</h2>
            <p className="text-lg opacity-90 mb-6">
              This framework combines two key dimensions to classify decisions and identify appropriate computerized support:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Management Activity (Robert Anthony)</h3>
                <ul className="space-y-1 opacity-90">
                  <li>• Operational Control</li>
                  <li>• Managerial Control</li>
                  <li>• Strategic Planning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Decision Problem (Herbert Simon)</h3>
                <ul className="space-y-1 opacity-90">
                  <li>• Structured</li>
                  <li>• Semi-Structured</li>
                  <li>• Unstructured</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Framework Matrix */}
      <section>
        <h2 className="text-3xl font-bold mb-6">The 3×3 Framework Matrix</h2>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="font-semibold text-center">Management Level</div>
              <div className="font-semibold text-center text-blue-600">Structured</div>
              <div className="font-semibold text-center text-green-600">Semi-Structured</div>
              <div className="font-semibold text-center text-purple-600">Unstructured</div>
            </div>
            
            {/* Matrix Rows */}
            {frameworkMatrix.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Card className="w-full">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center">{row.level}</h3>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-600">{row.structured.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground mb-2">{row.structured.description}</p>
                    <div className="space-y-1">
                      {row.structured.examples.slice(0, 2).map((example, idx) => (
                        <div key={idx} className="text-xs">{example}</div>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {row.structured.systems.map((system, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{system}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-600">{row.semiStructured.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground mb-2">{row.semiStructured.description}</p>
                    <div className="space-y-1">
                      {row.semiStructured.examples.slice(0, 2).map((example, idx) => (
                        <div key={idx} className="text-xs">{example}</div>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {row.semiStructured.systems.map((system, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{system}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-purple-600">{row.unstructured.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground mb-2">{row.unstructured.description}</p>
                    <div className="space-y-1">
                      {row.unstructured.examples.slice(0, 2).map((example, idx) => (
                        <div key={idx} className="text-xs">{example}</div>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {row.unstructured.systems.map((system, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{system}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Significance */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Significance of the Framework</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {frameworkSignificance.map((significance, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                    <significance.icon className="h-5 w-5 text-white" />
                  </div>
                  {significance.point}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Description:</h4>
                  <p className="text-sm text-muted-foreground">{significance.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Impact:</h4>
                  <p className="text-sm text-muted-foreground italic">{significance.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Implementation Guidelines */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Implementation Guidelines</h2>
        <div className="space-y-4">
          {implementationGuidelines.map((step, index) => (
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

      {/* Modern Relevance */}
      <section>
        <Card className="gradient-secondary shadow-elegant">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Modern Relevance</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Brain className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-muted-foreground">Framework principles guide modern AI implementation for decision support</p>
              </div>
              <div>
                <BarChart className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Business Intelligence</h3>
                <p className="text-muted-foreground">BI platforms still follow the structured approach of matching tools to decision types</p>
              </div>
              <div>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Analytics Evolution</h3>
                <p className="text-muted-foreground">Big Data and analytics build on the framework's foundation of decision-centric design</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <Link to="/analytics">
          <Button variant="outline" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Previous: Analytics & Big Data
          </Button>
        </Link>
        <Link to="/">
          <Button className="group">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Framework;