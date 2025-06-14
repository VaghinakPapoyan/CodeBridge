"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, User, Phone, Mail, Send, CheckCircle } from "lucide-react";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Անունը պարտադիր է";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Անունը պետք է լինի առնվազն 2 նիշ";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Հեռախոսահամարը պարտադիր է";
    } else if (!/^[\+]?[0-9\s\-\(\)]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Հեռախոսահամարը սխալ է";
    }

    // Email validation (optional but if provided, must be valid)
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Էլ. փոստի հասցեն սխալ է";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || "Չի նշվել",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", phone: "", email: "" });
          onClose();
        }, 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ name: "Սխալ է տեղի ունեցել։ Խնդրում ենք կրկին փորձել։" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle close
  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: "", phone: "", email: "" });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Modal */}
        <Card
          className="w-full max-w-md bg-white shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors disabled:cursor-not-allowed"
            aria-label="Փակել"
          >
            <X className="h-6 w-6" />
          </button>

          <CardContent className="p-8">
            {isSubmitted ? (
              // Success State
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Գրանցումը Հաջողվել է!
                </h2>
                <p className="text-gray-600">
                  Շնորհակալություն գրանցվելու համար։ Մենք շուտով կկապվենք ձեզ
                  հետ։
                </p>
              </div>
            ) : (
              // Form State
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Գրանցվել Փորձնական Դասին
                  </h2>
                  <p className="text-gray-600">
                    Լրացրեք ձեր տվյալները և մենք կկապվենք ձեզ հետ
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Անուն <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Ձեր անունը"
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3399ff] focus:border-transparent transition-colors ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Հեռախոսահամար <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+374 XX XXX XXX"
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3399ff] focus:border-transparent transition-colors ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Էլ. փոստ{" "}
                      <span className="text-gray-400">(ոչ պարտադիր)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your@email.com"
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3399ff] focus:border-transparent transition-colors ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#3399ff] hover:bg-[#3399ff]/90 text-white py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Ուղարկվում է...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Գրանցվել
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RegistrationForm;
