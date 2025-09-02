import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Database, 
  Brain, 
  Monitor, 
  Lightbulb,
  Building,
  Users,
  BarChart,
  CheckCircle,
  ArrowDown
} from "lucide-react";

const DecisionSupport = () => {
  const decisionTypes = [
    {
      type: "Structured Decisions",
      characteristics: "Routine, repetitive, well-defined, programmable",
      examples: ["Payroll processing", "Inventory control", "Reordering stock below threshold"],
      support: ["Transaction Processing Systems (TPS)", "Management Information Systems (MIS)"],
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      type: "Semi-Structured Decisions",
      characteristics: "Fall between structured and unstructured; partly automated, requires managerial judgment",
      examples: ["Marketing campaign planning", "Budget preparation", "Loan approval"],
      support: ["Decision Support Systems (DSS)"],
      icon: Brain,
      color: "text-blue-600"
    },
    {
      type: "Unstructured Decisions",
      characteristics: "Novel, complex, high degree of uncertainty, no standard rules",
      examples: ["Entering a new market", "Developing new product line", "Mergers and acquisitions"],
      support: ["Executive Support Systems (ESS)", "Knowledge Management Systems (KMS)"],
      icon: Lightbulb,
      color: "text-purple-600"
    }
  ];

  const managementLevels = [
    {
      level: "Strategic Level (Top)",
      decisions: "Unstructured",
      timeFrame: "Long-term (years)",
      examples: ["Market expansion", "Mergers and acquisitions", "New product development"],
      systems: ["ESS", "KMS"],
      description: "Complex, long-term decisions with high uncertainty requiring expert knowledge and trend analysis."
    },
    {
      level: "Tactical Level (Middle)",
      decisions: "Semi-structured",
      timeFrame: "Medium-term (monthly/quarterly)",
      examples: ["Budgeting", "Resource allocation", "Marketing campaigns"],
      systems: ["DSS", "MIS"],
      description: "Requires data analysis and judgment for planning and resource allocation decisions."
    },
    {
      level: "Operational Level (Lower)",
      decisions: "Structured",
      timeFrame: "Short-term (daily)",
      examples: ["Employee scheduling", "Order processing", "Inventory management"],
      systems: ["TPS", "MIS"],
      description: "Routine, repetitive decisions that can be automated or follow standard procedures."
    }
  ];

  const dssComponents = [
    {
      component: "Database Management System (DBMS)",
      description: "Stores and manages large volumes of data from internal and external sources",
      features: ["Data retrieval", "Querying capabilities", "Data updates", "Integration support"],
      icon: Database
    },
    {
      component: "Model Management System (MMS)",
      description: "Provides mathematical and analytical models for decision analysis",
      features: ["Statistical models", "Financial models", "Optimization models", "What-if scenarios"],
      icon: BarChart
    },
    {
      component: "User Interface (UI)",
      description: "Interactive environment for users to communicate with the DSS",
      features: ["Query input", "Simulation running", "Dashboard views", "Report generation"],
      icon: Monitor
    },
    {
      component: "Knowledge Base (Optional)",
      description: "Contains expert knowledge, business rules, and heuristics",
      features: ["Business rules", "AI integration", "Expert systems", "Intelligent suggestions"],
      icon: Brain
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Decision Support Systems</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Understanding how Information Systems support different types of decisions across organizational levels
        </p>
      </div>

      {/* Decision Types */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Types of Decisions and IS Support</h2>
        <div className="space-y-6">
          {decisionTypes.map((decision, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <decision.icon className={`h-6 w-6 ${decision.color}`} />
                  {decision.type}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <p className="text-muted-foreground">{decision.characteristics}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {decision.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">IS Support:</h4>
                    <div className="flex flex-wrap gap-2">
                      {decision.support.map((system, idx) => (
                        <Badge key={idx} variant="secondary">{system}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Management Levels Hierarchy */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Managerial Levels and IS Support</h2>
        <div className="space-y-4">
          {managementLevels.map((level, index) => (
            <div key={index} className="relative">
              <Card className="shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <Building className="h-6 w-6 text-primary" />
                      {level.level}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{level.decisions}</Badge>
                      <Badge variant="secondary">{level.timeFrame}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{level.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {level.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Supporting Systems:</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.systems.map((system, idx) => (
                          <Badge key={idx} variant="default">{system}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {index < managementLevels.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DSS Components */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Main Components of DSS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {dssComponents.map((component, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                    <component.icon className="h-5 w-5 text-white" />
                  </div>
                  {component.component}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{component.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DSS vs MIS Comparison */}
      <section>
        <h2 className="text-3xl font-bold mb-6">DSS vs Traditional MIS</h2>
        <Card className="shadow-elegant">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Aspect</th>
                    <th className="text-left p-4 font-semibold text-blue-600">MIS</th>
                    <th className="text-left p-4 font-semibold text-purple-600">DSS</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="p-4 font-medium">Decision Type</td>
                    <td className="p-4 text-muted-foreground">Structured</td>
                    <td className="p-4 text-muted-foreground">Semi-structured & Unstructured</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Focus</td>
                    <td className="p-4 text-muted-foreground">Routine reporting</td>
                    <td className="p-4 text-muted-foreground">Problem-solving & decision modelling</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Data Source</td>
                    <td className="p-4 text-muted-foreground">Mainly internal</td>
                    <td className="p-4 text-muted-foreground">Both internal and external</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Flexibility</td>
                    <td className="p-4 text-muted-foreground">Low – predefined reports</td>
                    <td className="p-4 text-muted-foreground">High – interactive and analytical</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Users</td>
                    <td className="p-4 text-muted-foreground">Operational & middle-level managers</td>
                    <td className="p-4 text-muted-foreground">Top managers, analysts, decision makers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Example</td>
                    <td className="p-4 text-muted-foreground">Sales performance report</td>
                    <td className="p-4 text-muted-foreground">Market trend analysis for expansion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <Link to="/">
          <Button variant="outline">
            ← Back to Home
          </Button>
        </Link>
        <Link to="/business-intelligence">
          <Button className="group">
            Next: Business Intelligence
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DecisionSupport;