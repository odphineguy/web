"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calculator, Apple, Carrot, Wheat, Beef, Milk, Info } from "lucide-react";

export default function MyPlateCalculator() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState(""); // lbs
  const [heightFeet, setHeightFeet] = useState(""); // feet
  const [heightInches, setHeightInches] = useState(""); // inches
  const [sex, setSex] = useState("male");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState<{ maintain: number; achieve: number } | null>(null);
  const [foodGroups, setFoodGroups] = useState<any>(null);

  // Activity level descriptions
  const activityDescriptions = {
    sedentary: "Less than 30 minutes per day of exercise",
    moderate: "30-60 minutes per day of moderate exercise",
    active: "More than 60 minutes per day of vigorous exercise"
  };

  // USDA simplified breakdowns
  const foodGroupTable: Record<number, any> = {
    1800: { Fruits: "1.5 cups", Vegetables: "2.5 cups", Grains: "6 oz", Protein: "5 oz", Dairy: "3 cups" },
    2000: { Fruits: "2 cups", Vegetables: "2.5 cups", Grains: "6 oz", Protein: "5.5 oz", Dairy: "3 cups" },
    2400: { Fruits: "2 cups", Vegetables: "3 cups", Grains: "8 oz", Protein: "6.5 oz", Dairy: "3 cups" },
    2800: { Fruits: "2.5 cups", Vegetables: "3.5 cups", Grains: "10 oz", Protein: "7 oz", Dairy: "3 cups" },
  };

  const getClosestPlan = (calories: number) => {
    const levels = Object.keys(foodGroupTable).map(Number);
    return levels.reduce((prev, curr) =>
      Math.abs(curr - calories) < Math.abs(prev - calories) ? curr : prev
    );
  };

  const calculateCalories = () => {
    const w = parseFloat(weight) * 0.453592; // lbs -> kg
    const h = (parseFloat(heightFeet) * 12 + parseFloat(heightInches)) * 2.54; // total inches -> cm
    const a = parseFloat(age);

    let bmr = 0;
    if (sex === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    let multiplier = 1.2;
    if (activity === "moderate") multiplier = 1.55;
    if (activity === "active") multiplier = 1.725;

    const maintenance = Math.round(bmr * multiplier);
    const achieve = maintenance - 400;

    const maintainPlan = getClosestPlan(maintenance);
    const achievePlan = getClosestPlan(achieve);

    setResult({ maintain: maintenance, achieve });
    setFoodGroups({
      maintain: { calories: maintainPlan, ...foodGroupTable[maintainPlan] },
      achieve: { calories: achievePlan, ...foodGroupTable[achievePlan] },
    });
  };

  const getFoodIcon = (foodType: string) => {
    switch (foodType) {
      case "Fruits": return <Apple className="w-4 h-4" />;
      case "Vegetables": return <Carrot className="w-4 h-4" />;
      case "Grains": return <Wheat className="w-4 h-4" />;
      case "Protein": return <Beef className="w-4 h-4" />;
      case "Dairy": return <Milk className="w-4 h-4" />;
      default: return null;
    }
  };

  // Generate age options (2-100)
  const ageOptions = Array.from({ length: 99 }, (_, i) => i + 2);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg border-0">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="w-6 h-6 text-primary" />
            <CardTitle className="text-3xl font-bold text-foreground">
              MyPlate Nutrition Calculator
            </CardTitle>
          </div>
          <p className="text-muted-foreground text-lg">
            Calculate your personalized daily nutrition plan based on your body metrics and activity level
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="age" className="text-sm font-medium text-foreground">
                  Age
                </Label>
                <Select value={age} onValueChange={setAge}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your age" />
                  </SelectTrigger>
                  <SelectContent>
                    {ageOptions.map((ageOption) => (
                      <SelectItem key={ageOption} value={ageOption.toString()}>
                        {ageOption} years old
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="weight" className="text-sm font-medium text-foreground">
                  Weight (lbs)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight in pounds"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground">
                  Height
                </Label>
                <div className="flex gap-2 mt-1">
                  <div className="flex-1">
                    <Input
                      type="number"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      placeholder="Feet"
                      className="text-center"
                    />
                    <Label className="text-xs text-muted-foreground mt-1 block text-center">ft</Label>
                  </div>
                  <div className="flex-1">
                    <Input
                      type="number"
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                      placeholder="Inches"
                      className="text-center"
                    />
                    <Label className="text-xs text-muted-foreground mt-1 block text-center">in</Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground mb-3 block">
                  Sex
                </Label>
                <div className="flex gap-2">
                  {["male", "female"].map((s) => (
                    <Button
                      key={s}
                      variant={sex === s ? "default" : "outline"}
                      onClick={() => setSex(s)}
                      className="flex-1 capitalize"
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground mb-3 block">
                  Activity Level
                </Label>
                <div className="flex flex-col gap-2">
                  {["sedentary", "moderate", "active"].map((lvl) => (
                    <TooltipProvider key={lvl}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant={activity === lvl ? "default" : "outline"}
                            onClick={() => setActivity(lvl)}
                            className="justify-between capitalize"
                          >
                            <span>{lvl}</span>
                            <Info className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{activityDescriptions[lvl as keyof typeof activityDescriptions]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={calculateCalories}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg"
            size="lg"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate MyPlate Plan
          </Button>

          {/* Results */}
          {result && (
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold text-center text-foreground">
                Your Personalized Nutrition Plan
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Achieve Healthy Weight */}
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-center text-blue-600 dark:text-blue-400 text-xl">
                      {result.achieve} Calories
                    </CardTitle>
                    <p className="text-center text-muted-foreground font-medium">
                      Achieve Healthy Weight
                    </p>
                  </CardHeader>
                  <CardContent>
                    {foodGroups && (
                      <div className="space-y-3">
                        {Object.entries(foodGroups.achieve).map(([key, val]) =>
                          key !== "calories" ? (
                            <div key={key} className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg">
                              <div className="flex items-center gap-2">
                                {getFoodIcon(key)}
                                <span className="font-medium text-foreground">{key}</span>
                              </div>
                              <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                {val}
                              </Badge>
                            </div>
                          ) : null
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Maintain Weight */}
                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-center text-green-600 dark:text-green-400 text-xl">
                      {result.maintain} Calories
                    </CardTitle>
                    <p className="text-center text-muted-foreground font-medium">
                      Maintain Current Weight
                    </p>
                  </CardHeader>
                  <CardContent>
                    {foodGroups && (
                      <div className="space-y-3">
                        {Object.entries(foodGroups.maintain).map(([key, val]) =>
                          key !== "calories" ? (
                            <div key={key} className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg">
                              <div className="flex items-center gap-2">
                                {getFoodIcon(key)}
                                <span className="font-medium text-foreground">{key}</span>
                              </div>
                              <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                                {val}
                              </Badge>
                            </div>
                          ) : null
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
