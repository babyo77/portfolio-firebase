"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Link from "next/link";
interface NetWorthRange {
  value: string;
  label: string;
  amount: number;
}

interface CasteSubcategory {
  value: string;
  label: string;
  modifier: number;
}

interface CasteCategory {
  label: string;
  multiplier: number;
  subcategories: CasteSubcategory[];
}

interface CasteCategories {
  [key: string]: CasteCategory;
}

interface BackgroundOrOccupation {
  value: string;
  label: string;
  multiplier: number;
}
const ComprehensiveGiftCalculator = () => {
  const [netWorthRange, setNetWorthRange] = useState("");
  const [caste, setCaste] = useState("");
  const [subCaste, setSubCaste] = useState("");
  const [familyBackground, setFamilyBackground] = useState("");
  const [occupation, setOccupation] = useState("");

  // Net worth ranges
  const netWorthRanges: NetWorthRange[] = [
    { value: "0", label: "No Net Worth", amount: 0 },
    { value: "100000", label: "1 Lakh", amount: 100000 },
    { value: "500000", label: "5 Lakhs", amount: 500000 },
    { value: "1000000", label: "10 Lakhs", amount: 1000000 },
    { value: "2500000", label: "25 Lakhs", amount: 2500000 },
    { value: "5000000", label: "50 Lakhs", amount: 5000000 },
    { value: "10000000", label: "1 Crore", amount: 10000000 },
    { value: "25000000", label: "2.5 Crores", amount: 25000000 },
    { value: "50000000", label: "5 Crores", amount: 50000000 },
    { value: "100000000", label: "10 Crores", amount: 100000000 },
    { value: "250000000", label: "25 Crores", amount: 250000000 },
    { value: "500000000", label: "50 Crores", amount: 500000000 },
    { value: "1000000000", label: "100 Crores", amount: 1000000000 },
    { value: "2500000000", label: "250 Crores", amount: 2500000000 },
  ];

  // Rest of the categories remain same as before
  const casteCategories: CasteCategories = {
    general: {
      label: "General",
      multiplier: 1.2,
      subcategories: [
        { value: "brahmin", label: "Brahmin", modifier: 1.1 },
        { value: "kshatriya", label: "Kshatriya", modifier: 1.1 },
        { value: "vaishya", label: "Vaishya", modifier: 1.0 },
        { value: "other_general", label: "Other General", modifier: 1.0 },
      ],
    },
    obc: {
      label: "OBC",
      multiplier: 1.0,
      subcategories: [
        { value: "obc_a", label: "OBC-A", modifier: 1.0 },
        { value: "obc_b", label: "OBC-B", modifier: 0.9 },
        { value: "other_obc", label: "Other OBC", modifier: 0.9 },
      ],
    },
    st: {
      label: "ST",
      multiplier: 0.9,
      subcategories: [
        { value: "st_1", label: "Scheduled Tribe-1", modifier: 0.9 },
        { value: "st_2", label: "Scheduled Tribe-2", modifier: 0.8 },
        { value: "other_st", label: "Other ST", modifier: 0.8 },
      ],
    },
    nt: {
      label: "NT",
      multiplier: 0.9,
      subcategories: [
        { value: "nt_a", label: "NT-A", modifier: 0.9 },
        { value: "nt_b", label: "NT-B", modifier: 0.9 },
        { value: "nt_c", label: "NT-C", modifier: 0.8 },
        { value: "nt_d", label: "NT-D", modifier: 0.8 },
      ],
    },
  };

  const familyBackgrounds: BackgroundOrOccupation[] = [
    {
      value: "politician_national",
      label: "Politician (National Level)",
      multiplier: 2.5,
    },
    {
      value: "politician_state",
      label: "Politician (State Level)",
      multiplier: 2.0,
    },
    {
      value: "politician_local",
      label: "Politician (Local Level)",
      multiplier: 1.5,
    },
    {
      value: "business_large",
      label: "Business (Large Scale)",
      multiplier: 2.2,
    },
    {
      value: "business_medium",
      label: "Business (Medium Scale)",
      multiplier: 1.8,
    },
    {
      value: "business_small",
      label: "Business (Small Scale)",
      multiplier: 1.4,
    },
    {
      value: "govt_service_high",
      label: "Government Service (High Rank)",
      multiplier: 1.6,
    },
    {
      value: "govt_service_mid",
      label: "Government Service (Mid Rank)",
      multiplier: 1.3,
    },
    { value: "private_service", label: "Private Service", multiplier: 1.2 },
    { value: "agriculture", label: "Agriculture", multiplier: 1.1 },
    { value: "other", label: "Other", multiplier: 1.0 },
  ];

  const occupations: BackgroundOrOccupation[] = [
    { value: "tech_executive", label: "Technology Executive", multiplier: 2.0 },
    {
      value: "doctor_specialist",
      label: "Doctor (Specialist)",
      multiplier: 1.8,
    },
    { value: "doctor_general", label: "Doctor (General)", multiplier: 1.6 },
    { value: "engineer_senior", label: "Engineer (Senior)", multiplier: 1.5 },
    { value: "engineer_mid", label: "Engineer (Mid-Level)", multiplier: 1.3 },
    { value: "lawyer", label: "Lawyer", multiplier: 1.4 },
    { value: "ca_cs", label: "CA/CS", multiplier: 1.4 },
    { value: "businessman", label: "Businessman", multiplier: 1.5 },
    { value: "govt_officer", label: "Government Officer", multiplier: 1.3 },
    { value: "private_service", label: "Private Service", multiplier: 1.2 },
    { value: "self_employed", label: "Self Employed", multiplier: 1.1 },
    { value: "other_occupation", label: "Other", multiplier: 1.0 },
  ];

  const calculateGift = (): any => {
    if (!netWorthRange || !caste || !familyBackground || !occupation) return 0;

    const baseAmount = Number(netWorthRange);
    if (baseAmount <= 0) return 0;

    // If net worth is above 50 crores (500000000), return special message
    if (baseAmount >= 500000000) {
      return "high_net_worth";
    }

    // Get multipliers
    const casteMultiplier = casteCategories[caste]?.multiplier || 1;
    const subCasteModifier =
      casteCategories[caste]?.subcategories.find((sc) => sc.value === subCaste)
        ?.modifier || 1;
    const familyMultiplier =
      familyBackgrounds.find((fb) => fb.value === familyBackground)
        ?.multiplier || 1;
    const occupationMultiplier =
      occupations.find((o) => o.value === occupation)?.multiplier || 1;

    // Calculate base multiplier based on net worth range
    let netWorthMultiplier;
    if (baseAmount <= 1000000) {
      // Up to 10 lakhs
      netWorthMultiplier = 3;
    } else if (baseAmount <= 5000000) {
      // 10-50 lakhs
      netWorthMultiplier = 4;
    } else if (baseAmount <= 10000000) {
      // 50 lakhs - 1 crore
      netWorthMultiplier = 5;
    } else if (baseAmount <= 50000000) {
      // 1-5 crore
      netWorthMultiplier = 6;
    } else {
      // Above 5 crore
      netWorthMultiplier = 7;
    }

    return (
      baseAmount *
      netWorthMultiplier *
      casteMultiplier *
      subCasteModifier *
      familyMultiplier *
      occupationMultiplier
    );
  };

  const formatIndianCurrency = (amount: number | undefined): string => {
    if (amount === undefined) return "N/A";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full border-none mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className=" text-6xl">Marriage Gift Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="netWorth">Boys Net Worth</Label>
              <Select value={netWorthRange} onValueChange={setNetWorthRange}>
                <SelectTrigger id="netWorth">
                  <SelectValue placeholder="Select Net Worth Range" />
                </SelectTrigger>
                <SelectContent>
                  {netWorthRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="caste">Caste Category</Label>
                <Select
                  value={caste}
                  onValueChange={(value) => {
                    setCaste(value);
                    setSubCaste("");
                  }}
                >
                  <SelectTrigger id="caste">
                    <SelectValue placeholder="Select Caste" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(casteCategories).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {value.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {caste && (
                <div className="space-y-2">
                  <Label htmlFor="subCaste">Sub-Category</Label>
                  <Select value={subCaste} onValueChange={setSubCaste}>
                    <SelectTrigger id="subCaste">
                      <SelectValue placeholder="Select Sub-Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {casteCategories[caste].subcategories.map((subCat) => (
                        <SelectItem key={subCat.value} value={subCat.value}>
                          {subCat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="familyBackground">Family Background</Label>
                <Select
                  value={familyBackground}
                  onValueChange={setFamilyBackground}
                >
                  <SelectTrigger id="familyBackground">
                    <SelectValue placeholder="Select Family Background" />
                  </SelectTrigger>
                  <SelectContent>
                    {familyBackgrounds.map((bg) => (
                      <SelectItem key={bg.value} value={bg.value}>
                        {bg.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Select value={occupation} onValueChange={setOccupation}>
                  <SelectTrigger id="occupation">
                    <SelectValue placeholder="Select Occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    {occupations.map((occ) => (
                      <SelectItem key={occ.value} value={occ.value}>
                        {occ.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {netWorthRange && caste && familyBackground && occupation && (
              <div className="mt-6">
                {calculateGift() === "high_net_worth" ? (
                  <Alert>
                    <AlertDescription className="text-center text-5xl font-medium">
                      जो आप की इच्छा 🙏
                      <div className="text-sm mt-2">
                        For such high net worth individuals, the gift value is
                        at the discretion of the giving family
                      </div>
                    </AlertDescription>
                  </Alert>
                ) : (
                  <div className="p-4 border rounded space-y-2">
                    <div className="text-lg font-bold">
                      Suggested Gift Value{" "}
                    </div>
                    <div className="text-5xl font-bold">
                      {formatIndianCurrency(calculateGift())}
                    </div>
                    <div className="text-sm">
                      Based on selected net worth:{" "}
                      {
                        netWorthRanges.find((r) => r.value === netWorthRange)
                          ?.label
                      }
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <Link href={"/"} className="  absolute bottom-5 text-muted-foreground/50">
        Made for fun, we don&apos;t support dowry
      </Link>
    </div>
  );
};

export default ComprehensiveGiftCalculator;
