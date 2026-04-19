/*
 *  TITLE:          vvo_tree.js
 *  GENERATED:      18-FEB-2026
 *  GENERATOR:      VVOTreeGenerator.java
 *  ENTRIES:        3333
 */

const TREE_DATA = {
  "Vitis_vinifera": {
    "bfo": "BFO_0000040",
    "label": "material entity",
    "children": ["Grapevine_Morphological_Structure", "Grapevine_Phenological_Process", "Grapevine_Quality", "Grapevine_Disposition", "Grapevine_Role", "Grapevine_Information_Entity"]
  },

  /* ── Grapevine Morphological Structure (BFO_0000040) ── */

  "Grapevine_Morphological_Structure": {
    "bfo": "BFO_0000040",
    "label": "material entity",
    "children": ["Bud", "Cane", "Arm", "Shoot", "Tendril", "Leaf", "Inflorescence", "Flower", "Berry", "Scion_Trunk", "Rootstock_Trunk", "Root_System", "Shallow_Root"]
  },
  "Bud": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Dormant_Bud", "Active_Bud", "Latent_Bud", "Primary_Bud", "Secondary_Bud", "Tertiary_Bud"]
  },
  "Dormant_Bud": {
    "parent": "Bud",
    "children": ["Winter_Dormant_Bud", "Summer_Dormant_Bud", "Compound_Dormant_Bud"]
  },
  "Winter_Dormant_Bud": {
    "parent": "Dormant_Bud",
    "children": ["Deep_Winter_Dormant_Bud", "Late_Winter_Dormant_Bud"]
  },
  "Deep_Winter_Dormant_Bud": {
    "parent": "Winter_Dormant_Bud",
    "children": []
  },
  "Late_Winter_Dormant_Bud": {
    "parent": "Winter_Dormant_Bud",
    "children": []
  },
  "Summer_Dormant_Bud": {
    "parent": "Dormant_Bud",
    "children": ["Heat_Induced_Summer_Dormant_Bud", "Water_Stress_Summer_Dormant_Bud"]
  },
  "Heat_Induced_Summer_Dormant_Bud": {
    "parent": "Summer_Dormant_Bud",
    "children": []
  },
  "Water_Stress_Summer_Dormant_Bud": {
    "parent": "Summer_Dormant_Bud",
    "children": []
  },
  "Compound_Dormant_Bud": {
    "parent": "Dormant_Bud",
    "children": ["Multi_Primordium_Compound_Bud", "Three_Bud_Compound_Structure"]
  },
  "Multi_Primordium_Compound_Bud": {
    "parent": "Compound_Dormant_Bud",
    "children": []
  },
  "Three_Bud_Compound_Structure": {
    "parent": "Compound_Dormant_Bud",
    "children": []
  },
  "Active_Bud": {
    "parent": "Bud",
    "children": ["Vegetative_Active_Bud", "Reproductive_Active_Bud", "Mixed_Active_Bud"]
  },
  "Vegetative_Active_Bud": {
    "parent": "Active_Bud",
    "children": ["Early_Stage_Vegetative_Active_Bud", "Late_Stage_Vegetative_Active_Bud"]
  },
  "Early_Stage_Vegetative_Active_Bud": {
    "parent": "Vegetative_Active_Bud",
    "children": []
  },
  "Late_Stage_Vegetative_Active_Bud": {
    "parent": "Vegetative_Active_Bud",
    "children": []
  },
  "Reproductive_Active_Bud": {
    "parent": "Active_Bud",
    "children": ["Early_Stage_Reproductive_Active_Bud", "Late_Stage_Reproductive_Active_Bud"]
  },
  "Early_Stage_Reproductive_Active_Bud": {
    "parent": "Reproductive_Active_Bud",
    "children": []
  },
  "Late_Stage_Reproductive_Active_Bud": {
    "parent": "Reproductive_Active_Bud",
    "children": []
  },
  "Mixed_Active_Bud": {
    "parent": "Active_Bud",
    "children": ["Vegetative_Dominant_Mixed_Bud", "Reproductive_Dominant_Mixed_Bud"]
  },
  "Vegetative_Dominant_Mixed_Bud": {
    "parent": "Mixed_Active_Bud",
    "children": []
  },
  "Reproductive_Dominant_Mixed_Bud": {
    "parent": "Mixed_Active_Bud",
    "children": []
  },
  "Latent_Bud": {
    "parent": "Bud",
    "children": ["Basal_Latent_Bud", "Trunk_Latent_Bud", "Old_Wood_Latent_Bud"]
  },
  "Basal_Latent_Bud": {
    "parent": "Latent_Bud",
    "children": ["Node_One_Latent_Bud", "Node_Two_Latent_Bud"]
  },
  "Node_One_Latent_Bud": {
    "parent": "Basal_Latent_Bud",
    "children": []
  },
  "Node_Two_Latent_Bud": {
    "parent": "Basal_Latent_Bud",
    "children": []
  },
  "Trunk_Latent_Bud": {
    "parent": "Latent_Bud",
    "children": ["Upper_Trunk_Latent_Bud", "Lower_Trunk_Latent_Bud"]
  },
  "Upper_Trunk_Latent_Bud": {
    "parent": "Trunk_Latent_Bud",
    "children": []
  },
  "Lower_Trunk_Latent_Bud": {
    "parent": "Trunk_Latent_Bud",
    "children": []
  },
  "Old_Wood_Latent_Bud": {
    "parent": "Latent_Bud",
    "children": ["Multi_Year_Old_Wood_Latent_Bud", "Ancient_Wood_Latent_Bud"]
  },
  "Multi_Year_Old_Wood_Latent_Bud": {
    "parent": "Old_Wood_Latent_Bud",
    "children": []
  },
  "Ancient_Wood_Latent_Bud": {
    "parent": "Old_Wood_Latent_Bud",
    "children": []
  },
  "Primary_Bud": {
    "parent": "Bud",
    "children": ["Primary_Vegetative_Bud", "Primary_Reproductive_Bud"]
  },
  "Primary_Vegetative_Bud": {
    "parent": "Primary_Bud",
    "children": ["Apical_Primary_Vegetative_Bud", "Axillary_Primary_Vegetative_Bud"]
  },
  "Apical_Primary_Vegetative_Bud": {
    "parent": "Primary_Vegetative_Bud",
    "children": []
  },
  "Axillary_Primary_Vegetative_Bud": {
    "parent": "Primary_Vegetative_Bud",
    "children": []
  },
  "Primary_Reproductive_Bud": {
    "parent": "Primary_Bud",
    "children": ["Single_Cluster_Primary_Bud", "Multi_Cluster_Primary_Bud"]
  },
  "Single_Cluster_Primary_Bud": {
    "parent": "Primary_Reproductive_Bud",
    "children": []
  },
  "Multi_Cluster_Primary_Bud": {
    "parent": "Primary_Reproductive_Bud",
    "children": []
  },
  "Secondary_Bud": {
    "parent": "Bud",
    "children": ["Secondary_Vegetative_Bud", "Secondary_Reproductive_Bud"]
  },
  "Secondary_Vegetative_Bud": {
    "parent": "Secondary_Bud",
    "children": ["Backup_Secondary_Vegetative_Bud", "Replacement_Secondary_Vegetative_Bud"]
  },
  "Backup_Secondary_Vegetative_Bud": {
    "parent": "Secondary_Vegetative_Bud",
    "children": []
  },
  "Replacement_Secondary_Vegetative_Bud": {
    "parent": "Secondary_Vegetative_Bud",
    "children": []
  },
  "Secondary_Reproductive_Bud": {
    "parent": "Secondary_Bud",
    "children": ["Reduced_Cluster_Secondary_Bud", "Full_Cluster_Secondary_Bud"]
  },
  "Reduced_Cluster_Secondary_Bud": {
    "parent": "Secondary_Reproductive_Bud",
    "children": []
  },
  "Full_Cluster_Secondary_Bud": {
    "parent": "Secondary_Reproductive_Bud",
    "children": []
  },
  "Tertiary_Bud": {
    "parent": "Bud",
    "children": ["Tertiary_Vegetative_Bud", "Tertiary_Reproductive_Bud"]
  },
  "Tertiary_Vegetative_Bud": {
    "parent": "Tertiary_Bud",
    "children": ["Minimal_Tertiary_Vegetative_Bud", "Emergency_Tertiary_Vegetative_Bud"]
  },
  "Minimal_Tertiary_Vegetative_Bud": {
    "parent": "Tertiary_Vegetative_Bud",
    "children": []
  },
  "Emergency_Tertiary_Vegetative_Bud": {
    "parent": "Tertiary_Vegetative_Bud",
    "children": []
  },
  "Tertiary_Reproductive_Bud": {
    "parent": "Tertiary_Bud",
    "children": ["Vestigial_Tertiary_Reproductive_Bud", "Functional_Tertiary_Reproductive_Bud"]
  },
  "Vestigial_Tertiary_Reproductive_Bud": {
    "parent": "Tertiary_Reproductive_Bud",
    "children": []
  },
  "Functional_Tertiary_Reproductive_Bud": {
    "parent": "Tertiary_Reproductive_Bud",
    "children": []
  },
  "Cane": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["One_Year_Cane", "Fruiting_Cane", "Renewal_Cane"]
  },
  "One_Year_Cane": {
    "parent": "Cane",
    "children": ["Lignified_One_Year_Cane", "Semi_Lignified_One_Year_Cane", "Green_One_Year_Cane"]
  },
  "Lignified_One_Year_Cane": {
    "parent": "One_Year_Cane",
    "children": ["Fully_Lignified_One_Year_Cane", "Partially_Lignified_One_Year_Cane", "Hard_Lignified_One_Year_Cane"]
  },
  "Fully_Lignified_One_Year_Cane": {
    "parent": "Lignified_One_Year_Cane",
    "children": []
  },
  "Partially_Lignified_One_Year_Cane": {
    "parent": "Lignified_One_Year_Cane",
    "children": []
  },
  "Hard_Lignified_One_Year_Cane": {
    "parent": "Lignified_One_Year_Cane",
    "children": []
  },
  "Semi_Lignified_One_Year_Cane": {
    "parent": "One_Year_Cane",
    "children": ["Early_Semi_Lignified_Cane", "Late_Semi_Lignified_Cane", "Transitional_Semi_Lignified_Cane"]
  },
  "Early_Semi_Lignified_Cane": {
    "parent": "Semi_Lignified_One_Year_Cane",
    "children": []
  },
  "Late_Semi_Lignified_Cane": {
    "parent": "Semi_Lignified_One_Year_Cane",
    "children": []
  },
  "Transitional_Semi_Lignified_Cane": {
    "parent": "Semi_Lignified_One_Year_Cane",
    "children": []
  },
  "Green_One_Year_Cane": {
    "parent": "One_Year_Cane",
    "children": ["Soft_Green_One_Year_Cane", "Herbaceous_Green_One_Year_Cane", "Flexible_Green_One_Year_Cane"]
  },
  "Soft_Green_One_Year_Cane": {
    "parent": "Green_One_Year_Cane",
    "children": []
  },
  "Herbaceous_Green_One_Year_Cane": {
    "parent": "Green_One_Year_Cane",
    "children": []
  },
  "Flexible_Green_One_Year_Cane": {
    "parent": "Green_One_Year_Cane",
    "children": []
  },
  "Fruiting_Cane": {
    "parent": "Cane",
    "children": ["Long_Fruiting_Cane", "Medium_Fruiting_Cane", "Short_Fruiting_Cane"]
  },
  "Long_Fruiting_Cane": {
    "parent": "Fruiting_Cane",
    "children": ["Extended_Long_Fruiting_Cane", "Standard_Long_Fruiting_Cane"]
  },
  "Extended_Long_Fruiting_Cane": {
    "parent": "Long_Fruiting_Cane",
    "children": []
  },
  "Standard_Long_Fruiting_Cane": {
    "parent": "Long_Fruiting_Cane",
    "children": []
  },
  "Medium_Fruiting_Cane": {
    "parent": "Fruiting_Cane",
    "children": ["Moderate_Medium_Fruiting_Cane", "Balanced_Medium_Fruiting_Cane"]
  },
  "Moderate_Medium_Fruiting_Cane": {
    "parent": "Medium_Fruiting_Cane",
    "children": []
  },
  "Balanced_Medium_Fruiting_Cane": {
    "parent": "Medium_Fruiting_Cane",
    "children": []
  },
  "Short_Fruiting_Cane": {
    "parent": "Fruiting_Cane",
    "children": ["Spur_Short_Fruiting_Cane", "Minimal_Short_Fruiting_Cane"]
  },
  "Spur_Short_Fruiting_Cane": {
    "parent": "Short_Fruiting_Cane",
    "children": []
  },
  "Minimal_Short_Fruiting_Cane": {
    "parent": "Short_Fruiting_Cane",
    "children": []
  },
  "Renewal_Cane": {
    "parent": "Cane",
    "children": ["Replacement_Renewal_Cane", "Reserve_Renewal_Cane"]
  },
  "Replacement_Renewal_Cane": {
    "parent": "Renewal_Cane",
    "children": ["Primary_Replacement_Renewal_Cane", "Secondary_Replacement_Renewal_Cane"]
  },
  "Primary_Replacement_Renewal_Cane": {
    "parent": "Replacement_Renewal_Cane",
    "children": []
  },
  "Secondary_Replacement_Renewal_Cane": {
    "parent": "Replacement_Renewal_Cane",
    "children": []
  },
  "Reserve_Renewal_Cane": {
    "parent": "Renewal_Cane",
    "children": ["Backup_Reserve_Renewal_Cane", "Emergency_Reserve_Renewal_Cane"]
  },
  "Backup_Reserve_Renewal_Cane": {
    "parent": "Reserve_Renewal_Cane",
    "children": []
  },
  "Emergency_Reserve_Renewal_Cane": {
    "parent": "Reserve_Renewal_Cane",
    "children": []
  },
  "Arm": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Permanent_Arm", "Cordon", "Head_Trained_Arm"]
  },
  "Permanent_Arm": {
    "parent": "Arm",
    "children": ["Bilateral_Permanent_Arm", "Unilateral_Permanent_Arm", "Multi_Branched_Permanent_Arm"]
  },
  "Bilateral_Permanent_Arm": {
    "parent": "Permanent_Arm",
    "children": ["Symmetrical_Bilateral_Permanent_Arm", "Asymmetrical_Bilateral_Permanent_Arm"]
  },
  "Symmetrical_Bilateral_Permanent_Arm": {
    "parent": "Bilateral_Permanent_Arm",
    "children": []
  },
  "Asymmetrical_Bilateral_Permanent_Arm": {
    "parent": "Bilateral_Permanent_Arm",
    "children": []
  },
  "Unilateral_Permanent_Arm": {
    "parent": "Permanent_Arm",
    "children": ["Single_Side_Unilateral_Permanent_Arm", "Extended_Unilateral_Permanent_Arm"]
  },
  "Single_Side_Unilateral_Permanent_Arm": {
    "parent": "Unilateral_Permanent_Arm",
    "children": []
  },
  "Extended_Unilateral_Permanent_Arm": {
    "parent": "Unilateral_Permanent_Arm",
    "children": []
  },
  "Multi_Branched_Permanent_Arm": {
    "parent": "Permanent_Arm",
    "children": ["Three_Branch_Permanent_Arm", "Four_Branch_Permanent_Arm", "Complex_Multi_Branched_Permanent_Arm"]
  },
  "Three_Branch_Permanent_Arm": {
    "parent": "Multi_Branched_Permanent_Arm",
    "children": []
  },
  "Four_Branch_Permanent_Arm": {
    "parent": "Multi_Branched_Permanent_Arm",
    "children": []
  },
  "Complex_Multi_Branched_Permanent_Arm": {
    "parent": "Multi_Branched_Permanent_Arm",
    "children": []
  },
  "Cordon": {
    "parent": "Arm",
    "children": ["Horizontal_Cordon", "Vertical_Cordon", "Bilateral_Cordon", "Unilateral_Cordon"]
  },
  "Horizontal_Cordon": {
    "parent": "Cordon",
    "children": ["Low_Horizontal_Cordon", "High_Horizontal_Cordon", "Wire_Trained_Horizontal_Cordon"]
  },
  "Low_Horizontal_Cordon": {
    "parent": "Horizontal_Cordon",
    "children": []
  },
  "High_Horizontal_Cordon": {
    "parent": "Horizontal_Cordon",
    "children": []
  },
  "Wire_Trained_Horizontal_Cordon": {
    "parent": "Horizontal_Cordon",
    "children": []
  },
  "Vertical_Cordon": {
    "parent": "Cordon",
    "children": ["Single_Vertical_Cordon", "Double_Vertical_Cordon"]
  },
  "Single_Vertical_Cordon": {
    "parent": "Vertical_Cordon",
    "children": []
  },
  "Double_Vertical_Cordon": {
    "parent": "Vertical_Cordon",
    "children": []
  },
  "Bilateral_Cordon": {
    "parent": "Cordon",
    "children": ["Balanced_Bilateral_Cordon", "Unbalanced_Bilateral_Cordon"]
  },
  "Balanced_Bilateral_Cordon": {
    "parent": "Bilateral_Cordon",
    "children": []
  },
  "Unbalanced_Bilateral_Cordon": {
    "parent": "Bilateral_Cordon",
    "children": []
  },
  "Unilateral_Cordon": {
    "parent": "Cordon",
    "children": ["Left_Unilateral_Cordon", "Right_Unilateral_Cordon"]
  },
  "Left_Unilateral_Cordon": {
    "parent": "Unilateral_Cordon",
    "children": []
  },
  "Right_Unilateral_Cordon": {
    "parent": "Unilateral_Cordon",
    "children": []
  },
  "Head_Trained_Arm": {
    "parent": "Arm",
    "children": ["Gobelet_Head_Arm", "Bush_Head_Arm", "Multi_Arm_Head"]
  },
  "Gobelet_Head_Arm": {
    "parent": "Head_Trained_Arm",
    "children": ["Traditional_Gobelet_Head_Arm", "Modified_Gobelet_Head_Arm"]
  },
  "Traditional_Gobelet_Head_Arm": {
    "parent": "Gobelet_Head_Arm",
    "children": []
  },
  "Modified_Gobelet_Head_Arm": {
    "parent": "Gobelet_Head_Arm",
    "children": []
  },
  "Bush_Head_Arm": {
    "parent": "Head_Trained_Arm",
    "children": ["Low_Bush_Head_Arm", "High_Bush_Head_Arm"]
  },
  "Low_Bush_Head_Arm": {
    "parent": "Bush_Head_Arm",
    "children": []
  },
  "High_Bush_Head_Arm": {
    "parent": "Bush_Head_Arm",
    "children": []
  },
  "Multi_Arm_Head": {
    "parent": "Head_Trained_Arm",
    "children": ["Three_Arm_Head", "Four_Arm_Head", "Five_Plus_Arm_Head"]
  },
  "Three_Arm_Head": {
    "parent": "Multi_Arm_Head",
    "children": []
  },
  "Four_Arm_Head": {
    "parent": "Multi_Arm_Head",
    "children": []
  },
  "Five_Plus_Arm_Head": {
    "parent": "Multi_Arm_Head",
    "children": []
  },
  "Shoot": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Vegetative_Shoot", "Reproductive_Shoot", "Basal_Shoot", "Lateral_Shoot", "Apical_Shoot", "Water_Shoot"]
  },
  "Vegetative_Shoot": {
    "parent": "Shoot",
    "children": ["Primary_Vegetative_Shoot", "Secondary_Vegetative_Shoot", "Sterile_Vegetative_Shoot"]
  },
  "Primary_Vegetative_Shoot": {
    "parent": "Vegetative_Shoot",
    "children": ["Vigorous_Primary_Vegetative_Shoot", "Moderate_Primary_Vegetative_Shoot", "Weak_Primary_Vegetative_Shoot"]
  },
  "Vigorous_Primary_Vegetative_Shoot": {
    "parent": "Primary_Vegetative_Shoot",
    "children": []
  },
  "Moderate_Primary_Vegetative_Shoot": {
    "parent": "Primary_Vegetative_Shoot",
    "children": []
  },
  "Weak_Primary_Vegetative_Shoot": {
    "parent": "Primary_Vegetative_Shoot",
    "children": []
  },
  "Secondary_Vegetative_Shoot": {
    "parent": "Vegetative_Shoot",
    "children": ["Strong_Secondary_Vegetative_Shoot", "Weak_Secondary_Vegetative_Shoot"]
  },
  "Strong_Secondary_Vegetative_Shoot": {
    "parent": "Secondary_Vegetative_Shoot",
    "children": []
  },
  "Weak_Secondary_Vegetative_Shoot": {
    "parent": "Secondary_Vegetative_Shoot",
    "children": []
  },
  "Sterile_Vegetative_Shoot": {
    "parent": "Vegetative_Shoot",
    "children": ["Non_Fruiting_Sterile_Shoot", "Barren_Sterile_Shoot"]
  },
  "Non_Fruiting_Sterile_Shoot": {
    "parent": "Sterile_Vegetative_Shoot",
    "children": []
  },
  "Barren_Sterile_Shoot": {
    "parent": "Sterile_Vegetative_Shoot",
    "children": []
  },
  "Reproductive_Shoot": {
    "parent": "Shoot",
    "children": ["Primary_Reproductive_Shoot", "Secondary_Reproductive_Shoot", "Fertile_Reproductive_Shoot"]
  },
  "Primary_Reproductive_Shoot": {
    "parent": "Reproductive_Shoot",
    "children": ["High_Yield_Primary_Reproductive_Shoot", "Low_Yield_Primary_Reproductive_Shoot", "Single_Cluster_Primary_Reproductive_Shoot"]
  },
  "High_Yield_Primary_Reproductive_Shoot": {
    "parent": "Primary_Reproductive_Shoot",
    "children": []
  },
  "Low_Yield_Primary_Reproductive_Shoot": {
    "parent": "Primary_Reproductive_Shoot",
    "children": []
  },
  "Single_Cluster_Primary_Reproductive_Shoot": {
    "parent": "Primary_Reproductive_Shoot",
    "children": []
  },
  "Secondary_Reproductive_Shoot": {
    "parent": "Reproductive_Shoot",
    "children": ["Backup_Secondary_Reproductive_Shoot", "Reduced_Secondary_Reproductive_Shoot"]
  },
  "Backup_Secondary_Reproductive_Shoot": {
    "parent": "Secondary_Reproductive_Shoot",
    "children": []
  },
  "Reduced_Secondary_Reproductive_Shoot": {
    "parent": "Secondary_Reproductive_Shoot",
    "children": []
  },
  "Fertile_Reproductive_Shoot": {
    "parent": "Reproductive_Shoot",
    "children": ["Multi_Cluster_Fertile_Shoot", "Single_Cluster_Fertile_Shoot"]
  },
  "Multi_Cluster_Fertile_Shoot": {
    "parent": "Fertile_Reproductive_Shoot",
    "children": []
  },
  "Single_Cluster_Fertile_Shoot": {
    "parent": "Fertile_Reproductive_Shoot",
    "children": []
  },
  "Basal_Shoot": {
    "parent": "Shoot",
    "children": ["Trunk_Basal_Shoot", "Ground_Level_Basal_Shoot"]
  },
  "Trunk_Basal_Shoot": {
    "parent": "Basal_Shoot",
    "children": ["Lower_Trunk_Basal_Shoot", "Upper_Trunk_Basal_Shoot"]
  },
  "Lower_Trunk_Basal_Shoot": {
    "parent": "Trunk_Basal_Shoot",
    "children": []
  },
  "Upper_Trunk_Basal_Shoot": {
    "parent": "Trunk_Basal_Shoot",
    "children": []
  },
  "Ground_Level_Basal_Shoot": {
    "parent": "Basal_Shoot",
    "children": ["Soil_Surface_Basal_Shoot", "Underground_Origin_Basal_Shoot"]
  },
  "Soil_Surface_Basal_Shoot": {
    "parent": "Ground_Level_Basal_Shoot",
    "children": []
  },
  "Underground_Origin_Basal_Shoot": {
    "parent": "Ground_Level_Basal_Shoot",
    "children": []
  },
  "Lateral_Shoot": {
    "parent": "Shoot",
    "children": ["Prompt_Lateral_Shoot", "Sylleptic_Lateral_Shoot", "Proleptic_Lateral_Shoot"]
  },
  "Prompt_Lateral_Shoot": {
    "parent": "Lateral_Shoot",
    "children": ["Early_Season_Prompt_Lateral_Shoot", "Mid_Season_Prompt_Lateral_Shoot"]
  },
  "Early_Season_Prompt_Lateral_Shoot": {
    "parent": "Prompt_Lateral_Shoot",
    "children": []
  },
  "Mid_Season_Prompt_Lateral_Shoot": {
    "parent": "Prompt_Lateral_Shoot",
    "children": []
  },
  "Sylleptic_Lateral_Shoot": {
    "parent": "Lateral_Shoot",
    "children": ["Same_Season_Sylleptic_Shoot", "Immediate_Sylleptic_Shoot"]
  },
  "Same_Season_Sylleptic_Shoot": {
    "parent": "Sylleptic_Lateral_Shoot",
    "children": []
  },
  "Immediate_Sylleptic_Shoot": {
    "parent": "Sylleptic_Lateral_Shoot",
    "children": []
  },
  "Proleptic_Lateral_Shoot": {
    "parent": "Lateral_Shoot",
    "children": ["Delayed_Proleptic_Shoot", "Following_Season_Proleptic_Shoot"]
  },
  "Delayed_Proleptic_Shoot": {
    "parent": "Proleptic_Lateral_Shoot",
    "children": []
  },
  "Following_Season_Proleptic_Shoot": {
    "parent": "Proleptic_Lateral_Shoot",
    "children": []
  },
  "Apical_Shoot": {
    "parent": "Shoot",
    "children": ["Main_Apical_Shoot", "Dominant_Apical_Shoot"]
  },
  "Main_Apical_Shoot": {
    "parent": "Apical_Shoot",
    "children": ["Terminal_Main_Apical_Shoot", "Leader_Main_Apical_Shoot"]
  },
  "Terminal_Main_Apical_Shoot": {
    "parent": "Main_Apical_Shoot",
    "children": []
  },
  "Leader_Main_Apical_Shoot": {
    "parent": "Main_Apical_Shoot",
    "children": []
  },
  "Dominant_Apical_Shoot": {
    "parent": "Apical_Shoot",
    "children": ["Vigorous_Dominant_Apical_Shoot", "Suppressive_Dominant_Apical_Shoot"]
  },
  "Vigorous_Dominant_Apical_Shoot": {
    "parent": "Dominant_Apical_Shoot",
    "children": []
  },
  "Suppressive_Dominant_Apical_Shoot": {
    "parent": "Dominant_Apical_Shoot",
    "children": []
  },
  "Water_Shoot": {
    "parent": "Shoot",
    "children": ["Trunk_Water_Shoot", "Arm_Water_Shoot", "Vigorous_Water_Shoot"]
  },
  "Trunk_Water_Shoot": {
    "parent": "Water_Shoot",
    "children": ["Lower_Trunk_Water_Shoot", "Upper_Trunk_Water_Shoot"]
  },
  "Lower_Trunk_Water_Shoot": {
    "parent": "Trunk_Water_Shoot",
    "children": []
  },
  "Upper_Trunk_Water_Shoot": {
    "parent": "Trunk_Water_Shoot",
    "children": []
  },
  "Arm_Water_Shoot": {
    "parent": "Water_Shoot",
    "children": ["Cordon_Arm_Water_Shoot", "Branch_Arm_Water_Shoot"]
  },
  "Cordon_Arm_Water_Shoot": {
    "parent": "Arm_Water_Shoot",
    "children": []
  },
  "Branch_Arm_Water_Shoot": {
    "parent": "Arm_Water_Shoot",
    "children": []
  },
  "Vigorous_Water_Shoot": {
    "parent": "Water_Shoot",
    "children": ["Extremely_Vigorous_Water_Shoot", "Moderately_Vigorous_Water_Shoot"]
  },
  "Extremely_Vigorous_Water_Shoot": {
    "parent": "Vigorous_Water_Shoot",
    "children": []
  },
  "Moderately_Vigorous_Water_Shoot": {
    "parent": "Vigorous_Water_Shoot",
    "children": []
  },
  "Tendril": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Functional_Tendril", "Aborted_Tendril", "Branched_Tendril", "Unbranched_Tendril"]
  },
  "Functional_Tendril": {
    "parent": "Tendril",
    "children": ["Coiled_Functional_Tendril", "Attached_Functional_Tendril", "Climbing_Functional_Tendril"]
  },
  "Coiled_Functional_Tendril": {
    "parent": "Functional_Tendril",
    "children": ["Tightly_Coiled_Functional_Tendril", "Loosely_Coiled_Functional_Tendril", "Partially_Coiled_Functional_Tendril"]
  },
  "Tightly_Coiled_Functional_Tendril": {
    "parent": "Coiled_Functional_Tendril",
    "children": []
  },
  "Loosely_Coiled_Functional_Tendril": {
    "parent": "Coiled_Functional_Tendril",
    "children": []
  },
  "Partially_Coiled_Functional_Tendril": {
    "parent": "Coiled_Functional_Tendril",
    "children": []
  },
  "Attached_Functional_Tendril": {
    "parent": "Functional_Tendril",
    "children": ["Firmly_Attached_Functional_Tendril", "Weakly_Attached_Functional_Tendril"]
  },
  "Firmly_Attached_Functional_Tendril": {
    "parent": "Attached_Functional_Tendril",
    "children": []
  },
  "Weakly_Attached_Functional_Tendril": {
    "parent": "Attached_Functional_Tendril",
    "children": []
  },
  "Climbing_Functional_Tendril": {
    "parent": "Functional_Tendril",
    "children": ["Actively_Climbing_Functional_Tendril", "Searching_Climbing_Functional_Tendril"]
  },
  "Actively_Climbing_Functional_Tendril": {
    "parent": "Climbing_Functional_Tendril",
    "children": []
  },
  "Searching_Climbing_Functional_Tendril": {
    "parent": "Climbing_Functional_Tendril",
    "children": []
  },
  "Aborted_Tendril": {
    "parent": "Tendril",
    "children": ["Early_Aborted_Tendril", "Late_Aborted_Tendril", "Partially_Developed_Tendril"]
  },
  "Early_Aborted_Tendril": {
    "parent": "Aborted_Tendril",
    "children": ["Primordium_Stage_Aborted_Tendril", "Initial_Growth_Aborted_Tendril"]
  },
  "Primordium_Stage_Aborted_Tendril": {
    "parent": "Early_Aborted_Tendril",
    "children": []
  },
  "Initial_Growth_Aborted_Tendril": {
    "parent": "Early_Aborted_Tendril",
    "children": []
  },
  "Late_Aborted_Tendril": {
    "parent": "Aborted_Tendril",
    "children": ["Mid_Development_Aborted_Tendril", "Near_Mature_Aborted_Tendril"]
  },
  "Mid_Development_Aborted_Tendril": {
    "parent": "Late_Aborted_Tendril",
    "children": []
  },
  "Near_Mature_Aborted_Tendril": {
    "parent": "Late_Aborted_Tendril",
    "children": []
  },
  "Partially_Developed_Tendril": {
    "parent": "Aborted_Tendril",
    "children": ["Half_Developed_Tendril", "Incomplete_Tendril"]
  },
  "Half_Developed_Tendril": {
    "parent": "Partially_Developed_Tendril",
    "children": []
  },
  "Incomplete_Tendril": {
    "parent": "Partially_Developed_Tendril",
    "children": []
  },
  "Branched_Tendril": {
    "parent": "Tendril",
    "children": ["Bifurcated_Tendril", "Trifurcated_Tendril", "Multi_Branched_Tendril"]
  },
  "Bifurcated_Tendril": {
    "parent": "Branched_Tendril",
    "children": ["Symmetrical_Bifurcated_Tendril", "Asymmetrical_Bifurcated_Tendril"]
  },
  "Symmetrical_Bifurcated_Tendril": {
    "parent": "Bifurcated_Tendril",
    "children": []
  },
  "Asymmetrical_Bifurcated_Tendril": {
    "parent": "Bifurcated_Tendril",
    "children": []
  },
  "Trifurcated_Tendril": {
    "parent": "Branched_Tendril",
    "children": ["Equal_Trifurcated_Tendril", "Unequal_Trifurcated_Tendril"]
  },
  "Equal_Trifurcated_Tendril": {
    "parent": "Trifurcated_Tendril",
    "children": []
  },
  "Unequal_Trifurcated_Tendril": {
    "parent": "Trifurcated_Tendril",
    "children": []
  },
  "Multi_Branched_Tendril": {
    "parent": "Branched_Tendril",
    "children": ["Four_Branch_Tendril", "Five_Plus_Branch_Tendril"]
  },
  "Four_Branch_Tendril": {
    "parent": "Multi_Branched_Tendril",
    "children": []
  },
  "Five_Plus_Branch_Tendril": {
    "parent": "Multi_Branched_Tendril",
    "children": []
  },
  "Unbranched_Tendril": {
    "parent": "Tendril",
    "children": ["Simple_Unbranched_Tendril", "Juvenile_Unbranched_Tendril"]
  },
  "Simple_Unbranched_Tendril": {
    "parent": "Unbranched_Tendril",
    "children": ["Straight_Simple_Unbranched_Tendril", "Curved_Simple_Unbranched_Tendril"]
  },
  "Straight_Simple_Unbranched_Tendril": {
    "parent": "Simple_Unbranched_Tendril",
    "children": []
  },
  "Curved_Simple_Unbranched_Tendril": {
    "parent": "Simple_Unbranched_Tendril",
    "children": []
  },
  "Juvenile_Unbranched_Tendril": {
    "parent": "Unbranched_Tendril",
    "children": ["Early_Juvenile_Unbranched_Tendril", "Late_Juvenile_Unbranched_Tendril"]
  },
  "Early_Juvenile_Unbranched_Tendril": {
    "parent": "Juvenile_Unbranched_Tendril",
    "children": []
  },
  "Late_Juvenile_Unbranched_Tendril": {
    "parent": "Juvenile_Unbranched_Tendril",
    "children": []
  },
  "Leaf": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Mature_Leaf", "Young_Leaf", "Basal_Leaf", "Apical_Leaf", "Petiole", "Leaf_Blade", "Leaf_Lobe", "Leaf_Sinus"]
  },
  "Mature_Leaf": {
    "parent": "Leaf",
    "children": ["Fully_Expanded_Mature_Leaf", "Sun_Exposed_Mature_Leaf", "Shade_Mature_Leaf"]
  },
  "Fully_Expanded_Mature_Leaf": {
    "parent": "Mature_Leaf",
    "children": ["Maximum_Size_Mature_Leaf", "Optimal_Function_Mature_Leaf"]
  },
  "Maximum_Size_Mature_Leaf": {
    "parent": "Fully_Expanded_Mature_Leaf",
    "children": []
  },
  "Optimal_Function_Mature_Leaf": {
    "parent": "Fully_Expanded_Mature_Leaf",
    "children": []
  },
  "Sun_Exposed_Mature_Leaf": {
    "parent": "Mature_Leaf",
    "children": ["High_Light_Adapted_Mature_Leaf", "UV_Exposed_Mature_Leaf"]
  },
  "High_Light_Adapted_Mature_Leaf": {
    "parent": "Sun_Exposed_Mature_Leaf",
    "children": []
  },
  "UV_Exposed_Mature_Leaf": {
    "parent": "Sun_Exposed_Mature_Leaf",
    "children": []
  },
  "Shade_Mature_Leaf": {
    "parent": "Mature_Leaf",
    "children": ["Low_Light_Adapted_Mature_Leaf", "Deep_Shade_Mature_Leaf"]
  },
  "Low_Light_Adapted_Mature_Leaf": {
    "parent": "Shade_Mature_Leaf",
    "children": []
  },
  "Deep_Shade_Mature_Leaf": {
    "parent": "Shade_Mature_Leaf",
    "children": []
  },
  "Young_Leaf": {
    "parent": "Leaf",
    "children": ["Emerging_Young_Leaf", "Expanding_Young_Leaf", "Partially_Expanded_Young_Leaf"]
  },
  "Emerging_Young_Leaf": {
    "parent": "Young_Leaf",
    "children": ["Primordium_Stage_Young_Leaf", "Unfolding_Young_Leaf"]
  },
  "Primordium_Stage_Young_Leaf": {
    "parent": "Emerging_Young_Leaf",
    "children": []
  },
  "Unfolding_Young_Leaf": {
    "parent": "Emerging_Young_Leaf",
    "children": []
  },
  "Expanding_Young_Leaf": {
    "parent": "Young_Leaf",
    "children": ["Rapid_Expansion_Young_Leaf", "Slow_Expansion_Young_Leaf"]
  },
  "Rapid_Expansion_Young_Leaf": {
    "parent": "Expanding_Young_Leaf",
    "children": []
  },
  "Slow_Expansion_Young_Leaf": {
    "parent": "Expanding_Young_Leaf",
    "children": []
  },
  "Partially_Expanded_Young_Leaf": {
    "parent": "Young_Leaf",
    "children": ["Half_Expanded_Young_Leaf", "Three_Quarter_Expanded_Young_Leaf"]
  },
  "Half_Expanded_Young_Leaf": {
    "parent": "Partially_Expanded_Young_Leaf",
    "children": []
  },
  "Three_Quarter_Expanded_Young_Leaf": {
    "parent": "Partially_Expanded_Young_Leaf",
    "children": []
  },
  "Basal_Leaf": {
    "parent": "Leaf",
    "children": ["First_Basal_Leaf", "Second_Basal_Leaf", "Lower_Canopy_Basal_Leaf"]
  },
  "First_Basal_Leaf": {
    "parent": "Basal_Leaf",
    "children": ["Cotyledonary_Node_First_Leaf", "Primary_First_Basal_Leaf"]
  },
  "Cotyledonary_Node_First_Leaf": {
    "parent": "First_Basal_Leaf",
    "children": []
  },
  "Primary_First_Basal_Leaf": {
    "parent": "First_Basal_Leaf",
    "children": []
  },
  "Second_Basal_Leaf": {
    "parent": "Basal_Leaf",
    "children": ["Node_Two_Basal_Leaf", "Secondary_Basal_Leaf"]
  },
  "Node_Two_Basal_Leaf": {
    "parent": "Second_Basal_Leaf",
    "children": []
  },
  "Secondary_Basal_Leaf": {
    "parent": "Second_Basal_Leaf",
    "children": []
  },
  "Lower_Canopy_Basal_Leaf": {
    "parent": "Basal_Leaf",
    "children": ["Shaded_Lower_Canopy_Leaf", "Senescent_Lower_Canopy_Leaf"]
  },
  "Shaded_Lower_Canopy_Leaf": {
    "parent": "Lower_Canopy_Basal_Leaf",
    "children": []
  },
  "Senescent_Lower_Canopy_Leaf": {
    "parent": "Lower_Canopy_Basal_Leaf",
    "children": []
  },
  "Apical_Leaf": {
    "parent": "Leaf",
    "children": ["Terminal_Apical_Leaf", "Upper_Canopy_Apical_Leaf", "Growing_Tip_Leaf"]
  },
  "Terminal_Apical_Leaf": {
    "parent": "Apical_Leaf",
    "children": ["Shoot_Tip_Terminal_Leaf", "Ultimate_Terminal_Leaf"]
  },
  "Shoot_Tip_Terminal_Leaf": {
    "parent": "Terminal_Apical_Leaf",
    "children": []
  },
  "Ultimate_Terminal_Leaf": {
    "parent": "Terminal_Apical_Leaf",
    "children": []
  },
  "Upper_Canopy_Apical_Leaf": {
    "parent": "Apical_Leaf",
    "children": ["Sun_Exposed_Upper_Canopy_Leaf", "Well_Lit_Upper_Canopy_Leaf"]
  },
  "Sun_Exposed_Upper_Canopy_Leaf": {
    "parent": "Upper_Canopy_Apical_Leaf",
    "children": []
  },
  "Well_Lit_Upper_Canopy_Leaf": {
    "parent": "Upper_Canopy_Apical_Leaf",
    "children": []
  },
  "Growing_Tip_Leaf": {
    "parent": "Apical_Leaf",
    "children": ["Actively_Growing_Tip_Leaf", "Meristematic_Region_Leaf"]
  },
  "Actively_Growing_Tip_Leaf": {
    "parent": "Growing_Tip_Leaf",
    "children": []
  },
  "Meristematic_Region_Leaf": {
    "parent": "Growing_Tip_Leaf",
    "children": []
  },
  "Petiole": {
    "parent": "Leaf",
    "children": ["Main_Petiole", "Lateral_Petiole"]
  },
  "Main_Petiole": {
    "parent": "Petiole",
    "children": ["Long_Main_Petiole", "Short_Main_Petiole", "Thick_Main_Petiole"]
  },
  "Long_Main_Petiole": {
    "parent": "Main_Petiole",
    "children": []
  },
  "Short_Main_Petiole": {
    "parent": "Main_Petiole",
    "children": []
  },
  "Thick_Main_Petiole": {
    "parent": "Main_Petiole",
    "children": []
  },
  "Lateral_Petiole": {
    "parent": "Petiole",
    "children": ["Branch_Lateral_Petiole", "Secondary_Lateral_Petiole"]
  },
  "Branch_Lateral_Petiole": {
    "parent": "Lateral_Petiole",
    "children": []
  },
  "Secondary_Lateral_Petiole": {
    "parent": "Lateral_Petiole",
    "children": []
  },
  "Leaf_Blade": {
    "parent": "Leaf",
    "children": ["Lamina", "Median_Vein", "Lateral_Vein", "Veinlet"]
  },
  "Lamina": {
    "parent": "Leaf_Blade",
    "children": ["Upper_Lamina_Surface", "Lower_Lamina_Surface", "Lamina_Margin"]
  },
  "Upper_Lamina_Surface": {
    "parent": "Lamina",
    "children": []
  },
  "Lower_Lamina_Surface": {
    "parent": "Lamina",
    "children": []
  },
  "Lamina_Margin": {
    "parent": "Lamina",
    "children": []
  },
  "Median_Vein": {
    "parent": "Leaf_Blade",
    "children": ["Primary_Median_Vein", "Central_Median_Vein"]
  },
  "Primary_Median_Vein": {
    "parent": "Median_Vein",
    "children": []
  },
  "Central_Median_Vein": {
    "parent": "Median_Vein",
    "children": []
  },
  "Lateral_Vein": {
    "parent": "Leaf_Blade",
    "children": ["Primary_Lateral_Vein", "Secondary_Lateral_Vein", "Tertiary_Lateral_Vein"]
  },
  "Primary_Lateral_Vein": {
    "parent": "Lateral_Vein",
    "children": []
  },
  "Secondary_Lateral_Vein": {
    "parent": "Lateral_Vein",
    "children": []
  },
  "Tertiary_Lateral_Vein": {
    "parent": "Lateral_Vein",
    "children": []
  },
  "Veinlet": {
    "parent": "Leaf_Blade",
    "children": ["Fine_Veinlet", "Terminal_Veinlet"]
  },
  "Fine_Veinlet": {
    "parent": "Veinlet",
    "children": []
  },
  "Terminal_Veinlet": {
    "parent": "Veinlet",
    "children": []
  },
  "Leaf_Lobe": {
    "parent": "Leaf",
    "children": ["Apical_Lobe", "Lateral_Lobe", "Basal_Lobe"]
  },
  "Apical_Lobe": {
    "parent": "Leaf_Lobe",
    "children": ["Terminal_Apical_Lobe", "Pointed_Apical_Lobe"]
  },
  "Terminal_Apical_Lobe": {
    "parent": "Apical_Lobe",
    "children": []
  },
  "Pointed_Apical_Lobe": {
    "parent": "Apical_Lobe",
    "children": []
  },
  "Lateral_Lobe": {
    "parent": "Leaf_Lobe",
    "children": ["Upper_Lateral_Lobe", "Lower_Lateral_Lobe"]
  },
  "Upper_Lateral_Lobe": {
    "parent": "Lateral_Lobe",
    "children": []
  },
  "Lower_Lateral_Lobe": {
    "parent": "Lateral_Lobe",
    "children": []
  },
  "Basal_Lobe": {
    "parent": "Leaf_Lobe",
    "children": ["Deep_Basal_Lobe", "Shallow_Basal_Lobe"]
  },
  "Deep_Basal_Lobe": {
    "parent": "Basal_Lobe",
    "children": []
  },
  "Shallow_Basal_Lobe": {
    "parent": "Basal_Lobe",
    "children": []
  },
  "Leaf_Sinus": {
    "parent": "Leaf",
    "children": ["Petiolar_Sinus", "Upper_Lateral_Sinus", "Lower_Lateral_Sinus"]
  },
  "Petiolar_Sinus": {
    "parent": "Leaf_Sinus",
    "children": ["Open_Petiolar_Sinus", "Closed_Petiolar_Sinus", "Overlapping_Petiolar_Sinus", "Wide_Petiolar_Sinus", "Narrow_Petiolar_Sinus"]
  },
  "Open_Petiolar_Sinus": {
    "parent": "Petiolar_Sinus",
    "children": []
  },
  "Closed_Petiolar_Sinus": {
    "parent": "Petiolar_Sinus",
    "children": []
  },
  "Overlapping_Petiolar_Sinus": {
    "parent": "Petiolar_Sinus",
    "children": []
  },
  "Wide_Petiolar_Sinus": {
    "parent": "Petiolar_Sinus",
    "children": []
  },
  "Narrow_Petiolar_Sinus": {
    "parent": "Petiolar_Sinus",
    "children": []
  },
  "Upper_Lateral_Sinus": {
    "parent": "Leaf_Sinus",
    "children": ["Deep_Upper_Lateral_Sinus", "Shallow_Upper_Lateral_Sinus"]
  },
  "Deep_Upper_Lateral_Sinus": {
    "parent": "Upper_Lateral_Sinus",
    "children": []
  },
  "Shallow_Upper_Lateral_Sinus": {
    "parent": "Upper_Lateral_Sinus",
    "children": []
  },
  "Lower_Lateral_Sinus": {
    "parent": "Leaf_Sinus",
    "children": ["Deep_Lower_Lateral_Sinus", "Shallow_Lower_Lateral_Sinus"]
  },
  "Deep_Lower_Lateral_Sinus": {
    "parent": "Lower_Lateral_Sinus",
    "children": []
  },
  "Shallow_Lower_Lateral_Sinus": {
    "parent": "Lower_Lateral_Sinus",
    "children": []
  },
  "Inflorescence": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Primary_Inflorescence", "Secondary_Inflorescence", "Inflorescence_Rachis", "Inflorescence_Branch", "Flower_Cluster"]
  },
  "Primary_Inflorescence": {
    "parent": "Inflorescence",
    "children": ["Main_Axis_Primary_Inflorescence", "Terminal_Primary_Inflorescence", "Compound_Primary_Inflorescence"]
  },
  "Main_Axis_Primary_Inflorescence": {
    "parent": "Primary_Inflorescence",
    "children": ["Central_Main_Axis_Inflorescence", "Dominant_Main_Axis_Inflorescence"]
  },
  "Central_Main_Axis_Inflorescence": {
    "parent": "Main_Axis_Primary_Inflorescence",
    "children": []
  },
  "Dominant_Main_Axis_Inflorescence": {
    "parent": "Main_Axis_Primary_Inflorescence",
    "children": []
  },
  "Terminal_Primary_Inflorescence": {
    "parent": "Primary_Inflorescence",
    "children": ["Shoot_Tip_Terminal_Inflorescence", "Apical_Terminal_Inflorescence"]
  },
  "Shoot_Tip_Terminal_Inflorescence": {
    "parent": "Terminal_Primary_Inflorescence",
    "children": []
  },
  "Apical_Terminal_Inflorescence": {
    "parent": "Terminal_Primary_Inflorescence",
    "children": []
  },
  "Compound_Primary_Inflorescence": {
    "parent": "Primary_Inflorescence",
    "children": ["Multi_Branched_Compound_Inflorescence", "Complex_Compound_Inflorescence"]
  },
  "Multi_Branched_Compound_Inflorescence": {
    "parent": "Compound_Primary_Inflorescence",
    "children": []
  },
  "Complex_Compound_Inflorescence": {
    "parent": "Compound_Primary_Inflorescence",
    "children": []
  },
  "Secondary_Inflorescence": {
    "parent": "Inflorescence",
    "children": ["Lateral_Secondary_Inflorescence", "Basal_Secondary_Inflorescence"]
  },
  "Lateral_Secondary_Inflorescence": {
    "parent": "Secondary_Inflorescence",
    "children": ["Upper_Lateral_Secondary_Inflorescence", "Lower_Lateral_Secondary_Inflorescence"]
  },
  "Upper_Lateral_Secondary_Inflorescence": {
    "parent": "Lateral_Secondary_Inflorescence",
    "children": []
  },
  "Lower_Lateral_Secondary_Inflorescence": {
    "parent": "Lateral_Secondary_Inflorescence",
    "children": []
  },
  "Basal_Secondary_Inflorescence": {
    "parent": "Secondary_Inflorescence",
    "children": ["Node_Position_Basal_Secondary_Inflorescence", "Base_Attached_Secondary_Inflorescence"]
  },
  "Node_Position_Basal_Secondary_Inflorescence": {
    "parent": "Basal_Secondary_Inflorescence",
    "children": []
  },
  "Base_Attached_Secondary_Inflorescence": {
    "parent": "Basal_Secondary_Inflorescence",
    "children": []
  },
  "Inflorescence_Rachis": {
    "parent": "Inflorescence",
    "children": ["Main_Rachis", "Primary_Branch_Rachis", "Secondary_Branch_Rachis"]
  },
  "Main_Rachis": {
    "parent": "Inflorescence_Rachis",
    "children": ["Primary_Main_Rachis", "Central_Main_Rachis", "Thick_Main_Rachis"]
  },
  "Primary_Main_Rachis": {
    "parent": "Main_Rachis",
    "children": []
  },
  "Central_Main_Rachis": {
    "parent": "Main_Rachis",
    "children": []
  },
  "Thick_Main_Rachis": {
    "parent": "Main_Rachis",
    "children": []
  },
  "Primary_Branch_Rachis": {
    "parent": "Inflorescence_Rachis",
    "children": ["First_Order_Primary_Branch_Rachis", "Main_Primary_Branch_Rachis"]
  },
  "First_Order_Primary_Branch_Rachis": {
    "parent": "Primary_Branch_Rachis",
    "children": []
  },
  "Main_Primary_Branch_Rachis": {
    "parent": "Primary_Branch_Rachis",
    "children": []
  },
  "Secondary_Branch_Rachis": {
    "parent": "Inflorescence_Rachis",
    "children": ["Second_Order_Secondary_Branch_Rachis", "Lateral_Secondary_Branch_Rachis"]
  },
  "Second_Order_Secondary_Branch_Rachis": {
    "parent": "Secondary_Branch_Rachis",
    "children": []
  },
  "Lateral_Secondary_Branch_Rachis": {
    "parent": "Secondary_Branch_Rachis",
    "children": []
  },
  "Inflorescence_Branch": {
    "parent": "Inflorescence",
    "children": ["Primary_Inflorescence_Branch", "Secondary_Inflorescence_Branch", "Tertiary_Inflorescence_Branch"]
  },
  "Primary_Inflorescence_Branch": {
    "parent": "Inflorescence_Branch",
    "children": ["Lower_Primary_Inflorescence_Branch", "Upper_Primary_Inflorescence_Branch", "Basal_Primary_Inflorescence_Branch"]
  },
  "Lower_Primary_Inflorescence_Branch": {
    "parent": "Primary_Inflorescence_Branch",
    "children": []
  },
  "Upper_Primary_Inflorescence_Branch": {
    "parent": "Primary_Inflorescence_Branch",
    "children": []
  },
  "Basal_Primary_Inflorescence_Branch": {
    "parent": "Primary_Inflorescence_Branch",
    "children": []
  },
  "Secondary_Inflorescence_Branch": {
    "parent": "Inflorescence_Branch",
    "children": ["Lower_Secondary_Inflorescence_Branch", "Upper_Secondary_Inflorescence_Branch"]
  },
  "Lower_Secondary_Inflorescence_Branch": {
    "parent": "Secondary_Inflorescence_Branch",
    "children": []
  },
  "Upper_Secondary_Inflorescence_Branch": {
    "parent": "Secondary_Inflorescence_Branch",
    "children": []
  },
  "Tertiary_Inflorescence_Branch": {
    "parent": "Inflorescence_Branch",
    "children": ["Terminal_Tertiary_Inflorescence_Branch", "Lateral_Tertiary_Inflorescence_Branch"]
  },
  "Terminal_Tertiary_Inflorescence_Branch": {
    "parent": "Tertiary_Inflorescence_Branch",
    "children": []
  },
  "Lateral_Tertiary_Inflorescence_Branch": {
    "parent": "Tertiary_Inflorescence_Branch",
    "children": []
  },
  "Flower_Cluster": {
    "parent": "Inflorescence",
    "children": ["Compact_Flower_Cluster", "Loose_Flower_Cluster", "Terminal_Flower_Cluster"]
  },
  "Compact_Flower_Cluster": {
    "parent": "Flower_Cluster",
    "children": ["Densely_Packed_Compact_Cluster", "Tightly_Compact_Cluster"]
  },
  "Densely_Packed_Compact_Cluster": {
    "parent": "Compact_Flower_Cluster",
    "children": []
  },
  "Tightly_Compact_Cluster": {
    "parent": "Compact_Flower_Cluster",
    "children": []
  },
  "Loose_Flower_Cluster": {
    "parent": "Flower_Cluster",
    "children": ["Widely_Spaced_Loose_Cluster", "Open_Loose_Cluster"]
  },
  "Widely_Spaced_Loose_Cluster": {
    "parent": "Loose_Flower_Cluster",
    "children": []
  },
  "Open_Loose_Cluster": {
    "parent": "Loose_Flower_Cluster",
    "children": []
  },
  "Terminal_Flower_Cluster": {
    "parent": "Flower_Cluster",
    "children": ["Apex_Terminal_Flower_Cluster", "End_Branch_Terminal_Cluster"]
  },
  "Apex_Terminal_Flower_Cluster": {
    "parent": "Terminal_Flower_Cluster",
    "children": []
  },
  "End_Branch_Terminal_Cluster": {
    "parent": "Terminal_Flower_Cluster",
    "children": []
  },
  "Flower": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Perfect_Flower", "Staminate_Flower", "Pistillate_Flower", "Calyptra", "Stamen", "Pistil", "Ovary", "Style", "Stigma"]
  },
  "Perfect_Flower": {
    "parent": "Flower",
    "children": ["Hermaphrodite_Flower", "Functionally_Female_Flower", "Functionally_Male_Flower"]
  },
  "Hermaphrodite_Flower": {
    "parent": "Perfect_Flower",
    "children": ["Fully_Functional_Hermaphrodite_Flower", "Balanced_Hermaphrodite_Flower"]
  },
  "Fully_Functional_Hermaphrodite_Flower": {
    "parent": "Hermaphrodite_Flower",
    "children": []
  },
  "Balanced_Hermaphrodite_Flower": {
    "parent": "Hermaphrodite_Flower",
    "children": []
  },
  "Functionally_Female_Flower": {
    "parent": "Perfect_Flower",
    "children": ["Reflex_Stamen_Functionally_Female_Flower", "Reduced_Pollen_Functionally_Female_Flower"]
  },
  "Reflex_Stamen_Functionally_Female_Flower": {
    "parent": "Functionally_Female_Flower",
    "children": []
  },
  "Reduced_Pollen_Functionally_Female_Flower": {
    "parent": "Functionally_Female_Flower",
    "children": []
  },
  "Functionally_Male_Flower": {
    "parent": "Perfect_Flower",
    "children": ["Short_Pistil_Functionally_Male_Flower", "Non_Receptive_Functionally_Male_Flower"]
  },
  "Short_Pistil_Functionally_Male_Flower": {
    "parent": "Functionally_Male_Flower",
    "children": []
  },
  "Non_Receptive_Functionally_Male_Flower": {
    "parent": "Functionally_Male_Flower",
    "children": []
  },
  "Staminate_Flower": {
    "parent": "Flower",
    "children": ["Male_Only_Flower", "Reduced_Pistil_Flower"]
  },
  "Male_Only_Flower": {
    "parent": "Staminate_Flower",
    "children": ["Fully_Developed_Male_Only_Flower", "Mature_Male_Only_Flower"]
  },
  "Fully_Developed_Male_Only_Flower": {
    "parent": "Male_Only_Flower",
    "children": []
  },
  "Mature_Male_Only_Flower": {
    "parent": "Male_Only_Flower",
    "children": []
  },
  "Reduced_Pistil_Flower": {
    "parent": "Staminate_Flower",
    "children": ["Vestigial_Pistil_Flower", "Rudimentary_Pistil_Flower"]
  },
  "Vestigial_Pistil_Flower": {
    "parent": "Reduced_Pistil_Flower",
    "children": []
  },
  "Rudimentary_Pistil_Flower": {
    "parent": "Reduced_Pistil_Flower",
    "children": []
  },
  "Pistillate_Flower": {
    "parent": "Flower",
    "children": ["Female_Only_Flower", "Reduced_Stamen_Flower"]
  },
  "Female_Only_Flower": {
    "parent": "Pistillate_Flower",
    "children": ["Fully_Developed_Female_Only_Flower", "Mature_Female_Only_Flower"]
  },
  "Fully_Developed_Female_Only_Flower": {
    "parent": "Female_Only_Flower",
    "children": []
  },
  "Mature_Female_Only_Flower": {
    "parent": "Female_Only_Flower",
    "children": []
  },
  "Reduced_Stamen_Flower": {
    "parent": "Pistillate_Flower",
    "children": ["Vestigial_Stamen_Flower", "Rudimentary_Stamen_Flower"]
  },
  "Vestigial_Stamen_Flower": {
    "parent": "Reduced_Stamen_Flower",
    "children": []
  },
  "Rudimentary_Stamen_Flower": {
    "parent": "Reduced_Stamen_Flower",
    "children": []
  },
  "Calyptra": {
    "parent": "Flower",
    "children": ["Intact_Calyptra", "Separating_Calyptra", "Detached_Calyptra"]
  },
  "Intact_Calyptra": {
    "parent": "Calyptra",
    "children": ["Tightly_Sealed_Intact_Calyptra", "Pre_Dehiscence_Intact_Calyptra"]
  },
  "Tightly_Sealed_Intact_Calyptra": {
    "parent": "Intact_Calyptra",
    "children": []
  },
  "Pre_Dehiscence_Intact_Calyptra": {
    "parent": "Intact_Calyptra",
    "children": []
  },
  "Separating_Calyptra": {
    "parent": "Calyptra",
    "children": ["Partially_Separated_Calyptra", "Loosening_Calyptra"]
  },
  "Partially_Separated_Calyptra": {
    "parent": "Separating_Calyptra",
    "children": []
  },
  "Loosening_Calyptra": {
    "parent": "Separating_Calyptra",
    "children": []
  },
  "Detached_Calyptra": {
    "parent": "Calyptra",
    "children": ["Freshly_Detached_Calyptra", "Fallen_Detached_Calyptra"]
  },
  "Freshly_Detached_Calyptra": {
    "parent": "Detached_Calyptra",
    "children": []
  },
  "Fallen_Detached_Calyptra": {
    "parent": "Detached_Calyptra",
    "children": []
  },
  "Stamen": {
    "parent": "Flower",
    "children": ["Anther", "Filament", "Pollen_Sac"]
  },
  "Anther": {
    "parent": "Stamen",
    "children": ["Mature_Anther", "Dehiscing_Anther", "Post_Dehiscence_Anther"]
  },
  "Mature_Anther": {
    "parent": "Anther",
    "children": []
  },
  "Dehiscing_Anther": {
    "parent": "Anther",
    "children": []
  },
  "Post_Dehiscence_Anther": {
    "parent": "Anther",
    "children": []
  },
  "Filament": {
    "parent": "Stamen",
    "children": ["Long_Filament", "Short_Filament", "Erect_Filament"]
  },
  "Long_Filament": {
    "parent": "Filament",
    "children": []
  },
  "Short_Filament": {
    "parent": "Filament",
    "children": []
  },
  "Erect_Filament": {
    "parent": "Filament",
    "children": []
  },
  "Pollen_Sac": {
    "parent": "Stamen",
    "children": ["Pollen_Filled_Sac", "Empty_Pollen_Sac"]
  },
  "Pollen_Filled_Sac": {
    "parent": "Pollen_Sac",
    "children": []
  },
  "Empty_Pollen_Sac": {
    "parent": "Pollen_Sac",
    "children": []
  },
  "Pistil": {
    "parent": "Flower",
    "children": ["Compound_Pistil", "Bicarpellate_Pistil"]
  },
  "Compound_Pistil": {
    "parent": "Pistil",
    "children": ["Two_Carpel_Compound_Pistil", "Fused_Carpel_Compound_Pistil"]
  },
  "Two_Carpel_Compound_Pistil": {
    "parent": "Compound_Pistil",
    "children": []
  },
  "Fused_Carpel_Compound_Pistil": {
    "parent": "Compound_Pistil",
    "children": []
  },
  "Bicarpellate_Pistil": {
    "parent": "Pistil",
    "children": ["Symmetrical_Bicarpellate_Pistil", "Asymmetrical_Bicarpellate_Pistil"]
  },
  "Symmetrical_Bicarpellate_Pistil": {
    "parent": "Bicarpellate_Pistil",
    "children": []
  },
  "Asymmetrical_Bicarpellate_Pistil": {
    "parent": "Bicarpellate_Pistil",
    "children": []
  },
  "Ovary": {
    "parent": "Flower",
    "children": ["Superior_Ovary", "Bilocular_Ovary", "Ovule_Containing_Ovary"]
  },
  "Superior_Ovary": {
    "parent": "Ovary",
    "children": ["Elevated_Superior_Ovary", "Free_Superior_Ovary"]
  },
  "Elevated_Superior_Ovary": {
    "parent": "Superior_Ovary",
    "children": []
  },
  "Free_Superior_Ovary": {
    "parent": "Superior_Ovary",
    "children": []
  },
  "Bilocular_Ovary": {
    "parent": "Ovary",
    "children": ["Two_Chamber_Bilocular_Ovary", "Septate_Bilocular_Ovary"]
  },
  "Two_Chamber_Bilocular_Ovary": {
    "parent": "Bilocular_Ovary",
    "children": []
  },
  "Septate_Bilocular_Ovary": {
    "parent": "Bilocular_Ovary",
    "children": []
  },
  "Ovule_Containing_Ovary": {
    "parent": "Ovary",
    "children": ["Two_Ovule_Ovary", "Four_Ovule_Ovary"]
  },
  "Two_Ovule_Ovary": {
    "parent": "Ovule_Containing_Ovary",
    "children": []
  },
  "Four_Ovule_Ovary": {
    "parent": "Ovule_Containing_Ovary",
    "children": []
  },
  "Style": {
    "parent": "Flower",
    "children": ["Short_Style", "Medium_Style", "Long_Style"]
  },
  "Short_Style": {
    "parent": "Style",
    "children": ["Very_Short_Style", "Reduced_Short_Style"]
  },
  "Very_Short_Style": {
    "parent": "Short_Style",
    "children": []
  },
  "Reduced_Short_Style": {
    "parent": "Short_Style",
    "children": []
  },
  "Medium_Style": {
    "parent": "Style",
    "children": ["Moderate_Medium_Style", "Standard_Medium_Style"]
  },
  "Moderate_Medium_Style": {
    "parent": "Medium_Style",
    "children": []
  },
  "Standard_Medium_Style": {
    "parent": "Medium_Style",
    "children": []
  },
  "Long_Style": {
    "parent": "Style",
    "children": ["Extended_Long_Style", "Elongated_Long_Style"]
  },
  "Extended_Long_Style": {
    "parent": "Long_Style",
    "children": []
  },
  "Elongated_Long_Style": {
    "parent": "Long_Style",
    "children": []
  },
  "Stigma": {
    "parent": "Flower",
    "children": ["Receptive_Stigma", "Papillate_Stigma", "Dry_Stigma"]
  },
  "Receptive_Stigma": {
    "parent": "Stigma",
    "children": ["Fully_Receptive_Stigma", "Maximally_Receptive_Stigma"]
  },
  "Fully_Receptive_Stigma": {
    "parent": "Receptive_Stigma",
    "children": []
  },
  "Maximally_Receptive_Stigma": {
    "parent": "Receptive_Stigma",
    "children": []
  },
  "Papillate_Stigma": {
    "parent": "Stigma",
    "children": ["Densely_Papillate_Stigma", "Sparsely_Papillate_Stigma"]
  },
  "Densely_Papillate_Stigma": {
    "parent": "Papillate_Stigma",
    "children": []
  },
  "Sparsely_Papillate_Stigma": {
    "parent": "Papillate_Stigma",
    "children": []
  },
  "Dry_Stigma": {
    "parent": "Stigma",
    "children": ["Non_Receptive_Dry_Stigma", "Post_Receptive_Dry_Stigma"]
  },
  "Non_Receptive_Dry_Stigma": {
    "parent": "Dry_Stigma",
    "children": []
  },
  "Post_Receptive_Dry_Stigma": {
    "parent": "Dry_Stigma",
    "children": []
  },
  "Berry": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Developing_Berry", "Mature_Berry", "Pericarp", "Exocarp", "Mesocarp", "Endocarp", "Seed", "Pedicel", "Brush"]
  },
  "Developing_Berry": {
    "parent": "Berry",
    "children": ["Early_Developing_Berry", "Mid_Developing_Berry", "Late_Developing_Berry", "Cell_Division_Stage_Berry", "Cell_Enlargement_Stage_Berry"]
  },
  "Early_Developing_Berry": {
    "parent": "Developing_Berry",
    "children": ["Post_Fertilization_Early_Berry", "Initial_Growth_Early_Berry"]
  },
  "Post_Fertilization_Early_Berry": {
    "parent": "Early_Developing_Berry",
    "children": []
  },
  "Initial_Growth_Early_Berry": {
    "parent": "Early_Developing_Berry",
    "children": []
  },
  "Mid_Developing_Berry": {
    "parent": "Developing_Berry",
    "children": ["Active_Growth_Mid_Berry", "Expanding_Mid_Berry"]
  },
  "Active_Growth_Mid_Berry": {
    "parent": "Mid_Developing_Berry",
    "children": []
  },
  "Expanding_Mid_Berry": {
    "parent": "Mid_Developing_Berry",
    "children": []
  },
  "Late_Developing_Berry": {
    "parent": "Developing_Berry",
    "children": ["Pre_Veraison_Late_Berry", "Maximum_Size_Late_Berry"]
  },
  "Pre_Veraison_Late_Berry": {
    "parent": "Late_Developing_Berry",
    "children": []
  },
  "Maximum_Size_Late_Berry": {
    "parent": "Late_Developing_Berry",
    "children": []
  },
  "Cell_Division_Stage_Berry": {
    "parent": "Developing_Berry",
    "children": ["Rapid_Division_Stage_Berry", "Peak_Division_Stage_Berry"]
  },
  "Rapid_Division_Stage_Berry": {
    "parent": "Cell_Division_Stage_Berry",
    "children": []
  },
  "Peak_Division_Stage_Berry": {
    "parent": "Cell_Division_Stage_Berry",
    "children": []
  },
  "Cell_Enlargement_Stage_Berry": {
    "parent": "Developing_Berry",
    "children": ["Early_Enlargement_Stage_Berry", "Maximum_Enlargement_Stage_Berry"]
  },
  "Early_Enlargement_Stage_Berry": {
    "parent": "Cell_Enlargement_Stage_Berry",
    "children": []
  },
  "Maximum_Enlargement_Stage_Berry": {
    "parent": "Cell_Enlargement_Stage_Berry",
    "children": []
  },
  "Mature_Berry": {
    "parent": "Berry",
    "children": ["Fully_Ripe_Berry", "Overripe_Berry", "Harvested_Berry", "Post_Veraison_Berry"]
  },
  "Fully_Ripe_Berry": {
    "parent": "Mature_Berry",
    "children": ["Optimally_Ripe_Berry", "Peak_Ripeness_Berry"]
  },
  "Optimally_Ripe_Berry": {
    "parent": "Fully_Ripe_Berry",
    "children": []
  },
  "Peak_Ripeness_Berry": {
    "parent": "Fully_Ripe_Berry",
    "children": []
  },
  "Overripe_Berry": {
    "parent": "Mature_Berry",
    "children": ["Slightly_Overripe_Berry", "Severely_Overripe_Berry"]
  },
  "Slightly_Overripe_Berry": {
    "parent": "Overripe_Berry",
    "children": []
  },
  "Severely_Overripe_Berry": {
    "parent": "Overripe_Berry",
    "children": []
  },
  "Harvested_Berry": {
    "parent": "Mature_Berry",
    "children": ["Freshly_Harvested_Berry", "Post_Harvest_Berry"]
  },
  "Freshly_Harvested_Berry": {
    "parent": "Harvested_Berry",
    "children": []
  },
  "Post_Harvest_Berry": {
    "parent": "Harvested_Berry",
    "children": []
  },
  "Post_Veraison_Berry": {
    "parent": "Mature_Berry",
    "children": ["Early_Post_Veraison_Berry", "Late_Post_Veraison_Berry"]
  },
  "Early_Post_Veraison_Berry": {
    "parent": "Post_Veraison_Berry",
    "children": []
  },
  "Late_Post_Veraison_Berry": {
    "parent": "Post_Veraison_Berry",
    "children": []
  },
  "Pericarp": {
    "parent": "Berry",
    "children": ["Outer_Pericarp", "Middle_Pericarp", "Inner_Pericarp"]
  },
  "Outer_Pericarp": {
    "parent": "Pericarp",
    "children": ["Epidermal_Outer_Pericarp", "Surface_Outer_Pericarp"]
  },
  "Epidermal_Outer_Pericarp": {
    "parent": "Outer_Pericarp",
    "children": []
  },
  "Surface_Outer_Pericarp": {
    "parent": "Outer_Pericarp",
    "children": []
  },
  "Middle_Pericarp": {
    "parent": "Pericarp",
    "children": ["Intermediate_Middle_Pericarp", "Transitional_Middle_Pericarp"]
  },
  "Intermediate_Middle_Pericarp": {
    "parent": "Middle_Pericarp",
    "children": []
  },
  "Transitional_Middle_Pericarp": {
    "parent": "Middle_Pericarp",
    "children": []
  },
  "Inner_Pericarp": {
    "parent": "Pericarp",
    "children": ["Seed_Adjacent_Inner_Pericarp", "Locular_Inner_Pericarp"]
  },
  "Seed_Adjacent_Inner_Pericarp": {
    "parent": "Inner_Pericarp",
    "children": []
  },
  "Locular_Inner_Pericarp": {
    "parent": "Inner_Pericarp",
    "children": []
  },
  "Exocarp": {
    "parent": "Berry",
    "children": ["Berry_Skin", "Cuticle_Layer", "Epidermal_Layer", "Hypodermal_Layer"]
  },
  "Berry_Skin": {
    "parent": "Exocarp",
    "children": ["Thick_Berry_Skin", "Thin_Berry_Skin", "Pigmented_Berry_Skin"]
  },
  "Thick_Berry_Skin": {
    "parent": "Berry_Skin",
    "children": []
  },
  "Thin_Berry_Skin": {
    "parent": "Berry_Skin",
    "children": []
  },
  "Pigmented_Berry_Skin": {
    "parent": "Berry_Skin",
    "children": []
  },
  "Cuticle_Layer": {
    "parent": "Exocarp",
    "children": ["Waxy_Cuticle_Layer", "Protective_Cuticle_Layer"]
  },
  "Waxy_Cuticle_Layer": {
    "parent": "Cuticle_Layer",
    "children": []
  },
  "Protective_Cuticle_Layer": {
    "parent": "Cuticle_Layer",
    "children": []
  },
  "Epidermal_Layer": {
    "parent": "Exocarp",
    "children": ["Outer_Epidermal_Layer", "Cell_Wall_Thickened_Epidermal_Layer"]
  },
  "Outer_Epidermal_Layer": {
    "parent": "Epidermal_Layer",
    "children": []
  },
  "Cell_Wall_Thickened_Epidermal_Layer": {
    "parent": "Epidermal_Layer",
    "children": []
  },
  "Hypodermal_Layer": {
    "parent": "Exocarp",
    "children": ["Sub_Epidermal_Hypodermal_Layer", "Supporting_Hypodermal_Layer"]
  },
  "Sub_Epidermal_Hypodermal_Layer": {
    "parent": "Hypodermal_Layer",
    "children": []
  },
  "Supporting_Hypodermal_Layer": {
    "parent": "Hypodermal_Layer",
    "children": []
  },
  "Mesocarp": {
    "parent": "Berry",
    "children": ["Outer_Mesocarp", "Inner_Mesocarp", "Pulp_Tissue", "Vascular_Bundle_Mesocarp"]
  },
  "Outer_Mesocarp": {
    "parent": "Mesocarp",
    "children": ["Firm_Outer_Mesocarp", "Structural_Outer_Mesocarp"]
  },
  "Firm_Outer_Mesocarp": {
    "parent": "Outer_Mesocarp",
    "children": []
  },
  "Structural_Outer_Mesocarp": {
    "parent": "Outer_Mesocarp",
    "children": []
  },
  "Inner_Mesocarp": {
    "parent": "Mesocarp",
    "children": ["Soft_Inner_Mesocarp", "Juicy_Inner_Mesocarp"]
  },
  "Soft_Inner_Mesocarp": {
    "parent": "Inner_Mesocarp",
    "children": []
  },
  "Juicy_Inner_Mesocarp": {
    "parent": "Inner_Mesocarp",
    "children": []
  },
  "Pulp_Tissue": {
    "parent": "Mesocarp",
    "children": ["Soft_Pulp_Tissue", "Liquid_Pulp_Tissue", "Storage_Pulp_Tissue"]
  },
  "Soft_Pulp_Tissue": {
    "parent": "Pulp_Tissue",
    "children": []
  },
  "Liquid_Pulp_Tissue": {
    "parent": "Pulp_Tissue",
    "children": []
  },
  "Storage_Pulp_Tissue": {
    "parent": "Pulp_Tissue",
    "children": []
  },
  "Vascular_Bundle_Mesocarp": {
    "parent": "Mesocarp",
    "children": ["Primary_Vascular_Bundle_Mesocarp", "Secondary_Vascular_Bundle_Mesocarp"]
  },
  "Primary_Vascular_Bundle_Mesocarp": {
    "parent": "Vascular_Bundle_Mesocarp",
    "children": []
  },
  "Secondary_Vascular_Bundle_Mesocarp": {
    "parent": "Vascular_Bundle_Mesocarp",
    "children": []
  },
  "Endocarp": {
    "parent": "Berry",
    "children": ["Seed_Coat_Adjacent_Tissue", "Locular_Tissue"]
  },
  "Seed_Coat_Adjacent_Tissue": {
    "parent": "Endocarp",
    "children": ["Immediate_Seed_Adjacent_Tissue", "Proximal_Seed_Adjacent_Tissue"]
  },
  "Immediate_Seed_Adjacent_Tissue": {
    "parent": "Seed_Coat_Adjacent_Tissue",
    "children": []
  },
  "Proximal_Seed_Adjacent_Tissue": {
    "parent": "Seed_Coat_Adjacent_Tissue",
    "children": []
  },
  "Locular_Tissue": {
    "parent": "Endocarp",
    "children": ["Cavity_Locular_Tissue", "Chamber_Locular_Tissue"]
  },
  "Cavity_Locular_Tissue": {
    "parent": "Locular_Tissue",
    "children": []
  },
  "Chamber_Locular_Tissue": {
    "parent": "Locular_Tissue",
    "children": []
  },
  "Seed": {
    "parent": "Berry",
    "children": ["Mature_Seed", "Immature_Seed", "Aborted_Seed", "Embryo", "Endosperm", "Seed_Coat"]
  },
  "Mature_Seed": {
    "parent": "Seed",
    "children": ["Fully_Developed_Mature_Seed", "Viable_Mature_Seed"]
  },
  "Fully_Developed_Mature_Seed": {
    "parent": "Mature_Seed",
    "children": []
  },
  "Viable_Mature_Seed": {
    "parent": "Mature_Seed",
    "children": []
  },
  "Immature_Seed": {
    "parent": "Seed",
    "children": ["Developing_Immature_Seed", "Incomplete_Immature_Seed"]
  },
  "Developing_Immature_Seed": {
    "parent": "Immature_Seed",
    "children": []
  },
  "Incomplete_Immature_Seed": {
    "parent": "Immature_Seed",
    "children": []
  },
  "Aborted_Seed": {
    "parent": "Seed",
    "children": ["Early_Aborted_Seed", "Late_Aborted_Seed"]
  },
  "Early_Aborted_Seed": {
    "parent": "Aborted_Seed",
    "children": []
  },
  "Late_Aborted_Seed": {
    "parent": "Aborted_Seed",
    "children": []
  },
  "Embryo": {
    "parent": "Seed",
    "children": ["Developed_Embryo", "Dormant_Embryo"]
  },
  "Developed_Embryo": {
    "parent": "Embryo",
    "children": []
  },
  "Dormant_Embryo": {
    "parent": "Embryo",
    "children": []
  },
  "Endosperm": {
    "parent": "Seed",
    "children": ["Nutritive_Endosperm", "Storage_Endosperm"]
  },
  "Nutritive_Endosperm": {
    "parent": "Endosperm",
    "children": []
  },
  "Storage_Endosperm": {
    "parent": "Endosperm",
    "children": []
  },
  "Seed_Coat": {
    "parent": "Seed",
    "children": ["Hard_Seed_Coat", "Protective_Seed_Coat"]
  },
  "Hard_Seed_Coat": {
    "parent": "Seed_Coat",
    "children": []
  },
  "Protective_Seed_Coat": {
    "parent": "Seed_Coat",
    "children": []
  },
  "Pedicel": {
    "parent": "Berry",
    "children": ["Berry_Pedicel", "Pedicel_Abscission_Zone", "Vascular_Connection_Zone"]
  },
  "Berry_Pedicel": {
    "parent": "Pedicel",
    "children": ["Attached_Berry_Pedicel", "Mature_Berry_Pedicel"]
  },
  "Attached_Berry_Pedicel": {
    "parent": "Berry_Pedicel",
    "children": []
  },
  "Mature_Berry_Pedicel": {
    "parent": "Berry_Pedicel",
    "children": []
  },
  "Pedicel_Abscission_Zone": {
    "parent": "Pedicel",
    "children": ["Active_Abscission_Zone", "Separating_Abscission_Zone"]
  },
  "Active_Abscission_Zone": {
    "parent": "Pedicel_Abscission_Zone",
    "children": []
  },
  "Separating_Abscission_Zone": {
    "parent": "Pedicel_Abscission_Zone",
    "children": []
  },
  "Vascular_Connection_Zone": {
    "parent": "Pedicel",
    "children": ["Primary_Vascular_Connection_Zone", "Conducting_Vascular_Connection_Zone"]
  },
  "Primary_Vascular_Connection_Zone": {
    "parent": "Vascular_Connection_Zone",
    "children": []
  },
  "Conducting_Vascular_Connection_Zone": {
    "parent": "Vascular_Connection_Zone",
    "children": []
  },
  "Brush": {
    "parent": "Berry",
    "children": ["Brush_Attachment_Zone", "Vascular_Bundle_Termination"]
  },
  "Brush_Attachment_Zone": {
    "parent": "Brush",
    "children": ["Pedicel_Brush_Attachment", "Seed_Brush_Attachment"]
  },
  "Pedicel_Brush_Attachment": {
    "parent": "Brush_Attachment_Zone",
    "children": []
  },
  "Seed_Brush_Attachment": {
    "parent": "Brush_Attachment_Zone",
    "children": []
  },
  "Vascular_Bundle_Termination": {
    "parent": "Brush",
    "children": ["Terminal_Vascular_Bundle", "End_Point_Vascular_Bundle"]
  },
  "Terminal_Vascular_Bundle": {
    "parent": "Vascular_Bundle_Termination",
    "children": []
  },
  "End_Point_Vascular_Bundle": {
    "parent": "Vascular_Bundle_Termination",
    "children": []
  },
  "Scion_Trunk": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Own_Rooted_Trunk", "Grafted_Scion_Trunk", "Trunk_Wood", "Trunk_Cambium", "Trunk_Bark", "Graft_Union"]
  },
  "Own_Rooted_Trunk": {
    "parent": "Scion_Trunk",
    "children": ["Young_Own_Rooted_Trunk", "Mature_Own_Rooted_Trunk", "Old_Own_Rooted_Trunk"]
  },
  "Young_Own_Rooted_Trunk": {
    "parent": "Own_Rooted_Trunk",
    "children": ["First_Year_Own_Rooted_Trunk", "Second_Year_Own_Rooted_Trunk", "Establishing_Young_Own_Rooted_Trunk"]
  },
  "First_Year_Own_Rooted_Trunk": {
    "parent": "Young_Own_Rooted_Trunk",
    "children": []
  },
  "Second_Year_Own_Rooted_Trunk": {
    "parent": "Young_Own_Rooted_Trunk",
    "children": []
  },
  "Establishing_Young_Own_Rooted_Trunk": {
    "parent": "Young_Own_Rooted_Trunk",
    "children": []
  },
  "Mature_Own_Rooted_Trunk": {
    "parent": "Own_Rooted_Trunk",
    "children": ["Fully_Developed_Mature_Own_Rooted_Trunk", "Productive_Mature_Own_Rooted_Trunk"]
  },
  "Fully_Developed_Mature_Own_Rooted_Trunk": {
    "parent": "Mature_Own_Rooted_Trunk",
    "children": []
  },
  "Productive_Mature_Own_Rooted_Trunk": {
    "parent": "Mature_Own_Rooted_Trunk",
    "children": []
  },
  "Old_Own_Rooted_Trunk": {
    "parent": "Own_Rooted_Trunk",
    "children": ["Ancient_Old_Own_Rooted_Trunk", "Multi_Decade_Old_Own_Rooted_Trunk"]
  },
  "Ancient_Old_Own_Rooted_Trunk": {
    "parent": "Old_Own_Rooted_Trunk",
    "children": []
  },
  "Multi_Decade_Old_Own_Rooted_Trunk": {
    "parent": "Old_Own_Rooted_Trunk",
    "children": []
  },
  "Grafted_Scion_Trunk": {
    "parent": "Scion_Trunk",
    "children": ["Young_Grafted_Scion_Trunk", "Mature_Grafted_Scion_Trunk", "Old_Grafted_Scion_Trunk"]
  },
  "Young_Grafted_Scion_Trunk": {
    "parent": "Grafted_Scion_Trunk",
    "children": ["First_Year_Grafted_Scion_Trunk", "Second_Year_Grafted_Scion_Trunk", "Establishing_Grafted_Scion_Trunk"]
  },
  "First_Year_Grafted_Scion_Trunk": {
    "parent": "Young_Grafted_Scion_Trunk",
    "children": []
  },
  "Second_Year_Grafted_Scion_Trunk": {
    "parent": "Young_Grafted_Scion_Trunk",
    "children": []
  },
  "Establishing_Grafted_Scion_Trunk": {
    "parent": "Young_Grafted_Scion_Trunk",
    "children": []
  },
  "Mature_Grafted_Scion_Trunk": {
    "parent": "Grafted_Scion_Trunk",
    "children": ["Well_Established_Mature_Grafted_Scion_Trunk", "Productive_Mature_Grafted_Scion_Trunk"]
  },
  "Well_Established_Mature_Grafted_Scion_Trunk": {
    "parent": "Mature_Grafted_Scion_Trunk",
    "children": []
  },
  "Productive_Mature_Grafted_Scion_Trunk": {
    "parent": "Mature_Grafted_Scion_Trunk",
    "children": []
  },
  "Old_Grafted_Scion_Trunk": {
    "parent": "Grafted_Scion_Trunk",
    "children": ["Veteran_Old_Grafted_Scion_Trunk", "Multi_Decade_Old_Grafted_Scion_Trunk"]
  },
  "Veteran_Old_Grafted_Scion_Trunk": {
    "parent": "Old_Grafted_Scion_Trunk",
    "children": []
  },
  "Multi_Decade_Old_Grafted_Scion_Trunk": {
    "parent": "Old_Grafted_Scion_Trunk",
    "children": []
  },
  "Trunk_Wood": {
    "parent": "Scion_Trunk",
    "children": ["Sapwood", "Heartwood", "Annual_Ring", "Wood_Ray", "Xylem_Vessel"]
  },
  "Sapwood": {
    "parent": "Trunk_Wood",
    "children": ["Active_Sapwood", "Conducting_Sapwood", "Outer_Sapwood"]
  },
  "Active_Sapwood": {
    "parent": "Sapwood",
    "children": []
  },
  "Conducting_Sapwood": {
    "parent": "Sapwood",
    "children": []
  },
  "Outer_Sapwood": {
    "parent": "Sapwood",
    "children": []
  },
  "Heartwood": {
    "parent": "Trunk_Wood",
    "children": ["Inactive_Heartwood", "Central_Heartwood", "Dense_Heartwood"]
  },
  "Inactive_Heartwood": {
    "parent": "Heartwood",
    "children": []
  },
  "Central_Heartwood": {
    "parent": "Heartwood",
    "children": []
  },
  "Dense_Heartwood": {
    "parent": "Heartwood",
    "children": []
  },
  "Annual_Ring": {
    "parent": "Trunk_Wood",
    "children": ["Narrow_Annual_Ring", "Wide_Annual_Ring", "Growth_Year_Annual_Ring"]
  },
  "Narrow_Annual_Ring": {
    "parent": "Annual_Ring",
    "children": []
  },
  "Wide_Annual_Ring": {
    "parent": "Annual_Ring",
    "children": []
  },
  "Growth_Year_Annual_Ring": {
    "parent": "Annual_Ring",
    "children": []
  },
  "Wood_Ray": {
    "parent": "Trunk_Wood",
    "children": ["Primary_Wood_Ray", "Secondary_Wood_Ray", "Radial_Wood_Ray"]
  },
  "Primary_Wood_Ray": {
    "parent": "Wood_Ray",
    "children": []
  },
  "Secondary_Wood_Ray": {
    "parent": "Wood_Ray",
    "children": []
  },
  "Radial_Wood_Ray": {
    "parent": "Wood_Ray",
    "children": []
  },
  "Xylem_Vessel": {
    "parent": "Trunk_Wood",
    "children": ["Early_Wood_Xylem_Vessel", "Late_Wood_Xylem_Vessel", "Large_Diameter_Xylem_Vessel"]
  },
  "Early_Wood_Xylem_Vessel": {
    "parent": "Xylem_Vessel",
    "children": []
  },
  "Late_Wood_Xylem_Vessel": {
    "parent": "Xylem_Vessel",
    "children": []
  },
  "Large_Diameter_Xylem_Vessel": {
    "parent": "Xylem_Vessel",
    "children": []
  },
  "Trunk_Cambium": {
    "parent": "Scion_Trunk",
    "children": ["Vascular_Cambium", "Cork_Cambium"]
  },
  "Vascular_Cambium": {
    "parent": "Trunk_Cambium",
    "children": ["Active_Vascular_Cambium", "Growing_Season_Vascular_Cambium"]
  },
  "Active_Vascular_Cambium": {
    "parent": "Vascular_Cambium",
    "children": []
  },
  "Growing_Season_Vascular_Cambium": {
    "parent": "Vascular_Cambium",
    "children": []
  },
  "Cork_Cambium": {
    "parent": "Trunk_Cambium",
    "children": ["Periderm_Forming_Cork_Cambium", "Outer_Cork_Cambium"]
  },
  "Periderm_Forming_Cork_Cambium": {
    "parent": "Cork_Cambium",
    "children": []
  },
  "Outer_Cork_Cambium": {
    "parent": "Cork_Cambium",
    "children": []
  },
  "Trunk_Bark": {
    "parent": "Scion_Trunk",
    "children": ["Outer_Trunk_Bark", "Inner_Trunk_Bark", "Periderm", "Lenticel"]
  },
  "Outer_Trunk_Bark": {
    "parent": "Trunk_Bark",
    "children": ["Dead_Outer_Trunk_Bark", "Protective_Outer_Trunk_Bark", "Peeling_Outer_Trunk_Bark"]
  },
  "Dead_Outer_Trunk_Bark": {
    "parent": "Outer_Trunk_Bark",
    "children": []
  },
  "Protective_Outer_Trunk_Bark": {
    "parent": "Outer_Trunk_Bark",
    "children": []
  },
  "Peeling_Outer_Trunk_Bark": {
    "parent": "Outer_Trunk_Bark",
    "children": []
  },
  "Inner_Trunk_Bark": {
    "parent": "Trunk_Bark",
    "children": ["Living_Inner_Trunk_Bark", "Phloem_Inner_Trunk_Bark"]
  },
  "Living_Inner_Trunk_Bark": {
    "parent": "Inner_Trunk_Bark",
    "children": []
  },
  "Phloem_Inner_Trunk_Bark": {
    "parent": "Inner_Trunk_Bark",
    "children": []
  },
  "Periderm": {
    "parent": "Trunk_Bark",
    "children": ["Cork_Layer_Periderm", "Protective_Periderm"]
  },
  "Cork_Layer_Periderm": {
    "parent": "Periderm",
    "children": []
  },
  "Protective_Periderm": {
    "parent": "Periderm",
    "children": []
  },
  "Lenticel": {
    "parent": "Trunk_Bark",
    "children": ["Gas_Exchange_Lenticel", "Surface_Lenticel"]
  },
  "Gas_Exchange_Lenticel": {
    "parent": "Lenticel",
    "children": []
  },
  "Surface_Lenticel": {
    "parent": "Lenticel",
    "children": []
  },
  "Graft_Union": {
    "parent": "Scion_Trunk",
    "children": ["Graft_Union_Zone", "Incompatibility_Zone", "Callus_Tissue"]
  },
  "Graft_Union_Zone": {
    "parent": "Graft_Union",
    "children": ["Healed_Graft_Union_Zone", "Callus_Graft_Union_Zone"]
  },
  "Healed_Graft_Union_Zone": {
    "parent": "Graft_Union_Zone",
    "children": []
  },
  "Callus_Graft_Union_Zone": {
    "parent": "Graft_Union_Zone",
    "children": []
  },
  "Incompatibility_Zone": {
    "parent": "Graft_Union",
    "children": ["Delayed_Incompatibility_Zone", "Visible_Incompatibility_Zone"]
  },
  "Delayed_Incompatibility_Zone": {
    "parent": "Incompatibility_Zone",
    "children": []
  },
  "Visible_Incompatibility_Zone": {
    "parent": "Incompatibility_Zone",
    "children": []
  },
  "Callus_Tissue": {
    "parent": "Graft_Union",
    "children": ["Healing_Callus_Tissue", "Bridge_Callus_Tissue"]
  },
  "Healing_Callus_Tissue": {
    "parent": "Callus_Tissue",
    "children": []
  },
  "Bridge_Callus_Tissue": {
    "parent": "Callus_Tissue",
    "children": []
  },
  "Rootstock_Trunk": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Grafted_Rootstock_Trunk", "Rootstock_Wood", "Rootstock_Cambium", "Rootstock_Bark"]
  },
  "Grafted_Rootstock_Trunk": {
    "parent": "Rootstock_Trunk",
    "children": ["Young_Grafted_Rootstock_Trunk", "Mature_Grafted_Rootstock_Trunk", "Old_Grafted_Rootstock_Trunk"]
  },
  "Young_Grafted_Rootstock_Trunk": {
    "parent": "Grafted_Rootstock_Trunk",
    "children": ["First_Year_Grafted_Rootstock_Trunk", "Second_Year_Grafted_Rootstock_Trunk", "Establishing_Grafted_Rootstock_Trunk"]
  },
  "First_Year_Grafted_Rootstock_Trunk": {
    "parent": "Young_Grafted_Rootstock_Trunk",
    "children": []
  },
  "Second_Year_Grafted_Rootstock_Trunk": {
    "parent": "Young_Grafted_Rootstock_Trunk",
    "children": []
  },
  "Establishing_Grafted_Rootstock_Trunk": {
    "parent": "Young_Grafted_Rootstock_Trunk",
    "children": []
  },
  "Mature_Grafted_Rootstock_Trunk": {
    "parent": "Grafted_Rootstock_Trunk",
    "children": ["Well_Established_Mature_Grafted_Rootstock_Trunk", "Fully_Integrated_Mature_Grafted_Rootstock_Trunk"]
  },
  "Well_Established_Mature_Grafted_Rootstock_Trunk": {
    "parent": "Mature_Grafted_Rootstock_Trunk",
    "children": []
  },
  "Fully_Integrated_Mature_Grafted_Rootstock_Trunk": {
    "parent": "Mature_Grafted_Rootstock_Trunk",
    "children": []
  },
  "Old_Grafted_Rootstock_Trunk": {
    "parent": "Grafted_Rootstock_Trunk",
    "children": ["Veteran_Old_Grafted_Rootstock_Trunk", "Multi_Decade_Old_Grafted_Rootstock_Trunk"]
  },
  "Veteran_Old_Grafted_Rootstock_Trunk": {
    "parent": "Old_Grafted_Rootstock_Trunk",
    "children": []
  },
  "Multi_Decade_Old_Grafted_Rootstock_Trunk": {
    "parent": "Old_Grafted_Rootstock_Trunk",
    "children": []
  },
  "Rootstock_Wood": {
    "parent": "Rootstock_Trunk",
    "children": ["Rootstock_Sapwood", "Rootstock_Heartwood", "Rootstock_Annual_Ring", "Rootstock_Xylem"]
  },
  "Rootstock_Sapwood": {
    "parent": "Rootstock_Wood",
    "children": ["Active_Rootstock_Sapwood", "Conducting_Rootstock_Sapwood", "Outer_Rootstock_Sapwood"]
  },
  "Active_Rootstock_Sapwood": {
    "parent": "Rootstock_Sapwood",
    "children": []
  },
  "Conducting_Rootstock_Sapwood": {
    "parent": "Rootstock_Sapwood",
    "children": []
  },
  "Outer_Rootstock_Sapwood": {
    "parent": "Rootstock_Sapwood",
    "children": []
  },
  "Rootstock_Heartwood": {
    "parent": "Rootstock_Wood",
    "children": ["Inactive_Rootstock_Heartwood", "Central_Rootstock_Heartwood", "Dense_Rootstock_Heartwood"]
  },
  "Inactive_Rootstock_Heartwood": {
    "parent": "Rootstock_Heartwood",
    "children": []
  },
  "Central_Rootstock_Heartwood": {
    "parent": "Rootstock_Heartwood",
    "children": []
  },
  "Dense_Rootstock_Heartwood": {
    "parent": "Rootstock_Heartwood",
    "children": []
  },
  "Rootstock_Annual_Ring": {
    "parent": "Rootstock_Wood",
    "children": ["Narrow_Rootstock_Annual_Ring", "Wide_Rootstock_Annual_Ring", "Growth_Year_Rootstock_Annual_Ring"]
  },
  "Narrow_Rootstock_Annual_Ring": {
    "parent": "Rootstock_Annual_Ring",
    "children": []
  },
  "Wide_Rootstock_Annual_Ring": {
    "parent": "Rootstock_Annual_Ring",
    "children": []
  },
  "Growth_Year_Rootstock_Annual_Ring": {
    "parent": "Rootstock_Annual_Ring",
    "children": []
  },
  "Rootstock_Xylem": {
    "parent": "Rootstock_Wood",
    "children": ["Early_Wood_Rootstock_Xylem", "Late_Wood_Rootstock_Xylem", "Large_Diameter_Rootstock_Xylem"]
  },
  "Early_Wood_Rootstock_Xylem": {
    "parent": "Rootstock_Xylem",
    "children": []
  },
  "Late_Wood_Rootstock_Xylem": {
    "parent": "Rootstock_Xylem",
    "children": []
  },
  "Large_Diameter_Rootstock_Xylem": {
    "parent": "Rootstock_Xylem",
    "children": []
  },
  "Rootstock_Cambium": {
    "parent": "Rootstock_Trunk",
    "children": ["Rootstock_Vascular_Cambium", "Rootstock_Cork_Cambium"]
  },
  "Rootstock_Vascular_Cambium": {
    "parent": "Rootstock_Cambium",
    "children": ["Active_Rootstock_Vascular_Cambium", "Growing_Season_Rootstock_Vascular_Cambium"]
  },
  "Active_Rootstock_Vascular_Cambium": {
    "parent": "Rootstock_Vascular_Cambium",
    "children": []
  },
  "Growing_Season_Rootstock_Vascular_Cambium": {
    "parent": "Rootstock_Vascular_Cambium",
    "children": []
  },
  "Rootstock_Cork_Cambium": {
    "parent": "Rootstock_Cambium",
    "children": ["Periderm_Forming_Rootstock_Cork_Cambium", "Outer_Rootstock_Cork_Cambium"]
  },
  "Periderm_Forming_Rootstock_Cork_Cambium": {
    "parent": "Rootstock_Cork_Cambium",
    "children": []
  },
  "Outer_Rootstock_Cork_Cambium": {
    "parent": "Rootstock_Cork_Cambium",
    "children": []
  },
  "Rootstock_Bark": {
    "parent": "Rootstock_Trunk",
    "children": ["Outer_Rootstock_Bark", "Inner_Rootstock_Bark", "Rootstock_Periderm"]
  },
  "Outer_Rootstock_Bark": {
    "parent": "Rootstock_Bark",
    "children": ["Dead_Outer_Rootstock_Bark", "Protective_Outer_Rootstock_Bark", "Peeling_Outer_Rootstock_Bark"]
  },
  "Dead_Outer_Rootstock_Bark": {
    "parent": "Outer_Rootstock_Bark",
    "children": []
  },
  "Protective_Outer_Rootstock_Bark": {
    "parent": "Outer_Rootstock_Bark",
    "children": []
  },
  "Peeling_Outer_Rootstock_Bark": {
    "parent": "Outer_Rootstock_Bark",
    "children": []
  },
  "Inner_Rootstock_Bark": {
    "parent": "Rootstock_Bark",
    "children": ["Living_Inner_Rootstock_Bark", "Phloem_Inner_Rootstock_Bark"]
  },
  "Living_Inner_Rootstock_Bark": {
    "parent": "Inner_Rootstock_Bark",
    "children": []
  },
  "Phloem_Inner_Rootstock_Bark": {
    "parent": "Inner_Rootstock_Bark",
    "children": []
  },
  "Rootstock_Periderm": {
    "parent": "Rootstock_Bark",
    "children": ["Cork_Layer_Rootstock_Periderm", "Protective_Rootstock_Periderm"]
  },
  "Cork_Layer_Rootstock_Periderm": {
    "parent": "Rootstock_Periderm",
    "children": []
  },
  "Protective_Rootstock_Periderm": {
    "parent": "Rootstock_Periderm",
    "children": []
  },
  "Root_System": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Primary_Root", "Secondary_Root", "Tertiary_Root", "Root_Tip", "Root_Hair", "Root_Cap", "Adventitious_Root"]
  },
  "Primary_Root": {
    "parent": "Root_System",
    "children": ["Tap_Root", "Main_Root_Axis"]
  },
  "Tap_Root": {
    "parent": "Primary_Root",
    "children": ["Deep_Tap_Root", "Shallow_Tap_Root", "Central_Tap_Root"]
  },
  "Deep_Tap_Root": {
    "parent": "Tap_Root",
    "children": []
  },
  "Shallow_Tap_Root": {
    "parent": "Tap_Root",
    "children": []
  },
  "Central_Tap_Root": {
    "parent": "Tap_Root",
    "children": []
  },
  "Main_Root_Axis": {
    "parent": "Primary_Root",
    "children": ["Dominant_Main_Root_Axis", "Central_Main_Root_Axis"]
  },
  "Dominant_Main_Root_Axis": {
    "parent": "Main_Root_Axis",
    "children": []
  },
  "Central_Main_Root_Axis": {
    "parent": "Main_Root_Axis",
    "children": []
  },
  "Secondary_Root": {
    "parent": "Root_System",
    "children": ["Lateral_Secondary_Root", "Branch_Secondary_Root", "Woody_Secondary_Root"]
  },
  "Lateral_Secondary_Root": {
    "parent": "Secondary_Root",
    "children": ["First_Order_Lateral_Secondary_Root", "Second_Order_Lateral_Secondary_Root", "Deep_Lateral_Secondary_Root"]
  },
  "First_Order_Lateral_Secondary_Root": {
    "parent": "Lateral_Secondary_Root",
    "children": []
  },
  "Second_Order_Lateral_Secondary_Root": {
    "parent": "Lateral_Secondary_Root",
    "children": []
  },
  "Deep_Lateral_Secondary_Root": {
    "parent": "Lateral_Secondary_Root",
    "children": []
  },
  "Branch_Secondary_Root": {
    "parent": "Secondary_Root",
    "children": ["Major_Branch_Secondary_Root", "Minor_Branch_Secondary_Root"]
  },
  "Major_Branch_Secondary_Root": {
    "parent": "Branch_Secondary_Root",
    "children": []
  },
  "Minor_Branch_Secondary_Root": {
    "parent": "Branch_Secondary_Root",
    "children": []
  },
  "Woody_Secondary_Root": {
    "parent": "Secondary_Root",
    "children": ["Lignified_Woody_Secondary_Root", "Structural_Woody_Secondary_Root"]
  },
  "Lignified_Woody_Secondary_Root": {
    "parent": "Woody_Secondary_Root",
    "children": []
  },
  "Structural_Woody_Secondary_Root": {
    "parent": "Woody_Secondary_Root",
    "children": []
  },
  "Tertiary_Root": {
    "parent": "Root_System",
    "children": ["Lateral_Tertiary_Root", "Fine_Tertiary_Root"]
  },
  "Lateral_Tertiary_Root": {
    "parent": "Tertiary_Root",
    "children": ["Fine_Lateral_Tertiary_Root", "Branching_Lateral_Tertiary_Root"]
  },
  "Fine_Lateral_Tertiary_Root": {
    "parent": "Lateral_Tertiary_Root",
    "children": []
  },
  "Branching_Lateral_Tertiary_Root": {
    "parent": "Lateral_Tertiary_Root",
    "children": []
  },
  "Fine_Tertiary_Root": {
    "parent": "Tertiary_Root",
    "children": ["Hair_Like_Fine_Tertiary_Root", "Absorptive_Fine_Tertiary_Root"]
  },
  "Hair_Like_Fine_Tertiary_Root": {
    "parent": "Fine_Tertiary_Root",
    "children": []
  },
  "Absorptive_Fine_Tertiary_Root": {
    "parent": "Fine_Tertiary_Root",
    "children": []
  },
  "Root_Tip": {
    "parent": "Root_System",
    "children": ["Primary_Root_Tip", "Root_Apical_Meristem", "Elongation_Zone", "Maturation_Zone", "Root_Cap_Transition_Zone"]
  },
  "Primary_Root_Tip": {
    "parent": "Root_Tip",
    "children": ["Active_Primary_Root_Tip", "Growing_Primary_Root_Tip"]
  },
  "Active_Primary_Root_Tip": {
    "parent": "Primary_Root_Tip",
    "children": []
  },
  "Growing_Primary_Root_Tip": {
    "parent": "Primary_Root_Tip",
    "children": []
  },
  "Root_Apical_Meristem": {
    "parent": "Root_Tip",
    "children": ["Active_Root_Apical_Meristem", "Dividing_Root_Apical_Meristem"]
  },
  "Active_Root_Apical_Meristem": {
    "parent": "Root_Apical_Meristem",
    "children": []
  },
  "Dividing_Root_Apical_Meristem": {
    "parent": "Root_Apical_Meristem",
    "children": []
  },
  "Elongation_Zone": {
    "parent": "Root_Tip",
    "children": ["Rapid_Elongation_Zone", "Cell_Expansion_Elongation_Zone"]
  },
  "Rapid_Elongation_Zone": {
    "parent": "Elongation_Zone",
    "children": []
  },
  "Cell_Expansion_Elongation_Zone": {
    "parent": "Elongation_Zone",
    "children": []
  },
  "Maturation_Zone": {
    "parent": "Root_Tip",
    "children": ["Cell_Differentiation_Maturation_Zone", "Functional_Maturation_Zone"]
  },
  "Cell_Differentiation_Maturation_Zone": {
    "parent": "Maturation_Zone",
    "children": []
  },
  "Functional_Maturation_Zone": {
    "parent": "Maturation_Zone",
    "children": []
  },
  "Root_Cap_Transition_Zone": {
    "parent": "Root_Tip",
    "children": ["Meristem_Cap_Transition_Zone", "Boundary_Transition_Zone"]
  },
  "Meristem_Cap_Transition_Zone": {
    "parent": "Root_Cap_Transition_Zone",
    "children": []
  },
  "Boundary_Transition_Zone": {
    "parent": "Root_Cap_Transition_Zone",
    "children": []
  },
  "Root_Hair": {
    "parent": "Root_System",
    "children": ["Active_Root_Hair", "Senescent_Root_Hair", "Root_Hair_Zone"]
  },
  "Active_Root_Hair": {
    "parent": "Root_Hair",
    "children": ["Absorbing_Active_Root_Hair", "Functional_Active_Root_Hair"]
  },
  "Absorbing_Active_Root_Hair": {
    "parent": "Active_Root_Hair",
    "children": []
  },
  "Functional_Active_Root_Hair": {
    "parent": "Active_Root_Hair",
    "children": []
  },
  "Senescent_Root_Hair": {
    "parent": "Root_Hair",
    "children": ["Dying_Senescent_Root_Hair", "Non_Functional_Senescent_Root_Hair"]
  },
  "Dying_Senescent_Root_Hair": {
    "parent": "Senescent_Root_Hair",
    "children": []
  },
  "Non_Functional_Senescent_Root_Hair": {
    "parent": "Senescent_Root_Hair",
    "children": []
  },
  "Root_Hair_Zone": {
    "parent": "Root_Hair",
    "children": ["Dense_Root_Hair_Zone", "Mature_Root_Hair_Zone"]
  },
  "Dense_Root_Hair_Zone": {
    "parent": "Root_Hair_Zone",
    "children": []
  },
  "Mature_Root_Hair_Zone": {
    "parent": "Root_Hair_Zone",
    "children": []
  },
  "Root_Cap": {
    "parent": "Root_System",
    "children": ["Columella_Cells", "Lateral_Root_Cap", "Border_Cells"]
  },
  "Columella_Cells": {
    "parent": "Root_Cap",
    "children": ["Central_Columella_Cells", "Gravity_Sensing_Columella_Cells"]
  },
  "Central_Columella_Cells": {
    "parent": "Columella_Cells",
    "children": []
  },
  "Gravity_Sensing_Columella_Cells": {
    "parent": "Columella_Cells",
    "children": []
  },
  "Lateral_Root_Cap": {
    "parent": "Root_Cap",
    "children": ["Peripheral_Lateral_Root_Cap", "Protective_Lateral_Root_Cap"]
  },
  "Peripheral_Lateral_Root_Cap": {
    "parent": "Lateral_Root_Cap",
    "children": []
  },
  "Protective_Lateral_Root_Cap": {
    "parent": "Lateral_Root_Cap",
    "children": []
  },
  "Border_Cells": {
    "parent": "Root_Cap",
    "children": ["Detaching_Border_Cells", "Sloughing_Border_Cells"]
  },
  "Detaching_Border_Cells": {
    "parent": "Border_Cells",
    "children": []
  },
  "Sloughing_Border_Cells": {
    "parent": "Border_Cells",
    "children": []
  },
  "Adventitious_Root": {
    "parent": "Root_System",
    "children": ["Shoot_Derived_Adventitious_Root", "Callus_Derived_Adventitious_Root", "Cutting_Adventitious_Root"]
  },
  "Shoot_Derived_Adventitious_Root": {
    "parent": "Adventitious_Root",
    "children": ["Stem_Derived_Adventitious_Root", "Node_Derived_Adventitious_Root"]
  },
  "Stem_Derived_Adventitious_Root": {
    "parent": "Shoot_Derived_Adventitious_Root",
    "children": []
  },
  "Node_Derived_Adventitious_Root": {
    "parent": "Shoot_Derived_Adventitious_Root",
    "children": []
  },
  "Callus_Derived_Adventitious_Root": {
    "parent": "Adventitious_Root",
    "children": ["Wound_Callus_Adventitious_Root", "Graft_Callus_Adventitious_Root"]
  },
  "Wound_Callus_Adventitious_Root": {
    "parent": "Callus_Derived_Adventitious_Root",
    "children": []
  },
  "Graft_Callus_Adventitious_Root": {
    "parent": "Callus_Derived_Adventitious_Root",
    "children": []
  },
  "Cutting_Adventitious_Root": {
    "parent": "Adventitious_Root",
    "children": ["Propagation_Cutting_Adventitious_Root", "Rooted_Cutting_Adventitious_Root"]
  },
  "Propagation_Cutting_Adventitious_Root": {
    "parent": "Cutting_Adventitious_Root",
    "children": []
  },
  "Rooted_Cutting_Adventitious_Root": {
    "parent": "Cutting_Adventitious_Root",
    "children": []
  },
  "Shallow_Root": {
    "parent": "Grapevine_Morphological_Structure",
    "children": ["Feeder_Root", "Lateral_Shallow_Root"]
  },
  "Feeder_Root": {
    "parent": "Shallow_Root",
    "children": ["Active_Feeder_Root", "Senescent_Feeder_Root", "Fine_Feeder_Root", "Absorptive_Feeder_Root"]
  },
  "Active_Feeder_Root": {
    "parent": "Feeder_Root",
    "children": ["Absorbing_Active_Feeder_Root", "Functional_Active_Feeder_Root", "Young_Active_Feeder_Root"]
  },
  "Absorbing_Active_Feeder_Root": {
    "parent": "Active_Feeder_Root",
    "children": []
  },
  "Functional_Active_Feeder_Root": {
    "parent": "Active_Feeder_Root",
    "children": []
  },
  "Young_Active_Feeder_Root": {
    "parent": "Active_Feeder_Root",
    "children": []
  },
  "Senescent_Feeder_Root": {
    "parent": "Feeder_Root",
    "children": ["Aging_Senescent_Feeder_Root", "Dying_Senescent_Feeder_Root", "Non_Functional_Senescent_Feeder_Root"]
  },
  "Aging_Senescent_Feeder_Root": {
    "parent": "Senescent_Feeder_Root",
    "children": []
  },
  "Dying_Senescent_Feeder_Root": {
    "parent": "Senescent_Feeder_Root",
    "children": []
  },
  "Non_Functional_Senescent_Feeder_Root": {
    "parent": "Senescent_Feeder_Root",
    "children": []
  },
  "Fine_Feeder_Root": {
    "parent": "Feeder_Root",
    "children": ["Hair_Like_Fine_Feeder_Root", "Delicate_Fine_Feeder_Root", "White_Fine_Feeder_Root"]
  },
  "Hair_Like_Fine_Feeder_Root": {
    "parent": "Fine_Feeder_Root",
    "children": []
  },
  "Delicate_Fine_Feeder_Root": {
    "parent": "Fine_Feeder_Root",
    "children": []
  },
  "White_Fine_Feeder_Root": {
    "parent": "Fine_Feeder_Root",
    "children": []
  },
  "Absorptive_Feeder_Root": {
    "parent": "Feeder_Root",
    "children": ["Nutrient_Absorptive_Feeder_Root", "Water_Absorptive_Feeder_Root", "High_Activity_Absorptive_Feeder_Root"]
  },
  "Nutrient_Absorptive_Feeder_Root": {
    "parent": "Absorptive_Feeder_Root",
    "children": []
  },
  "Water_Absorptive_Feeder_Root": {
    "parent": "Absorptive_Feeder_Root",
    "children": []
  },
  "High_Activity_Absorptive_Feeder_Root": {
    "parent": "Absorptive_Feeder_Root",
    "children": []
  },
  "Lateral_Shallow_Root": {
    "parent": "Shallow_Root",
    "children": ["First_Order_Lateral_Shallow_Root", "Second_Order_Lateral_Shallow_Root", "Surface_Lateral_Root"]
  },
  "First_Order_Lateral_Shallow_Root": {
    "parent": "Lateral_Shallow_Root",
    "children": ["Primary_First_Order_Lateral_Shallow_Root", "Proximal_First_Order_Lateral_Shallow_Root"]
  },
  "Primary_First_Order_Lateral_Shallow_Root": {
    "parent": "First_Order_Lateral_Shallow_Root",
    "children": []
  },
  "Proximal_First_Order_Lateral_Shallow_Root": {
    "parent": "First_Order_Lateral_Shallow_Root",
    "children": []
  },
  "Second_Order_Lateral_Shallow_Root": {
    "parent": "Lateral_Shallow_Root",
    "children": ["Branch_Second_Order_Lateral_Shallow_Root", "Distal_Second_Order_Lateral_Shallow_Root"]
  },
  "Branch_Second_Order_Lateral_Shallow_Root": {
    "parent": "Second_Order_Lateral_Shallow_Root",
    "children": []
  },
  "Distal_Second_Order_Lateral_Shallow_Root": {
    "parent": "Second_Order_Lateral_Shallow_Root",
    "children": []
  },
  "Surface_Lateral_Root": {
    "parent": "Lateral_Shallow_Root",
    "children": ["Near_Surface_Lateral_Root", "Topsoil_Surface_Lateral_Root", "Spreading_Surface_Lateral_Root"]
  },
  "Near_Surface_Lateral_Root": {
    "parent": "Surface_Lateral_Root",
    "children": []
  },
  "Topsoil_Surface_Lateral_Root": {
    "parent": "Surface_Lateral_Root",
    "children": []
  },
  "Spreading_Surface_Lateral_Root": {
    "parent": "Surface_Lateral_Root",
    "children": []
  },

  /* ── Grapevine Phenological Process (BFO_0000015) ── */

  "Grapevine_Phenological_Process": {
    "bfo": "BFO_0000015",
    "label": "process",
    "children": ["Bud_Burst", "Shoot_Growth", "Inflorescence_Development", "Flowering", "Fruit_Set", "Berry_Development", "Veraison", "Ripening", "Leaf_Fall", "Dormancy"]
  },
  "Bud_Burst": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Bud_Swelling", "Bud_Breaking", "Green_Tip_Emergence", "First_Leaf_Unfolding"]
  },
  "Bud_Swelling": {
    "parent": "Bud_Burst",
    "children": ["Early_Bud_Swelling", "Advanced_Bud_Swelling", "Late_Bud_Swelling"]
  },
  "Early_Bud_Swelling": {
    "parent": "Bud_Swelling",
    "children": []
  },
  "Advanced_Bud_Swelling": {
    "parent": "Bud_Swelling",
    "children": []
  },
  "Late_Bud_Swelling": {
    "parent": "Bud_Swelling",
    "children": []
  },
  "Bud_Breaking": {
    "parent": "Bud_Burst",
    "children": ["Initial_Bud_Breaking", "Active_Bud_Breaking", "Complete_Bud_Breaking"]
  },
  "Initial_Bud_Breaking": {
    "parent": "Bud_Breaking",
    "children": []
  },
  "Active_Bud_Breaking": {
    "parent": "Bud_Breaking",
    "children": []
  },
  "Complete_Bud_Breaking": {
    "parent": "Bud_Breaking",
    "children": []
  },
  "Green_Tip_Emergence": {
    "parent": "Bud_Burst",
    "children": ["First_Green_Tip_Visible", "Green_Tip_Extended", "Green_Shoot_Tip_Visible"]
  },
  "First_Green_Tip_Visible": {
    "parent": "Green_Tip_Emergence",
    "children": []
  },
  "Green_Tip_Extended": {
    "parent": "Green_Tip_Emergence",
    "children": []
  },
  "Green_Shoot_Tip_Visible": {
    "parent": "Green_Tip_Emergence",
    "children": []
  },
  "First_Leaf_Unfolding": {
    "parent": "Bud_Burst",
    "children": ["First_Leaf_Separation", "First_Leaf_Expansion", "Multiple_Leaf_Unfolding"]
  },
  "First_Leaf_Separation": {
    "parent": "First_Leaf_Unfolding",
    "children": []
  },
  "First_Leaf_Expansion": {
    "parent": "First_Leaf_Unfolding",
    "children": []
  },
  "Multiple_Leaf_Unfolding": {
    "parent": "First_Leaf_Unfolding",
    "children": []
  },
  "Shoot_Growth": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Shoot_Elongation", "Internode_Development", "Leaf_Emergence", "Tendril_Formation", "Shoot_Lignification"]
  },
  "Shoot_Elongation": {
    "parent": "Shoot_Growth",
    "children": ["Early_Shoot_Elongation", "Rapid_Shoot_Elongation", "Peak_Shoot_Elongation", "Declining_Shoot_Elongation", "Terminal_Shoot_Elongation"]
  },
  "Early_Shoot_Elongation": {
    "parent": "Shoot_Elongation",
    "children": []
  },
  "Rapid_Shoot_Elongation": {
    "parent": "Shoot_Elongation",
    "children": []
  },
  "Peak_Shoot_Elongation": {
    "parent": "Shoot_Elongation",
    "children": []
  },
  "Declining_Shoot_Elongation": {
    "parent": "Shoot_Elongation",
    "children": []
  },
  "Terminal_Shoot_Elongation": {
    "parent": "Shoot_Elongation",
    "children": []
  },
  "Internode_Development": {
    "parent": "Shoot_Growth",
    "children": ["First_Internode_Formation", "Sequential_Internode_Formation", "Internode_Elongation", "Internode_Maturation"]
  },
  "First_Internode_Formation": {
    "parent": "Internode_Development",
    "children": []
  },
  "Sequential_Internode_Formation": {
    "parent": "Internode_Development",
    "children": []
  },
  "Internode_Elongation": {
    "parent": "Internode_Development",
    "children": []
  },
  "Internode_Maturation": {
    "parent": "Internode_Development",
    "children": []
  },
  "Leaf_Emergence": {
    "parent": "Shoot_Growth",
    "children": ["Leaf_Primordium_Initiation", "Sequential_Leaf_Emergence", "Leaf_Primordium_Expansion", "Leaf_Maturation"]
  },
  "Leaf_Primordium_Initiation": {
    "parent": "Leaf_Emergence",
    "children": []
  },
  "Sequential_Leaf_Emergence": {
    "parent": "Leaf_Emergence",
    "children": []
  },
  "Leaf_Primordium_Expansion": {
    "parent": "Leaf_Emergence",
    "children": []
  },
  "Leaf_Maturation": {
    "parent": "Leaf_Emergence",
    "children": []
  },
  "Tendril_Formation": {
    "parent": "Shoot_Growth",
    "children": ["Tendril_Primordium_Initiation", "Tendril_Elongation", "Tendril_Branching", "Tendril_Coiling"]
  },
  "Tendril_Primordium_Initiation": {
    "parent": "Tendril_Formation",
    "children": []
  },
  "Tendril_Elongation": {
    "parent": "Tendril_Formation",
    "children": []
  },
  "Tendril_Branching": {
    "parent": "Tendril_Formation",
    "children": []
  },
  "Tendril_Coiling": {
    "parent": "Tendril_Formation",
    "children": []
  },
  "Shoot_Lignification": {
    "parent": "Shoot_Growth",
    "children": ["Basal_Shoot_Lignification", "Progressive_Shoot_Lignification", "Midshoot_Lignification", "Complete_Shoot_Lignification"]
  },
  "Basal_Shoot_Lignification": {
    "parent": "Shoot_Lignification",
    "children": []
  },
  "Progressive_Shoot_Lignification": {
    "parent": "Shoot_Lignification",
    "children": []
  },
  "Midshoot_Lignification": {
    "parent": "Shoot_Lignification",
    "children": []
  },
  "Complete_Shoot_Lignification": {
    "parent": "Shoot_Lignification",
    "children": []
  },
  "Inflorescence_Development": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Inflorescence_Primordium_Formation", "Inflorescence_Emergence", "Flower_Cluster_Separation", "Individual_Flower_Separation"]
  },
  "Inflorescence_Primordium_Formation": {
    "parent": "Inflorescence_Development",
    "children": ["Initial_Inflorescence_Primordium", "Inflorescence_Meristem_Differentiation", "Primary_Branch_Primordium_Formation", "Secondary_Branch_Primordium_Formation"]
  },
  "Initial_Inflorescence_Primordium": {
    "parent": "Inflorescence_Primordium_Formation",
    "children": []
  },
  "Inflorescence_Meristem_Differentiation": {
    "parent": "Inflorescence_Primordium_Formation",
    "children": []
  },
  "Primary_Branch_Primordium_Formation": {
    "parent": "Inflorescence_Primordium_Formation",
    "children": []
  },
  "Secondary_Branch_Primordium_Formation": {
    "parent": "Inflorescence_Primordium_Formation",
    "children": []
  },
  "Inflorescence_Emergence": {
    "parent": "Inflorescence_Development",
    "children": ["Inflorescence_Visibility", "Inflorescence_Elongation", "Inflorescence_Expansion", "Rachis_Development"]
  },
  "Inflorescence_Visibility": {
    "parent": "Inflorescence_Emergence",
    "children": []
  },
  "Inflorescence_Elongation": {
    "parent": "Inflorescence_Emergence",
    "children": []
  },
  "Inflorescence_Expansion": {
    "parent": "Inflorescence_Emergence",
    "children": []
  },
  "Rachis_Development": {
    "parent": "Inflorescence_Emergence",
    "children": []
  },
  "Flower_Cluster_Separation": {
    "parent": "Inflorescence_Development",
    "children": ["Primary_Cluster_Separation", "Secondary_Cluster_Separation", "Cluster_Spacing_Development", "Individual_Cluster_Definition"]
  },
  "Primary_Cluster_Separation": {
    "parent": "Flower_Cluster_Separation",
    "children": []
  },
  "Secondary_Cluster_Separation": {
    "parent": "Flower_Cluster_Separation",
    "children": []
  },
  "Cluster_Spacing_Development": {
    "parent": "Flower_Cluster_Separation",
    "children": []
  },
  "Individual_Cluster_Definition": {
    "parent": "Flower_Cluster_Separation",
    "children": []
  },
  "Individual_Flower_Separation": {
    "parent": "Inflorescence_Development",
    "children": ["Flower_Bud_Separation", "Pedicel_Elongation", "Individual_Flower_Visibility", "Flower_Spacing_Completion"]
  },
  "Flower_Bud_Separation": {
    "parent": "Individual_Flower_Separation",
    "children": []
  },
  "Pedicel_Elongation": {
    "parent": "Individual_Flower_Separation",
    "children": []
  },
  "Individual_Flower_Visibility": {
    "parent": "Individual_Flower_Separation",
    "children": []
  },
  "Flower_Spacing_Completion": {
    "parent": "Individual_Flower_Separation",
    "children": []
  },
  "Flowering": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Anthesis", "Cap_Fall", "Pollen_Release", "Pollination", "Fertilization"]
  },
  "Anthesis": {
    "parent": "Flowering",
    "children": ["Early_Anthesis", "Peak_Anthesis", "Late_Anthesis", "Complete_Anthesis"]
  },
  "Early_Anthesis": {
    "parent": "Anthesis",
    "children": ["First_Flowers_Opening", "Initial_Cap_Shedding", "Stigma_Receptivity_Onset"]
  },
  "First_Flowers_Opening": {
    "parent": "Early_Anthesis",
    "children": []
  },
  "Initial_Cap_Shedding": {
    "parent": "Early_Anthesis",
    "children": []
  },
  "Stigma_Receptivity_Onset": {
    "parent": "Early_Anthesis",
    "children": []
  },
  "Peak_Anthesis": {
    "parent": "Anthesis",
    "children": ["Maximum_Flower_Opening", "Peak_Pollen_Availability", "Optimal_Pollination_Window"]
  },
  "Maximum_Flower_Opening": {
    "parent": "Peak_Anthesis",
    "children": []
  },
  "Peak_Pollen_Availability": {
    "parent": "Peak_Anthesis",
    "children": []
  },
  "Optimal_Pollination_Window": {
    "parent": "Peak_Anthesis",
    "children": []
  },
  "Late_Anthesis": {
    "parent": "Anthesis",
    "children": ["Final_Flowers_Opening", "Declining_Pollen_Viability", "Pollination_Window_Closure"]
  },
  "Final_Flowers_Opening": {
    "parent": "Late_Anthesis",
    "children": []
  },
  "Declining_Pollen_Viability": {
    "parent": "Late_Anthesis",
    "children": []
  },
  "Pollination_Window_Closure": {
    "parent": "Late_Anthesis",
    "children": []
  },
  "Complete_Anthesis": {
    "parent": "Anthesis",
    "children": ["All_Flowers_Opened", "Anthesis_Completion", "Post_Anthesis_Transition"]
  },
  "All_Flowers_Opened": {
    "parent": "Complete_Anthesis",
    "children": []
  },
  "Anthesis_Completion": {
    "parent": "Complete_Anthesis",
    "children": []
  },
  "Post_Anthesis_Transition": {
    "parent": "Complete_Anthesis",
    "children": []
  },
  "Cap_Fall": {
    "parent": "Flowering",
    "children": ["Initial_Cap_Fall", "Mass_Cap_Fall", "Progressive_Cap_Fall", "Final_Cap_Fall"]
  },
  "Initial_Cap_Fall": {
    "parent": "Cap_Fall",
    "children": ["First_Calyptra_Detachment", "Early_Cap_Shedding"]
  },
  "First_Calyptra_Detachment": {
    "parent": "Initial_Cap_Fall",
    "children": []
  },
  "Early_Cap_Shedding": {
    "parent": "Initial_Cap_Fall",
    "children": []
  },
  "Mass_Cap_Fall": {
    "parent": "Cap_Fall",
    "children": ["Peak_Cap_Shedding_Period", "Synchronous_Cap_Fall"]
  },
  "Peak_Cap_Shedding_Period": {
    "parent": "Mass_Cap_Fall",
    "children": []
  },
  "Synchronous_Cap_Fall": {
    "parent": "Mass_Cap_Fall",
    "children": []
  },
  "Progressive_Cap_Fall": {
    "parent": "Cap_Fall",
    "children": ["Sequential_Cap_Detachment", "Extended_Cap_Shedding"]
  },
  "Sequential_Cap_Detachment": {
    "parent": "Progressive_Cap_Fall",
    "children": []
  },
  "Extended_Cap_Shedding": {
    "parent": "Progressive_Cap_Fall",
    "children": []
  },
  "Final_Cap_Fall": {
    "parent": "Cap_Fall",
    "children": ["Last_Caps_Falling", "Cap_Fall_Completion"]
  },
  "Last_Caps_Falling": {
    "parent": "Final_Cap_Fall",
    "children": []
  },
  "Cap_Fall_Completion": {
    "parent": "Final_Cap_Fall",
    "children": []
  },
  "Pollen_Release": {
    "parent": "Flowering",
    "children": ["Anther_Dehiscence", "Active_Pollen_Shedding", "Peak_Pollen_Release", "Completed_Pollen_Release"]
  },
  "Anther_Dehiscence": {
    "parent": "Pollen_Release",
    "children": ["Anther_Wall_Rupture", "Stomium_Opening", "Initial_Pollen_Exposure"]
  },
  "Anther_Wall_Rupture": {
    "parent": "Anther_Dehiscence",
    "children": []
  },
  "Stomium_Opening": {
    "parent": "Anther_Dehiscence",
    "children": []
  },
  "Initial_Pollen_Exposure": {
    "parent": "Anther_Dehiscence",
    "children": []
  },
  "Active_Pollen_Shedding": {
    "parent": "Pollen_Release",
    "children": ["Peak_Pollen_Discharge", "Maximum_Pollen_Dispersal"]
  },
  "Peak_Pollen_Discharge": {
    "parent": "Active_Pollen_Shedding",
    "children": []
  },
  "Maximum_Pollen_Dispersal": {
    "parent": "Active_Pollen_Shedding",
    "children": []
  },
  "Peak_Pollen_Release": {
    "parent": "Pollen_Release",
    "children": ["Optimal_Pollen_Cloud_Formation", "Maximum_Pollen_Availability"]
  },
  "Optimal_Pollen_Cloud_Formation": {
    "parent": "Peak_Pollen_Release",
    "children": []
  },
  "Maximum_Pollen_Availability": {
    "parent": "Peak_Pollen_Release",
    "children": []
  },
  "Completed_Pollen_Release": {
    "parent": "Pollen_Release",
    "children": ["Pollen_Exhaustion", "Empty_Anther_Formation"]
  },
  "Pollen_Exhaustion": {
    "parent": "Completed_Pollen_Release",
    "children": []
  },
  "Empty_Anther_Formation": {
    "parent": "Completed_Pollen_Release",
    "children": []
  },
  "Pollination": {
    "parent": "Flowering",
    "children": ["Pollen_Capture", "Pollen_Adhesion", "Pollen_Germination", "Pollen_Tube_Growth"]
  },
  "Pollen_Capture": {
    "parent": "Pollination",
    "children": ["Pollen_Stigma_Contact", "Pollen_Adhesion_Initiation"]
  },
  "Pollen_Stigma_Contact": {
    "parent": "Pollen_Capture",
    "children": []
  },
  "Pollen_Adhesion_Initiation": {
    "parent": "Pollen_Capture",
    "children": []
  },
  "Pollen_Adhesion": {
    "parent": "Pollination",
    "children": ["Stigmatic_Exudate_Binding", "Pollen_Grain_Attachment"]
  },
  "Stigmatic_Exudate_Binding": {
    "parent": "Pollen_Adhesion",
    "children": []
  },
  "Pollen_Grain_Attachment": {
    "parent": "Pollen_Adhesion",
    "children": []
  },
  "Pollen_Germination": {
    "parent": "Pollination",
    "children": ["Pollen_Hydration", "Germination_Pore_Activation", "Pollen_Tube_Emergence"]
  },
  "Pollen_Hydration": {
    "parent": "Pollen_Germination",
    "children": []
  },
  "Germination_Pore_Activation": {
    "parent": "Pollen_Germination",
    "children": []
  },
  "Pollen_Tube_Emergence": {
    "parent": "Pollen_Germination",
    "children": []
  },
  "Pollen_Tube_Growth": {
    "parent": "Pollination",
    "children": ["Style_Penetration", "Transmitting_Tissue_Navigation", "Ovary_Approach"]
  },
  "Style_Penetration": {
    "parent": "Pollen_Tube_Growth",
    "children": []
  },
  "Transmitting_Tissue_Navigation": {
    "parent": "Pollen_Tube_Growth",
    "children": []
  },
  "Ovary_Approach": {
    "parent": "Pollen_Tube_Growth",
    "children": []
  },
  "Fertilization": {
    "parent": "Flowering",
    "children": ["Pollen_Tube_Penetration", "Ovule_Penetration", "Double_Fertilization", "Zygote_Formation"]
  },
  "Pollen_Tube_Penetration": {
    "parent": "Fertilization",
    "children": ["Micropyle_Targeting", "Synergid_Penetration"]
  },
  "Micropyle_Targeting": {
    "parent": "Pollen_Tube_Penetration",
    "children": []
  },
  "Synergid_Penetration": {
    "parent": "Pollen_Tube_Penetration",
    "children": []
  },
  "Ovule_Penetration": {
    "parent": "Fertilization",
    "children": ["Egg_Cell_Approach", "Pollen_Tube_Discharge"]
  },
  "Egg_Cell_Approach": {
    "parent": "Ovule_Penetration",
    "children": []
  },
  "Pollen_Tube_Discharge": {
    "parent": "Ovule_Penetration",
    "children": []
  },
  "Double_Fertilization": {
    "parent": "Fertilization",
    "children": ["Egg_Fertilization", "Central_Cell_Fertilization"]
  },
  "Egg_Fertilization": {
    "parent": "Double_Fertilization",
    "children": []
  },
  "Central_Cell_Fertilization": {
    "parent": "Double_Fertilization",
    "children": []
  },
  "Zygote_Formation": {
    "parent": "Fertilization",
    "children": ["Zygote_Development_Initiation", "Embryo_Genesis_Start"]
  },
  "Zygote_Development_Initiation": {
    "parent": "Zygote_Formation",
    "children": []
  },
  "Embryo_Genesis_Start": {
    "parent": "Zygote_Formation",
    "children": []
  },
  "Fruit_Set": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Ovule_Fertilization", "Berry_Initiation", "Initial_Berry_Growth", "Fruit_Drop"]
  },
  "Ovule_Fertilization": {
    "parent": "Fruit_Set",
    "children": ["Successful_Ovule_Fertilization", "Failed_Ovule_Fertilization", "Partial_Ovule_Fertilization"]
  },
  "Successful_Ovule_Fertilization": {
    "parent": "Ovule_Fertilization",
    "children": []
  },
  "Failed_Ovule_Fertilization": {
    "parent": "Ovule_Fertilization",
    "children": []
  },
  "Partial_Ovule_Fertilization": {
    "parent": "Ovule_Fertilization",
    "children": []
  },
  "Berry_Initiation": {
    "parent": "Fruit_Set",
    "children": ["Post_Fertilization_Signaling", "Ovary_Expansion_Initiation", "Early_Berry_Formation", "Berry_Commitment"]
  },
  "Post_Fertilization_Signaling": {
    "parent": "Berry_Initiation",
    "children": []
  },
  "Ovary_Expansion_Initiation": {
    "parent": "Berry_Initiation",
    "children": []
  },
  "Early_Berry_Formation": {
    "parent": "Berry_Initiation",
    "children": []
  },
  "Berry_Commitment": {
    "parent": "Berry_Initiation",
    "children": []
  },
  "Initial_Berry_Growth": {
    "parent": "Fruit_Set",
    "children": ["Early_Cell_Division_Growth", "Rapid_Initial_Expansion", "Berry_Size_Establishment"]
  },
  "Early_Cell_Division_Growth": {
    "parent": "Initial_Berry_Growth",
    "children": []
  },
  "Rapid_Initial_Expansion": {
    "parent": "Initial_Berry_Growth",
    "children": []
  },
  "Berry_Size_Establishment": {
    "parent": "Initial_Berry_Growth",
    "children": []
  },
  "Fruit_Drop": {
    "parent": "Fruit_Set",
    "children": ["Early_Fruit_Drop", "Shatter", "Millerandage_Formation", "Post_Set_Berry_Abscission"]
  },
  "Early_Fruit_Drop": {
    "parent": "Fruit_Drop",
    "children": []
  },
  "Shatter": {
    "parent": "Fruit_Drop",
    "children": []
  },
  "Millerandage_Formation": {
    "parent": "Fruit_Drop",
    "children": []
  },
  "Post_Set_Berry_Abscission": {
    "parent": "Fruit_Drop",
    "children": []
  },
  "Berry_Development": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Berry_Cell_Division_Phase", "Berry_Cell_Enlargement_Phase", "Berry_Growth_Lag_Phase", "Seed_Development"]
  },
  "Berry_Cell_Division_Phase": {
    "parent": "Berry_Development",
    "children": ["Active_Berry_Cell_Division", "Peak_Division_Activity", "Declining_Division_Activity", "Division_Phase_Completion"]
  },
  "Active_Berry_Cell_Division": {
    "parent": "Berry_Cell_Division_Phase",
    "children": ["Initial_Division_Activation", "Mitotic_Activity_Onset", "Periclinal_Cell_Division"]
  },
  "Initial_Division_Activation": {
    "parent": "Active_Berry_Cell_Division",
    "children": []
  },
  "Mitotic_Activity_Onset": {
    "parent": "Active_Berry_Cell_Division",
    "children": []
  },
  "Periclinal_Cell_Division": {
    "parent": "Active_Berry_Cell_Division",
    "children": []
  },
  "Peak_Division_Activity": {
    "parent": "Berry_Cell_Division_Phase",
    "children": ["Maximum_Cell_Number_Generation", "Pericarp_Cell_Proliferation", "Seed_Compartment_Cell_Division"]
  },
  "Maximum_Cell_Number_Generation": {
    "parent": "Peak_Division_Activity",
    "children": []
  },
  "Pericarp_Cell_Proliferation": {
    "parent": "Peak_Division_Activity",
    "children": []
  },
  "Seed_Compartment_Cell_Division": {
    "parent": "Peak_Division_Activity",
    "children": []
  },
  "Declining_Division_Activity": {
    "parent": "Berry_Cell_Division_Phase",
    "children": ["Division_Rate_Reduction", "Transition_to_Enlargement_Onset", "Cell_Number_Finalization"]
  },
  "Division_Rate_Reduction": {
    "parent": "Declining_Division_Activity",
    "children": []
  },
  "Transition_to_Enlargement_Onset": {
    "parent": "Declining_Division_Activity",
    "children": []
  },
  "Cell_Number_Finalization": {
    "parent": "Declining_Division_Activity",
    "children": []
  },
  "Division_Phase_Completion": {
    "parent": "Berry_Cell_Division_Phase",
    "children": ["Final_Mitotic_Events", "Cell_Division_Cessation", "Growth_Mode_Transition"]
  },
  "Final_Mitotic_Events": {
    "parent": "Division_Phase_Completion",
    "children": []
  },
  "Cell_Division_Cessation": {
    "parent": "Division_Phase_Completion",
    "children": []
  },
  "Growth_Mode_Transition": {
    "parent": "Division_Phase_Completion",
    "children": []
  },
  "Berry_Cell_Enlargement_Phase": {
    "parent": "Berry_Development",
    "children": ["Initial_Cell_Enlargement", "Rapid_Cell_Expansion", "Maximum_Berry_Enlargement", "Enlargement_Phase_Completion"]
  },
  "Initial_Cell_Enlargement": {
    "parent": "Berry_Cell_Enlargement_Phase",
    "children": ["Turgor_Driven_Expansion_Onset", "Vacuole_Enlargement_Initiation", "Cell_Wall_Loosening"]
  },
  "Turgor_Driven_Expansion_Onset": {
    "parent": "Initial_Cell_Enlargement",
    "children": []
  },
  "Vacuole_Enlargement_Initiation": {
    "parent": "Initial_Cell_Enlargement",
    "children": []
  },
  "Cell_Wall_Loosening": {
    "parent": "Initial_Cell_Enlargement",
    "children": []
  },
  "Rapid_Cell_Expansion": {
    "parent": "Berry_Cell_Enlargement_Phase",
    "children": ["Maximum_Expansion_Rate", "Massive_Vacuole_Formation", "Peak_Berry_Growth_Rate"]
  },
  "Maximum_Expansion_Rate": {
    "parent": "Rapid_Cell_Expansion",
    "children": []
  },
  "Massive_Vacuole_Formation": {
    "parent": "Rapid_Cell_Expansion",
    "children": []
  },
  "Peak_Berry_Growth_Rate": {
    "parent": "Rapid_Cell_Expansion",
    "children": []
  },
  "Maximum_Berry_Enlargement": {
    "parent": "Berry_Cell_Enlargement_Phase",
    "children": ["Cell_Size_Maximum", "Berry_Size_Peak", "Expansion_Rate_Decline"]
  },
  "Cell_Size_Maximum": {
    "parent": "Maximum_Berry_Enlargement",
    "children": []
  },
  "Berry_Size_Peak": {
    "parent": "Maximum_Berry_Enlargement",
    "children": []
  },
  "Expansion_Rate_Decline": {
    "parent": "Maximum_Berry_Enlargement",
    "children": []
  },
  "Enlargement_Phase_Completion": {
    "parent": "Berry_Cell_Enlargement_Phase",
    "children": ["Final_Cell_Expansion", "Pre_Lag_Phase_Transition", "Growth_Deceleration"]
  },
  "Final_Cell_Expansion": {
    "parent": "Enlargement_Phase_Completion",
    "children": []
  },
  "Pre_Lag_Phase_Transition": {
    "parent": "Enlargement_Phase_Completion",
    "children": []
  },
  "Growth_Deceleration": {
    "parent": "Enlargement_Phase_Completion",
    "children": []
  },
  "Berry_Growth_Lag_Phase": {
    "parent": "Berry_Development",
    "children": ["Lag_Phase_Initiation", "Minimal_Growth_Period", "Pre_Veraison_Lag", "Lag_Phase_Termination"]
  },
  "Lag_Phase_Initiation": {
    "parent": "Berry_Growth_Lag_Phase",
    "children": ["Growth_Rate_Decline_Start", "Metabolic_Transition_Onset"]
  },
  "Growth_Rate_Decline_Start": {
    "parent": "Lag_Phase_Initiation",
    "children": []
  },
  "Metabolic_Transition_Onset": {
    "parent": "Lag_Phase_Initiation",
    "children": []
  },
  "Minimal_Growth_Period": {
    "parent": "Berry_Growth_Lag_Phase",
    "children": ["Near_Zero_Growth_Rate", "Seed_Development_Focus", "Pre_Veraison_Metabolism"]
  },
  "Near_Zero_Growth_Rate": {
    "parent": "Minimal_Growth_Period",
    "children": []
  },
  "Seed_Development_Focus": {
    "parent": "Minimal_Growth_Period",
    "children": []
  },
  "Pre_Veraison_Metabolism": {
    "parent": "Minimal_Growth_Period",
    "children": []
  },
  "Pre_Veraison_Lag": {
    "parent": "Berry_Growth_Lag_Phase",
    "children": ["Veraison_Preparation", "Metabolic_Reprogramming"]
  },
  "Veraison_Preparation": {
    "parent": "Pre_Veraison_Lag",
    "children": []
  },
  "Metabolic_Reprogramming": {
    "parent": "Pre_Veraison_Lag",
    "children": []
  },
  "Lag_Phase_Termination": {
    "parent": "Berry_Growth_Lag_Phase",
    "children": ["Veraison_Approach", "Softening_Initiation", "Lag_Phase_Exit"]
  },
  "Veraison_Approach": {
    "parent": "Lag_Phase_Termination",
    "children": []
  },
  "Softening_Initiation": {
    "parent": "Lag_Phase_Termination",
    "children": []
  },
  "Lag_Phase_Exit": {
    "parent": "Lag_Phase_Termination",
    "children": []
  },
  "Seed_Development": {
    "parent": "Berry_Development",
    "children": ["Embryo_Development", "Endosperm_Development", "Seed_Coat_Formation", "Seed_Maturation"]
  },
  "Embryo_Development": {
    "parent": "Seed_Development",
    "children": ["Zygote_Division", "Embryo_Morphogenesis", "Embryo_Maturation"]
  },
  "Zygote_Division": {
    "parent": "Embryo_Development",
    "children": []
  },
  "Embryo_Morphogenesis": {
    "parent": "Embryo_Development",
    "children": []
  },
  "Embryo_Maturation": {
    "parent": "Embryo_Development",
    "children": []
  },
  "Endosperm_Development": {
    "parent": "Seed_Development",
    "children": ["Endosperm_Proliferation", "Nutrient_Accumulation", "Endosperm_Maturation"]
  },
  "Endosperm_Proliferation": {
    "parent": "Endosperm_Development",
    "children": []
  },
  "Nutrient_Accumulation": {
    "parent": "Endosperm_Development",
    "children": []
  },
  "Endosperm_Maturation": {
    "parent": "Endosperm_Development",
    "children": []
  },
  "Seed_Coat_Formation": {
    "parent": "Seed_Development",
    "children": ["Integument_Development", "Testa_Lignification", "Seed_Coat_Hardening"]
  },
  "Integument_Development": {
    "parent": "Seed_Coat_Formation",
    "children": []
  },
  "Testa_Lignification": {
    "parent": "Seed_Coat_Formation",
    "children": []
  },
  "Seed_Coat_Hardening": {
    "parent": "Seed_Coat_Formation",
    "children": []
  },
  "Seed_Maturation": {
    "parent": "Seed_Development",
    "children": ["Embryo_Desiccation_Tolerance", "Seed_Dormancy_Acquisition", "Seed_Ripening_Completion"]
  },
  "Embryo_Desiccation_Tolerance": {
    "parent": "Seed_Maturation",
    "children": []
  },
  "Seed_Dormancy_Acquisition": {
    "parent": "Seed_Maturation",
    "children": []
  },
  "Seed_Ripening_Completion": {
    "parent": "Seed_Maturation",
    "children": []
  },
  "Veraison": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Berry_Softening", "Color_Change_Onset", "Sugar_Accumulation_Onset", "Acid_Decline_Onset"]
  },
  "Berry_Softening": {
    "parent": "Veraison",
    "children": ["Initial_Berry_Softening", "Progressive_Softening", "Peak_Softening", "Complete_Berry_Softening"]
  },
  "Initial_Berry_Softening": {
    "parent": "Berry_Softening",
    "children": ["Cell_Wall_Modification_Onset", "Pectin_Solubilization_Start", "Turgor_Reduction_Initiation"]
  },
  "Cell_Wall_Modification_Onset": {
    "parent": "Initial_Berry_Softening",
    "children": []
  },
  "Pectin_Solubilization_Start": {
    "parent": "Initial_Berry_Softening",
    "children": []
  },
  "Turgor_Reduction_Initiation": {
    "parent": "Initial_Berry_Softening",
    "children": []
  },
  "Progressive_Softening": {
    "parent": "Berry_Softening",
    "children": ["Continued_Cell_Wall_Degradation", "Increasing_Berry_Pliability", "Firmness_Decline"]
  },
  "Continued_Cell_Wall_Degradation": {
    "parent": "Progressive_Softening",
    "children": []
  },
  "Increasing_Berry_Pliability": {
    "parent": "Progressive_Softening",
    "children": []
  },
  "Firmness_Decline": {
    "parent": "Progressive_Softening",
    "children": []
  },
  "Peak_Softening": {
    "parent": "Berry_Softening",
    "children": ["Maximum_Softening_Rate", "Rapid_Firmness_Loss", "Cell_Wall_Breakdown_Maximum"]
  },
  "Maximum_Softening_Rate": {
    "parent": "Peak_Softening",
    "children": []
  },
  "Rapid_Firmness_Loss": {
    "parent": "Peak_Softening",
    "children": []
  },
  "Cell_Wall_Breakdown_Maximum": {
    "parent": "Peak_Softening",
    "children": []
  },
  "Complete_Berry_Softening": {
    "parent": "Berry_Softening",
    "children": ["Final_Softening_State", "Mature_Berry_Texture", "Softening_Process_Completion"]
  },
  "Final_Softening_State": {
    "parent": "Complete_Berry_Softening",
    "children": []
  },
  "Mature_Berry_Texture": {
    "parent": "Complete_Berry_Softening",
    "children": []
  },
  "Softening_Process_Completion": {
    "parent": "Complete_Berry_Softening",
    "children": []
  },
  "Color_Change_Onset": {
    "parent": "Veraison",
    "children": ["First_Color_Change", "Progressive_Color_Development", "Uniform_Color_Development", "Complete_Color_Change"]
  },
  "First_Color_Change": {
    "parent": "Color_Change_Onset",
    "children": ["Initial_Anthocyanin_Synthesis", "First_Pigment_Deposition", "Color_Break_Initiation"]
  },
  "Initial_Anthocyanin_Synthesis": {
    "parent": "First_Color_Change",
    "children": []
  },
  "First_Pigment_Deposition": {
    "parent": "First_Color_Change",
    "children": []
  },
  "Color_Break_Initiation": {
    "parent": "First_Color_Change",
    "children": []
  },
  "Progressive_Color_Development": {
    "parent": "Color_Change_Onset",
    "children": ["Increasing_Anthocyanin_Accumulation", "Color_Intensity_Increase", "Uniform_Pigmentation_Progress"]
  },
  "Increasing_Anthocyanin_Accumulation": {
    "parent": "Progressive_Color_Development",
    "children": []
  },
  "Color_Intensity_Increase": {
    "parent": "Progressive_Color_Development",
    "children": []
  },
  "Uniform_Pigmentation_Progress": {
    "parent": "Progressive_Color_Development",
    "children": []
  },
  "Uniform_Color_Development": {
    "parent": "Color_Change_Onset",
    "children": ["Even_Berry_Coloration", "Complete_Skin_Pigmentation", "Color_Distribution_Uniformity"]
  },
  "Even_Berry_Coloration": {
    "parent": "Uniform_Color_Development",
    "children": []
  },
  "Complete_Skin_Pigmentation": {
    "parent": "Uniform_Color_Development",
    "children": []
  },
  "Color_Distribution_Uniformity": {
    "parent": "Uniform_Color_Development",
    "children": []
  },
  "Complete_Color_Change": {
    "parent": "Color_Change_Onset",
    "children": ["Maximum_Color_Intensity", "Final_Color_Expression", "Color_Development_Completion"]
  },
  "Maximum_Color_Intensity": {
    "parent": "Complete_Color_Change",
    "children": []
  },
  "Final_Color_Expression": {
    "parent": "Complete_Color_Change",
    "children": []
  },
  "Color_Development_Completion": {
    "parent": "Complete_Color_Change",
    "children": []
  },
  "Sugar_Accumulation_Onset": {
    "parent": "Veraison",
    "children": ["Initial_Sugar_Increase", "Rapid_Sugar_Accumulation_Start", "Active_Sugar_Loading", "Sugar_Transport_Activation"]
  },
  "Initial_Sugar_Increase": {
    "parent": "Sugar_Accumulation_Onset",
    "children": ["Phloem_Unloading_Activation", "Hexose_Transport_Initiation", "Sugar_Import_Enhancement"]
  },
  "Phloem_Unloading_Activation": {
    "parent": "Initial_Sugar_Increase",
    "children": []
  },
  "Hexose_Transport_Initiation": {
    "parent": "Initial_Sugar_Increase",
    "children": []
  },
  "Sugar_Import_Enhancement": {
    "parent": "Initial_Sugar_Increase",
    "children": []
  },
  "Rapid_Sugar_Accumulation_Start": {
    "parent": "Sugar_Accumulation_Onset",
    "children": ["Sucrose_Cleavage_Activation", "Apoplastic_Unloading_Intensification"]
  },
  "Sucrose_Cleavage_Activation": {
    "parent": "Rapid_Sugar_Accumulation_Start",
    "children": []
  },
  "Apoplastic_Unloading_Intensification": {
    "parent": "Rapid_Sugar_Accumulation_Start",
    "children": []
  },
  "Active_Sugar_Loading": {
    "parent": "Sugar_Accumulation_Onset",
    "children": ["Peak_Sugar_Import_Rate", "Maximum_Phloem_Delivery", "Rapid_Brix_Increase"]
  },
  "Peak_Sugar_Import_Rate": {
    "parent": "Active_Sugar_Loading",
    "children": []
  },
  "Maximum_Phloem_Delivery": {
    "parent": "Active_Sugar_Loading",
    "children": []
  },
  "Rapid_Brix_Increase": {
    "parent": "Active_Sugar_Loading",
    "children": []
  },
  "Sugar_Transport_Activation": {
    "parent": "Sugar_Accumulation_Onset",
    "children": ["Hexose_Transporter_Upregulation", "Sugar_Uptake_Enhancement", "Vacuolar_Sugar_Storage"]
  },
  "Hexose_Transporter_Upregulation": {
    "parent": "Sugar_Transport_Activation",
    "children": []
  },
  "Sugar_Uptake_Enhancement": {
    "parent": "Sugar_Transport_Activation",
    "children": []
  },
  "Vacuolar_Sugar_Storage": {
    "parent": "Sugar_Transport_Activation",
    "children": []
  },
  "Acid_Decline_Onset": {
    "parent": "Veraison",
    "children": ["Initial_Acid_Reduction", "Malic_Acid_Decline_Start", "Active_Acid_Degradation", "Acid_Metabolism_Shift"]
  },
  "Initial_Acid_Reduction": {
    "parent": "Acid_Decline_Onset",
    "children": ["Malic_Acid_Decline_Initiation", "Acid_Metabolism_Activation", "pH_Increase_Start"]
  },
  "Malic_Acid_Decline_Initiation": {
    "parent": "Initial_Acid_Reduction",
    "children": []
  },
  "Acid_Metabolism_Activation": {
    "parent": "Initial_Acid_Reduction",
    "children": []
  },
  "pH_Increase_Start": {
    "parent": "Initial_Acid_Reduction",
    "children": []
  },
  "Malic_Acid_Decline_Start": {
    "parent": "Acid_Decline_Onset",
    "children": ["Malate_Degradation_Onset", "Respiratory_Malate_Consumption", "Active_Malic_Enzyme_Activity"]
  },
  "Malate_Degradation_Onset": {
    "parent": "Malic_Acid_Decline_Start",
    "children": []
  },
  "Respiratory_Malate_Consumption": {
    "parent": "Malic_Acid_Decline_Start",
    "children": []
  },
  "Active_Malic_Enzyme_Activity": {
    "parent": "Malic_Acid_Decline_Start",
    "children": []
  },
  "Active_Acid_Degradation": {
    "parent": "Acid_Decline_Onset",
    "children": ["Peak_Acid_Reduction_Rate", "Maximum_Malate_Breakdown", "Rapid_Acidity_Decline"]
  },
  "Peak_Acid_Reduction_Rate": {
    "parent": "Active_Acid_Degradation",
    "children": []
  },
  "Maximum_Malate_Breakdown": {
    "parent": "Active_Acid_Degradation",
    "children": []
  },
  "Rapid_Acidity_Decline": {
    "parent": "Active_Acid_Degradation",
    "children": []
  },
  "Acid_Metabolism_Shift": {
    "parent": "Acid_Decline_Onset",
    "children": ["Metabolic_Pathway_Transition", "Respiratory_Substrate_Change", "Acid_Balance_Adjustment"]
  },
  "Metabolic_Pathway_Transition": {
    "parent": "Acid_Metabolism_Shift",
    "children": []
  },
  "Respiratory_Substrate_Change": {
    "parent": "Acid_Metabolism_Shift",
    "children": []
  },
  "Acid_Balance_Adjustment": {
    "parent": "Acid_Metabolism_Shift",
    "children": []
  },
  "Ripening": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Sugar_Accumulation", "Acid_Reduction", "Flavor_Development", "Aroma_Development", "Phenolic_Maturation"]
  },
  "Sugar_Accumulation": {
    "parent": "Ripening",
    "children": ["Active_Sugar_Accumulation", "Peak_Sugar_Accumulation", "Final_Sugar_Accumulation", "Sugar_Plateau"]
  },
  "Active_Sugar_Accumulation": {
    "parent": "Sugar_Accumulation",
    "children": ["Continuous_Sugar_Import", "Steady_Brix_Increase", "Progressive_Sweetening"]
  },
  "Continuous_Sugar_Import": {
    "parent": "Active_Sugar_Accumulation",
    "children": []
  },
  "Steady_Brix_Increase": {
    "parent": "Active_Sugar_Accumulation",
    "children": []
  },
  "Progressive_Sweetening": {
    "parent": "Active_Sugar_Accumulation",
    "children": []
  },
  "Peak_Sugar_Accumulation": {
    "parent": "Sugar_Accumulation",
    "children": ["Maximum_Sugar_Loading_Rate", "Rapid_Brix_Elevation", "Optimal_Sugar_Transport"]
  },
  "Maximum_Sugar_Loading_Rate": {
    "parent": "Peak_Sugar_Accumulation",
    "children": []
  },
  "Rapid_Brix_Elevation": {
    "parent": "Peak_Sugar_Accumulation",
    "children": []
  },
  "Optimal_Sugar_Transport": {
    "parent": "Peak_Sugar_Accumulation",
    "children": []
  },
  "Final_Sugar_Accumulation": {
    "parent": "Sugar_Accumulation",
    "children": ["Late_Stage_Sugar_Import", "Approaching_Sugar_Maximum", "Declining_Accumulation_Rate"]
  },
  "Late_Stage_Sugar_Import": {
    "parent": "Final_Sugar_Accumulation",
    "children": []
  },
  "Approaching_Sugar_Maximum": {
    "parent": "Final_Sugar_Accumulation",
    "children": []
  },
  "Declining_Accumulation_Rate": {
    "parent": "Final_Sugar_Accumulation",
    "children": []
  },
  "Sugar_Plateau": {
    "parent": "Sugar_Accumulation",
    "children": ["Sugar_Equilibrium", "Maximum_Sugar_Content", "Brix_Stabilization"]
  },
  "Sugar_Equilibrium": {
    "parent": "Sugar_Plateau",
    "children": []
  },
  "Maximum_Sugar_Content": {
    "parent": "Sugar_Plateau",
    "children": []
  },
  "Brix_Stabilization": {
    "parent": "Sugar_Plateau",
    "children": []
  },
  "Acid_Reduction": {
    "parent": "Ripening",
    "children": ["Active_Acid_Reduction", "Malic_Acid_Degradation", "Tartaric_Acid_Stabilization", "Final_Acid_Balance"]
  },
  "Active_Acid_Reduction": {
    "parent": "Acid_Reduction",
    "children": ["Continuing_Acid_Decline", "Malate_Degradation", "pH_Increase"]
  },
  "Continuing_Acid_Decline": {
    "parent": "Active_Acid_Reduction",
    "children": []
  },
  "Malate_Degradation": {
    "parent": "Active_Acid_Reduction",
    "children": []
  },
  "pH_Increase": {
    "parent": "Active_Acid_Reduction",
    "children": []
  },
  "Malic_Acid_Degradation": {
    "parent": "Acid_Reduction",
    "children": ["Malate_Respiratory_Consumption", "Malic_Enzyme_Activity", "Progressive_Malate_Depletion"]
  },
  "Malate_Respiratory_Consumption": {
    "parent": "Malic_Acid_Degradation",
    "children": []
  },
  "Malic_Enzyme_Activity": {
    "parent": "Malic_Acid_Degradation",
    "children": []
  },
  "Progressive_Malate_Depletion": {
    "parent": "Malic_Acid_Degradation",
    "children": []
  },
  "Tartaric_Acid_Stabilization": {
    "parent": "Acid_Reduction",
    "children": ["Tartrate_Maintenance", "Stable_Tartaric_Acid_Level", "Acid_Balance_Achievement"]
  },
  "Tartrate_Maintenance": {
    "parent": "Tartaric_Acid_Stabilization",
    "children": []
  },
  "Stable_Tartaric_Acid_Level": {
    "parent": "Tartaric_Acid_Stabilization",
    "children": []
  },
  "Acid_Balance_Achievement": {
    "parent": "Tartaric_Acid_Stabilization",
    "children": []
  },
  "Final_Acid_Balance": {
    "parent": "Acid_Reduction",
    "children": ["Mature_Berry_Acidity", "Sugar_Acid_Ratio_Optimization", "Harvest_Acidity_Level"]
  },
  "Mature_Berry_Acidity": {
    "parent": "Final_Acid_Balance",
    "children": []
  },
  "Sugar_Acid_Ratio_Optimization": {
    "parent": "Final_Acid_Balance",
    "children": []
  },
  "Harvest_Acidity_Level": {
    "parent": "Final_Acid_Balance",
    "children": []
  },
  "Flavor_Development": {
    "parent": "Ripening",
    "children": ["Precursor_Formation", "Flavor_Compound_Synthesis", "Flavor_Compound_Accumulation", "Flavor_Profile_Maturation"]
  },
  "Precursor_Formation": {
    "parent": "Flavor_Development",
    "children": ["Flavor_Precursor_Synthesis", "Amino_Acid_Accumulation", "Precursor_Pool_Development"]
  },
  "Flavor_Precursor_Synthesis": {
    "parent": "Precursor_Formation",
    "children": []
  },
  "Amino_Acid_Accumulation": {
    "parent": "Precursor_Formation",
    "children": []
  },
  "Precursor_Pool_Development": {
    "parent": "Precursor_Formation",
    "children": []
  },
  "Flavor_Compound_Synthesis": {
    "parent": "Flavor_Development",
    "children": ["Primary_Flavor_Formation", "Secondary_Metabolite_Production", "Flavor_Pathway_Activation"]
  },
  "Primary_Flavor_Formation": {
    "parent": "Flavor_Compound_Synthesis",
    "children": []
  },
  "Secondary_Metabolite_Production": {
    "parent": "Flavor_Compound_Synthesis",
    "children": []
  },
  "Flavor_Pathway_Activation": {
    "parent": "Flavor_Compound_Synthesis",
    "children": []
  },
  "Flavor_Compound_Accumulation": {
    "parent": "Flavor_Development",
    "children": ["Progressive_Flavor_Build_Up", "Flavor_Intensity_Increase", "Flavor_Complexity_Development"]
  },
  "Progressive_Flavor_Build_Up": {
    "parent": "Flavor_Compound_Accumulation",
    "children": []
  },
  "Flavor_Intensity_Increase": {
    "parent": "Flavor_Compound_Accumulation",
    "children": []
  },
  "Flavor_Complexity_Development": {
    "parent": "Flavor_Compound_Accumulation",
    "children": []
  },
  "Flavor_Profile_Maturation": {
    "parent": "Flavor_Development",
    "children": ["Mature_Flavor_Expression", "Cultivar_Specific_Flavor", "Optimal_Flavor_Development"]
  },
  "Mature_Flavor_Expression": {
    "parent": "Flavor_Profile_Maturation",
    "children": []
  },
  "Cultivar_Specific_Flavor": {
    "parent": "Flavor_Profile_Maturation",
    "children": []
  },
  "Optimal_Flavor_Development": {
    "parent": "Flavor_Profile_Maturation",
    "children": []
  },
  "Aroma_Development": {
    "parent": "Ripening",
    "children": ["Aroma_Precursor_Formation", "Volatile_Compound_Synthesis", "Terpene_Accumulation", "Aroma_Profile_Maturation"]
  },
  "Aroma_Precursor_Formation": {
    "parent": "Aroma_Development",
    "children": ["Glycosidic_Precursor_Synthesis", "Bound_Aroma_Accumulation", "Precursor_Pool_Building"]
  },
  "Glycosidic_Precursor_Synthesis": {
    "parent": "Aroma_Precursor_Formation",
    "children": []
  },
  "Bound_Aroma_Accumulation": {
    "parent": "Aroma_Precursor_Formation",
    "children": []
  },
  "Precursor_Pool_Building": {
    "parent": "Aroma_Precursor_Formation",
    "children": []
  },
  "Volatile_Compound_Synthesis": {
    "parent": "Aroma_Development",
    "children": ["Free_Volatile_Production", "Ester_Formation", "Aldehyde_Synthesis"]
  },
  "Free_Volatile_Production": {
    "parent": "Volatile_Compound_Synthesis",
    "children": []
  },
  "Ester_Formation": {
    "parent": "Volatile_Compound_Synthesis",
    "children": []
  },
  "Aldehyde_Synthesis": {
    "parent": "Volatile_Compound_Synthesis",
    "children": []
  },
  "Terpene_Accumulation": {
    "parent": "Aroma_Development",
    "children": ["Monoterpene_Synthesis", "Sesquiterpene_Production", "Terpene_Pool_Development"]
  },
  "Monoterpene_Synthesis": {
    "parent": "Terpene_Accumulation",
    "children": []
  },
  "Sesquiterpene_Production": {
    "parent": "Terpene_Accumulation",
    "children": []
  },
  "Terpene_Pool_Development": {
    "parent": "Terpene_Accumulation",
    "children": []
  },
  "Aroma_Profile_Maturation": {
    "parent": "Aroma_Development",
    "children": ["Mature_Aroma_Expression", "Cultivar_Typical_Aroma", "Optimal_Aroma_Development"]
  },
  "Mature_Aroma_Expression": {
    "parent": "Aroma_Profile_Maturation",
    "children": []
  },
  "Cultivar_Typical_Aroma": {
    "parent": "Aroma_Profile_Maturation",
    "children": []
  },
  "Optimal_Aroma_Development": {
    "parent": "Aroma_Profile_Maturation",
    "children": []
  },
  "Phenolic_Maturation": {
    "parent": "Ripening",
    "children": ["Anthocyanin_Accumulation", "Tannin_Polymerization", "Skin_Phenolic_Development", "Seed_Phenolic_Maturation"]
  },
  "Anthocyanin_Accumulation": {
    "parent": "Phenolic_Maturation",
    "children": ["Progressive_Anthocyanin_Synthesis", "Color_Intensity_Development", "Anthocyanin_Profile_Evolution"]
  },
  "Progressive_Anthocyanin_Synthesis": {
    "parent": "Anthocyanin_Accumulation",
    "children": []
  },
  "Color_Intensity_Development": {
    "parent": "Anthocyanin_Accumulation",
    "children": []
  },
  "Anthocyanin_Profile_Evolution": {
    "parent": "Anthocyanin_Accumulation",
    "children": []
  },
  "Tannin_Polymerization": {
    "parent": "Phenolic_Maturation",
    "children": ["Tannin_Chain_Elongation", "Condensation_Reactions", "Tannin_Structure_Maturation"]
  },
  "Tannin_Chain_Elongation": {
    "parent": "Tannin_Polymerization",
    "children": []
  },
  "Condensation_Reactions": {
    "parent": "Tannin_Polymerization",
    "children": []
  },
  "Tannin_Structure_Maturation": {
    "parent": "Tannin_Polymerization",
    "children": []
  },
  "Skin_Phenolic_Development": {
    "parent": "Phenolic_Maturation",
    "children": ["Skin_Tannin_Maturation", "Flavonoid_Accumulation", "Skin_Phenolic_Profile"]
  },
  "Skin_Tannin_Maturation": {
    "parent": "Skin_Phenolic_Development",
    "children": []
  },
  "Flavonoid_Accumulation": {
    "parent": "Skin_Phenolic_Development",
    "children": []
  },
  "Skin_Phenolic_Profile": {
    "parent": "Skin_Phenolic_Development",
    "children": []
  },
  "Seed_Phenolic_Maturation": {
    "parent": "Phenolic_Maturation",
    "children": ["Seed_Tannin_Polymerization", "Seed_Browning", "Phenolic_Seed_Maturity"]
  },
  "Seed_Tannin_Polymerization": {
    "parent": "Seed_Phenolic_Maturation",
    "children": []
  },
  "Seed_Browning": {
    "parent": "Seed_Phenolic_Maturation",
    "children": []
  },
  "Phenolic_Seed_Maturity": {
    "parent": "Seed_Phenolic_Maturation",
    "children": []
  },
  "Leaf_Fall": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Leaf_Senescence", "Petiole_Abscission", "Leaf_Detachment"]
  },
  "Leaf_Senescence": {
    "parent": "Leaf_Fall",
    "children": ["Leaf_Senescence_Initiation", "Chlorophyll_Degradation", "Nutrient_Remobilization", "Progressive_Leaf_Senescence"]
  },
  "Leaf_Senescence_Initiation": {
    "parent": "Leaf_Senescence",
    "children": []
  },
  "Chlorophyll_Degradation": {
    "parent": "Leaf_Senescence",
    "children": []
  },
  "Nutrient_Remobilization": {
    "parent": "Leaf_Senescence",
    "children": []
  },
  "Progressive_Leaf_Senescence": {
    "parent": "Leaf_Senescence",
    "children": []
  },
  "Petiole_Abscission": {
    "parent": "Leaf_Fall",
    "children": ["Abscission_Zone_Formation", "Abscission_Zone_Activation", "Cell_Separation_Process", "Petiole_Abscission_Completion"]
  },
  "Abscission_Zone_Formation": {
    "parent": "Petiole_Abscission",
    "children": []
  },
  "Abscission_Zone_Activation": {
    "parent": "Petiole_Abscission",
    "children": []
  },
  "Cell_Separation_Process": {
    "parent": "Petiole_Abscission",
    "children": []
  },
  "Petiole_Abscission_Completion": {
    "parent": "Petiole_Abscission",
    "children": []
  },
  "Leaf_Detachment": {
    "parent": "Leaf_Fall",
    "children": ["Initial_Leaf_Detachment", "Progressive_Leaf_Fall", "Mass_Leaf_Fall", "Complete_Leaf_Detachment"]
  },
  "Initial_Leaf_Detachment": {
    "parent": "Leaf_Detachment",
    "children": []
  },
  "Progressive_Leaf_Fall": {
    "parent": "Leaf_Detachment",
    "children": []
  },
  "Mass_Leaf_Fall": {
    "parent": "Leaf_Detachment",
    "children": []
  },
  "Complete_Leaf_Detachment": {
    "parent": "Leaf_Detachment",
    "children": []
  },
  "Dormancy": {
    "parent": "Grapevine_Phenological_Process",
    "children": ["Dormancy_Induction", "Endodormancy", "Ecodormancy", "Dormancy_Release"]
  },
  "Dormancy_Induction": {
    "parent": "Dormancy",
    "children": ["Photoperiod_Response", "Temperature_Acclimation", "Growth_Cessation", "Dormancy_Establishment"]
  },
  "Photoperiod_Response": {
    "parent": "Dormancy_Induction",
    "children": ["Short_Day_Perception", "Photoperiod_Signal_Transduction", "Growth_Inhibition_Initiation"]
  },
  "Short_Day_Perception": {
    "parent": "Photoperiod_Response",
    "children": []
  },
  "Photoperiod_Signal_Transduction": {
    "parent": "Photoperiod_Response",
    "children": []
  },
  "Growth_Inhibition_Initiation": {
    "parent": "Photoperiod_Response",
    "children": []
  },
  "Temperature_Acclimation": {
    "parent": "Dormancy_Induction",
    "children": ["Cold_Acclimation_Start", "Freeze_Tolerance_Development", "Metabolic_Adjustment"]
  },
  "Cold_Acclimation_Start": {
    "parent": "Temperature_Acclimation",
    "children": []
  },
  "Freeze_Tolerance_Development": {
    "parent": "Temperature_Acclimation",
    "children": []
  },
  "Metabolic_Adjustment": {
    "parent": "Temperature_Acclimation",
    "children": []
  },
  "Growth_Cessation": {
    "parent": "Dormancy_Induction",
    "children": ["Shoot_Growth_Termination", "Cambial_Activity_Decline", "Metabolic_Downregulation"]
  },
  "Shoot_Growth_Termination": {
    "parent": "Growth_Cessation",
    "children": []
  },
  "Cambial_Activity_Decline": {
    "parent": "Growth_Cessation",
    "children": []
  },
  "Metabolic_Downregulation": {
    "parent": "Growth_Cessation",
    "children": []
  },
  "Dormancy_Establishment": {
    "parent": "Dormancy_Induction",
    "children": ["Bud_Scale_Formation", "ABA_Accumulation", "Deep_Dormancy_Entry"]
  },
  "Bud_Scale_Formation": {
    "parent": "Dormancy_Establishment",
    "children": []
  },
  "ABA_Accumulation": {
    "parent": "Dormancy_Establishment",
    "children": []
  },
  "Deep_Dormancy_Entry": {
    "parent": "Dormancy_Establishment",
    "children": []
  },
  "Endodormancy": {
    "parent": "Dormancy",
    "children": ["Deep_Endodormancy", "Chilling_Accumulation", "Dormancy_Maintenance", "Chilling_Requirement_Satisfaction"]
  },
  "Deep_Endodormancy": {
    "parent": "Endodormancy",
    "children": ["Maximum_Dormancy_Depth", "Growth_Inhibition_Maximum", "ABA_Maximum_Level"]
  },
  "Maximum_Dormancy_Depth": {
    "parent": "Deep_Endodormancy",
    "children": []
  },
  "Growth_Inhibition_Maximum": {
    "parent": "Deep_Endodormancy",
    "children": []
  },
  "ABA_Maximum_Level": {
    "parent": "Deep_Endodormancy",
    "children": []
  },
  "Chilling_Accumulation": {
    "parent": "Endodormancy",
    "children": ["Progressive_Chilling_Units", "Dormancy_Depth_Reduction", "Cumulative_Cold_Exposure"]
  },
  "Progressive_Chilling_Units": {
    "parent": "Chilling_Accumulation",
    "children": []
  },
  "Dormancy_Depth_Reduction": {
    "parent": "Chilling_Accumulation",
    "children": []
  },
  "Cumulative_Cold_Exposure": {
    "parent": "Chilling_Accumulation",
    "children": []
  },
  "Dormancy_Maintenance": {
    "parent": "Endodormancy",
    "children": ["Sustained_Growth_Inhibition", "Continued_Metabolic_Suppression", "Endodormancy_Persistence"]
  },
  "Sustained_Growth_Inhibition": {
    "parent": "Dormancy_Maintenance",
    "children": []
  },
  "Continued_Metabolic_Suppression": {
    "parent": "Dormancy_Maintenance",
    "children": []
  },
  "Endodormancy_Persistence": {
    "parent": "Dormancy_Maintenance",
    "children": []
  },
  "Chilling_Requirement_Satisfaction": {
    "parent": "Endodormancy",
    "children": ["Adequate_Chilling_Achievement", "Dormancy_Release_Competence", "Endodormancy_Completion"]
  },
  "Adequate_Chilling_Achievement": {
    "parent": "Chilling_Requirement_Satisfaction",
    "children": []
  },
  "Dormancy_Release_Competence": {
    "parent": "Chilling_Requirement_Satisfaction",
    "children": []
  },
  "Endodormancy_Completion": {
    "parent": "Chilling_Requirement_Satisfaction",
    "children": []
  },
  "Ecodormancy": {
    "parent": "Dormancy",
    "children": ["Ecodormancy_Transition", "Environmental_Constraint", "Conditional_Dormancy", "Quiescence_Maintenance"]
  },
  "Ecodormancy_Transition": {
    "parent": "Ecodormancy",
    "children": ["Endodormancy_to_Ecodormancy_Shift", "Environmental_Control_Onset", "Growth_Competence_Restoration"]
  },
  "Endodormancy_to_Ecodormancy_Shift": {
    "parent": "Ecodormancy_Transition",
    "children": []
  },
  "Environmental_Control_Onset": {
    "parent": "Ecodormancy_Transition",
    "children": []
  },
  "Growth_Competence_Restoration": {
    "parent": "Ecodormancy_Transition",
    "children": []
  },
  "Environmental_Constraint": {
    "parent": "Ecodormancy",
    "children": ["Temperature_Limitation", "Moisture_Limitation", "Conditional_Growth_Suppression"]
  },
  "Temperature_Limitation": {
    "parent": "Environmental_Constraint",
    "children": []
  },
  "Moisture_Limitation": {
    "parent": "Environmental_Constraint",
    "children": []
  },
  "Conditional_Growth_Suppression": {
    "parent": "Environmental_Constraint",
    "children": []
  },
  "Conditional_Dormancy": {
    "parent": "Ecodormancy",
    "children": ["Environment_Dependent_Quiescence", "Reversible_Growth_Suppression", "Weather_Responsive_Dormancy"]
  },
  "Environment_Dependent_Quiescence": {
    "parent": "Conditional_Dormancy",
    "children": []
  },
  "Reversible_Growth_Suppression": {
    "parent": "Conditional_Dormancy",
    "children": []
  },
  "Weather_Responsive_Dormancy": {
    "parent": "Conditional_Dormancy",
    "children": []
  },
  "Quiescence_Maintenance": {
    "parent": "Ecodormancy",
    "children": ["Sustained_Environmental_Inhibition", "Low_Temperature_Constraint", "Pre_Budbreak_Quiescence"]
  },
  "Sustained_Environmental_Inhibition": {
    "parent": "Quiescence_Maintenance",
    "children": []
  },
  "Low_Temperature_Constraint": {
    "parent": "Quiescence_Maintenance",
    "children": []
  },
  "Pre_Budbreak_Quiescence": {
    "parent": "Quiescence_Maintenance",
    "children": []
  },
  "Dormancy_Release": {
    "parent": "Dormancy",
    "children": ["Chilling_Completion", "Bud_Competence_Restoration", "Heat_Accumulation_Response", "Dormancy_Break"]
  },
  "Chilling_Completion": {
    "parent": "Dormancy_Release",
    "children": ["Chilling_Requirement_Met", "Full_Chill_Accumulation", "Competence_Achievement"]
  },
  "Chilling_Requirement_Met": {
    "parent": "Chilling_Completion",
    "children": []
  },
  "Full_Chill_Accumulation": {
    "parent": "Chilling_Completion",
    "children": []
  },
  "Competence_Achievement": {
    "parent": "Chilling_Completion",
    "children": []
  },
  "Bud_Competence_Restoration": {
    "parent": "Dormancy_Release",
    "children": ["Growth_Capacity_Restoration", "Metabolic_Reactivation_Potential", "Budbreak_Readiness"]
  },
  "Growth_Capacity_Restoration": {
    "parent": "Bud_Competence_Restoration",
    "children": []
  },
  "Metabolic_Reactivation_Potential": {
    "parent": "Bud_Competence_Restoration",
    "children": []
  },
  "Budbreak_Readiness": {
    "parent": "Bud_Competence_Restoration",
    "children": []
  },
  "Heat_Accumulation_Response": {
    "parent": "Dormancy_Release",
    "children": ["Growing_Degree_Day_Accumulation", "Temperature_Sum_Response", "Heat_Unit_Requirement"]
  },
  "Growing_Degree_Day_Accumulation": {
    "parent": "Heat_Accumulation_Response",
    "children": []
  },
  "Temperature_Sum_Response": {
    "parent": "Heat_Accumulation_Response",
    "children": []
  },
  "Heat_Unit_Requirement": {
    "parent": "Heat_Accumulation_Response",
    "children": []
  },
  "Dormancy_Break": {
    "parent": "Dormancy_Release",
    "children": ["Active_Growth_Resumption", "Bud_Swelling_Initiation", "Dormancy_Exit_Completion"]
  },
  "Active_Growth_Resumption": {
    "parent": "Dormancy_Break",
    "children": []
  },
  "Bud_Swelling_Initiation": {
    "parent": "Dormancy_Break",
    "children": []
  },
  "Dormancy_Exit_Completion": {
    "parent": "Dormancy_Break",
    "children": []
  },

  /* ── Grapevine Quality (BFO_0000019) ── */

  "Grapevine_Quality": {
    "bfo": "BFO_0000019",
    "label": "quality",
    "children": ["Morphological_Quality", "Chemical_Quality", "Physical_Quality", "Sensory_Quality", "Physiological_Quality", "Phenological_Quality", "Viticultural_Quality", "Stress_Response_Quality"]
  },
  "Morphological_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Size_Quality", "Shape_Quality", "Color_Quality", "Texture_Quality", "Structural_Integrity_Quality"]
  },
  "Size_Quality": {
    "parent": "Morphological_Quality",
    "children": ["Linear_Dimension_Quality", "Area_Quality", "Volume_Quality", "Mass_Quality"]
  },
  "Linear_Dimension_Quality": {
    "parent": "Size_Quality",
    "children": ["Length_Quality", "Width_Quality", "Diameter_Quality", "Thickness_Quality"]
  },
  "Length_Quality": {
    "parent": "Linear_Dimension_Quality",
    "children": []
  },
  "Width_Quality": {
    "parent": "Linear_Dimension_Quality",
    "children": []
  },
  "Diameter_Quality": {
    "parent": "Linear_Dimension_Quality",
    "children": []
  },
  "Thickness_Quality": {
    "parent": "Linear_Dimension_Quality",
    "children": []
  },
  "Area_Quality": {
    "parent": "Size_Quality",
    "children": ["Surface_Area_Quality", "Cross_Sectional_Area_Quality", "Leaf_Area_Quality"]
  },
  "Surface_Area_Quality": {
    "parent": "Area_Quality",
    "children": []
  },
  "Cross_Sectional_Area_Quality": {
    "parent": "Area_Quality",
    "children": []
  },
  "Leaf_Area_Quality": {
    "parent": "Area_Quality",
    "children": []
  },
  "Volume_Quality": {
    "parent": "Size_Quality",
    "children": ["Berry_Volume_Quality", "Cluster_Volume_Quality"]
  },
  "Berry_Volume_Quality": {
    "parent": "Volume_Quality",
    "children": []
  },
  "Cluster_Volume_Quality": {
    "parent": "Volume_Quality",
    "children": []
  },
  "Mass_Quality": {
    "parent": "Size_Quality",
    "children": ["Fresh_Mass_Quality", "Dry_Mass_Quality"]
  },
  "Fresh_Mass_Quality": {
    "parent": "Mass_Quality",
    "children": []
  },
  "Dry_Mass_Quality": {
    "parent": "Mass_Quality",
    "children": []
  },
  "Shape_Quality": {
    "parent": "Morphological_Quality",
    "children": ["Overall_Form_Quality", "Symmetry_Quality", "Apex_Shape_Quality", "Base_Shape_Quality", "Margin_Shape_Quality_(for_leaves)"]
  },
  "Overall_Form_Quality": {
    "parent": "Shape_Quality",
    "children": ["Globose_Quality", "Ellipsoid_Quality", "Ovoid_Quality", "Cylindrical_Quality", "Conical_Quality"]
  },
  "Globose_Quality": {
    "parent": "Overall_Form_Quality",
    "children": []
  },
  "Ellipsoid_Quality": {
    "parent": "Overall_Form_Quality",
    "children": []
  },
  "Ovoid_Quality": {
    "parent": "Overall_Form_Quality",
    "children": []
  },
  "Cylindrical_Quality": {
    "parent": "Overall_Form_Quality",
    "children": []
  },
  "Conical_Quality": {
    "parent": "Overall_Form_Quality",
    "children": []
  },
  "Symmetry_Quality": {
    "parent": "Shape_Quality",
    "children": ["Bilateral_Symmetry_Quality", "Radial_Symmetry_Quality", "Asymmetry_Quality"]
  },
  "Bilateral_Symmetry_Quality": {
    "parent": "Symmetry_Quality",
    "children": []
  },
  "Radial_Symmetry_Quality": {
    "parent": "Symmetry_Quality",
    "children": []
  },
  "Asymmetry_Quality": {
    "parent": "Symmetry_Quality",
    "children": []
  },
  "Apex_Shape_Quality": {
    "parent": "Shape_Quality",
    "children": []
  },
  "Base_Shape_Quality": {
    "parent": "Shape_Quality",
    "children": []
  },
  "Margin_Shape_Quality_(for_leaves)": {
    "parent": "Shape_Quality",
    "children": ["Entire_Margin_Quality", "Serrate_Margin_Quality", "Dentate_Margin_Quality"]
  },
  "Entire_Margin_Quality": {
    "parent": "Margin_Shape_Quality_(for_leaves)",
    "children": []
  },
  "Serrate_Margin_Quality": {
    "parent": "Margin_Shape_Quality_(for_leaves)",
    "children": []
  },
  "Dentate_Margin_Quality": {
    "parent": "Margin_Shape_Quality_(for_leaves)",
    "children": []
  },
  "Color_Quality": {
    "parent": "Morphological_Quality",
    "children": ["Pigmentation_Intensity_Quality", "Hue_Quality", "Color_Distribution_Quality", "Color_Developmental_Stage_Quality"]
  },
  "Pigmentation_Intensity_Quality": {
    "parent": "Color_Quality",
    "children": []
  },
  "Hue_Quality": {
    "parent": "Color_Quality",
    "children": ["Green_Hue_Quality", "Yellow_Hue_Quality", "Red_Hue_Quality", "Blue_Hue_Quality", "Purple_Hue_Quality"]
  },
  "Green_Hue_Quality": {
    "parent": "Hue_Quality",
    "children": []
  },
  "Yellow_Hue_Quality": {
    "parent": "Hue_Quality",
    "children": []
  },
  "Red_Hue_Quality": {
    "parent": "Hue_Quality",
    "children": []
  },
  "Blue_Hue_Quality": {
    "parent": "Hue_Quality",
    "children": []
  },
  "Purple_Hue_Quality": {
    "parent": "Hue_Quality",
    "children": []
  },
  "Color_Distribution_Quality": {
    "parent": "Color_Quality",
    "children": ["Uniform_Coloration_Quality", "Variegated_Coloration_Quality", "Gradient_Coloration_Quality"]
  },
  "Uniform_Coloration_Quality": {
    "parent": "Color_Distribution_Quality",
    "children": []
  },
  "Variegated_Coloration_Quality": {
    "parent": "Color_Distribution_Quality",
    "children": []
  },
  "Gradient_Coloration_Quality": {
    "parent": "Color_Distribution_Quality",
    "children": []
  },
  "Color_Developmental_Stage_Quality": {
    "parent": "Color_Quality",
    "children": ["Véraison_Color_Quality", "Mature_Color_Quality"]
  },
  "Véraison_Color_Quality": {
    "parent": "Color_Developmental_Stage_Quality",
    "children": []
  },
  "Mature_Color_Quality": {
    "parent": "Color_Developmental_Stage_Quality",
    "children": []
  },
  "Texture_Quality": {
    "parent": "Morphological_Quality",
    "children": ["Surface_Texture_Quality", "Internal_Texture_Quality"]
  },
  "Surface_Texture_Quality": {
    "parent": "Texture_Quality",
    "children": ["Smooth_Surface_Quality", "Rough_Surface_Quality", "Pubescent_Surface_Quality", "Glabrous_Surface_Quality", "Waxy_Surface_Quality"]
  },
  "Smooth_Surface_Quality": {
    "parent": "Surface_Texture_Quality",
    "children": []
  },
  "Rough_Surface_Quality": {
    "parent": "Surface_Texture_Quality",
    "children": []
  },
  "Pubescent_Surface_Quality": {
    "parent": "Surface_Texture_Quality",
    "children": []
  },
  "Glabrous_Surface_Quality": {
    "parent": "Surface_Texture_Quality",
    "children": []
  },
  "Waxy_Surface_Quality": {
    "parent": "Surface_Texture_Quality",
    "children": []
  },
  "Internal_Texture_Quality": {
    "parent": "Texture_Quality",
    "children": ["Pulp_Texture_Quality", "Flesh_Consistency_Quality"]
  },
  "Pulp_Texture_Quality": {
    "parent": "Internal_Texture_Quality",
    "children": []
  },
  "Flesh_Consistency_Quality": {
    "parent": "Internal_Texture_Quality",
    "children": []
  },
  "Structural_Integrity_Quality": {
    "parent": "Morphological_Quality",
    "children": ["Intactness_Quality", "Cohesion_Quality", "Attachment_Strength_Quality", "Damage_State_Quality"]
  },
  "Intactness_Quality": {
    "parent": "Structural_Integrity_Quality",
    "children": []
  },
  "Cohesion_Quality": {
    "parent": "Structural_Integrity_Quality",
    "children": []
  },
  "Attachment_Strength_Quality": {
    "parent": "Structural_Integrity_Quality",
    "children": ["Pedicel_Attachment_Quality", "Berry_Detachment_Resistance_Quality"]
  },
  "Pedicel_Attachment_Quality": {
    "parent": "Attachment_Strength_Quality",
    "children": []
  },
  "Berry_Detachment_Resistance_Quality": {
    "parent": "Attachment_Strength_Quality",
    "children": []
  },
  "Damage_State_Quality": {
    "parent": "Structural_Integrity_Quality",
    "children": ["Mechanical_Damage_Quality", "Splitting_Quality", "Shriveling_Quality"]
  },
  "Mechanical_Damage_Quality": {
    "parent": "Damage_State_Quality",
    "children": []
  },
  "Splitting_Quality": {
    "parent": "Damage_State_Quality",
    "children": []
  },
  "Shriveling_Quality": {
    "parent": "Damage_State_Quality",
    "children": []
  },
  "Chemical_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Sugar_Content_Quality", "Acid_Content_Quality", "Phenolic_Content_Quality", "Aromatic_Compound_Quality", "Mineral_Content_Quality", "Nitrogen_Content_Quality", "Water_Content_Quality"]
  },
  "Sugar_Content_Quality": {
    "parent": "Chemical_Quality",
    "children": ["Total_Sugar_Quality", "Reducing_Sugar_Quality", "Non_Reducing_Sugar_Quality", "Sugar_Acid_Ratio_Quality", "Brix_Quality", "Must_Weight_Quality"]
  },
  "Total_Sugar_Quality": {
    "parent": "Sugar_Content_Quality",
    "children": []
  },
  "Reducing_Sugar_Quality": {
    "parent": "Sugar_Content_Quality",
    "children": ["Glucose_Content_Quality", "Fructose_Content_Quality"]
  },
  "Glucose_Content_Quality": {
    "parent": "Reducing_Sugar_Quality",
    "children": []
  },
  "Fructose_Content_Quality": {
    "parent": "Reducing_Sugar_Quality",
    "children": []
  },
  "Non_Reducing_Sugar_Quality": {
    "parent": "Sugar_Content_Quality",
    "children": ["Sucrose_Content_Quality"]
  },
  "Sucrose_Content_Quality": {
    "parent": "Non_Reducing_Sugar_Quality",
    "children": []
  },
  "Sugar_Acid_Ratio_Quality": {
    "parent": "Sugar_Content_Quality",
    "children": []
  },
  "Brix_Quality": {
    "parent": "Sugar_Content_Quality",
    "children": []
  },
  "Must_Weight_Quality": {
    "parent": "Sugar_Content_Quality",
    "children": ["Oechsle_Quality", "KMW_Quality_(Klosterneuburger_Mostwaage)"]
  },
  "Oechsle_Quality": {
    "parent": "Must_Weight_Quality",
    "children": []
  },
  "KMW_Quality_(Klosterneuburger_Mostwaage)": {
    "parent": "Must_Weight_Quality",
    "children": []
  },
  "Acid_Content_Quality": {
    "parent": "Chemical_Quality",
    "children": ["Total_Acidity_Quality", "Organic_Acid_Quality", "Acid_Balance_Quality"]
  },
  "Total_Acidity_Quality": {
    "parent": "Acid_Content_Quality",
    "children": ["Titratable_Acidity_Quality", "pH_Quality"]
  },
  "Titratable_Acidity_Quality": {
    "parent": "Total_Acidity_Quality",
    "children": []
  },
  "pH_Quality": {
    "parent": "Total_Acidity_Quality",
    "children": []
  },
  "Organic_Acid_Quality": {
    "parent": "Acid_Content_Quality",
    "children": ["Tartaric_Acid_Content_Quality", "Malic_Acid_Content_Quality", "Citric_Acid_Content_Quality", "Succinic_Acid_Content_Quality", "Lactic_Acid_Content_Quality"]
  },
  "Tartaric_Acid_Content_Quality": {
    "parent": "Organic_Acid_Quality",
    "children": []
  },
  "Malic_Acid_Content_Quality": {
    "parent": "Organic_Acid_Quality",
    "children": []
  },
  "Citric_Acid_Content_Quality": {
    "parent": "Organic_Acid_Quality",
    "children": []
  },
  "Succinic_Acid_Content_Quality": {
    "parent": "Organic_Acid_Quality",
    "children": []
  },
  "Lactic_Acid_Content_Quality": {
    "parent": "Organic_Acid_Quality",
    "children": []
  },
  "Acid_Balance_Quality": {
    "parent": "Acid_Content_Quality",
    "children": ["Tartaric_Malic_Ratio_Quality"]
  },
  "Tartaric_Malic_Ratio_Quality": {
    "parent": "Acid_Balance_Quality",
    "children": []
  },
  "Phenolic_Content_Quality": {
    "parent": "Chemical_Quality",
    "children": ["Total_Phenolic_Quality", "Flavonoid_Quality", "Non_Flavonoid_Quality", "Tannin_Quality"]
  },
  "Total_Phenolic_Quality": {
    "parent": "Phenolic_Content_Quality",
    "children": []
  },
  "Flavonoid_Quality": {
    "parent": "Phenolic_Content_Quality",
    "children": ["Anthocyanin_Content_Quality", "Flavonol_Content_Quality", "Flavan_3_ol_Content_Quality"]
  },
  "Anthocyanin_Content_Quality": {
    "parent": "Flavonoid_Quality",
    "children": ["Malvidin_Content_Quality", "Cyanidin_Content_Quality", "Peonidin_Content_Quality", "Delphinidin_Content_Quality", "Petunidin_Content_Quality"]
  },
  "Malvidin_Content_Quality": {
    "parent": "Anthocyanin_Content_Quality",
    "children": []
  },
  "Cyanidin_Content_Quality": {
    "parent": "Anthocyanin_Content_Quality",
    "children": []
  },
  "Peonidin_Content_Quality": {
    "parent": "Anthocyanin_Content_Quality",
    "children": []
  },
  "Delphinidin_Content_Quality": {
    "parent": "Anthocyanin_Content_Quality",
    "children": []
  },
  "Petunidin_Content_Quality": {
    "parent": "Anthocyanin_Content_Quality",
    "children": []
  },
  "Flavonol_Content_Quality": {
    "parent": "Flavonoid_Quality",
    "children": ["Quercetin_Content_Quality", "Kaempferol_Content_Quality", "Myricetin_Content_Quality"]
  },
  "Quercetin_Content_Quality": {
    "parent": "Flavonol_Content_Quality",
    "children": []
  },
  "Kaempferol_Content_Quality": {
    "parent": "Flavonol_Content_Quality",
    "children": []
  },
  "Myricetin_Content_Quality": {
    "parent": "Flavonol_Content_Quality",
    "children": []
  },
  "Flavan_3_ol_Content_Quality": {
    "parent": "Flavonoid_Quality",
    "children": ["Catechin_Content_Quality", "Epicatechin_Content_Quality"]
  },
  "Catechin_Content_Quality": {
    "parent": "Flavan_3_ol_Content_Quality",
    "children": []
  },
  "Epicatechin_Content_Quality": {
    "parent": "Flavan_3_ol_Content_Quality",
    "children": []
  },
  "Non_Flavonoid_Quality": {
    "parent": "Phenolic_Content_Quality",
    "children": ["Hydroxycinnamic_Acid_Quality", "Stilbene_Content_Quality"]
  },
  "Hydroxycinnamic_Acid_Quality": {
    "parent": "Non_Flavonoid_Quality",
    "children": ["Caftaric_Acid_Content_Quality", "Coutaric_Acid_Content_Quality"]
  },
  "Caftaric_Acid_Content_Quality": {
    "parent": "Hydroxycinnamic_Acid_Quality",
    "children": []
  },
  "Coutaric_Acid_Content_Quality": {
    "parent": "Hydroxycinnamic_Acid_Quality",
    "children": []
  },
  "Stilbene_Content_Quality": {
    "parent": "Non_Flavonoid_Quality",
    "children": ["Resveratrol_Content_Quality"]
  },
  "Resveratrol_Content_Quality": {
    "parent": "Stilbene_Content_Quality",
    "children": []
  },
  "Tannin_Quality": {
    "parent": "Phenolic_Content_Quality",
    "children": ["Condensed_Tannin_Quality", "Hydrolyzable_Tannin_Quality", "Tannin_Polymerization_Quality", "Tannin_Extractability_Quality"]
  },
  "Condensed_Tannin_Quality": {
    "parent": "Tannin_Quality",
    "children": []
  },
  "Hydrolyzable_Tannin_Quality": {
    "parent": "Tannin_Quality",
    "children": []
  },
  "Tannin_Polymerization_Quality": {
    "parent": "Tannin_Quality",
    "children": []
  },
  "Tannin_Extractability_Quality": {
    "parent": "Tannin_Quality",
    "children": []
  },
  "Aromatic_Compound_Quality": {
    "parent": "Chemical_Quality",
    "children": ["Primary_Aroma_Quality_(varietal)", "Secondary_Aroma_Precursor_Quality", "Aroma_Potential_Quality"]
  },
  "Primary_Aroma_Quality_(varietal)": {
    "parent": "Aromatic_Compound_Quality",
    "children": ["Terpene_Content_Quality", "Methoxypyrazine_Content_Quality", "Thiol_Precursor_Quality", "Norisoprenoid_Content_Quality"]
  },
  "Terpene_Content_Quality": {
    "parent": "Primary_Aroma_Quality_(varietal)",
    "children": ["Linalool_Content_Quality", "Geraniol_Content_Quality", "Nerol_Content_Quality", "Citronellol_Content_Quality", "Alpha_Terpineol_Content_Quality"]
  },
  "Linalool_Content_Quality": {
    "parent": "Terpene_Content_Quality",
    "children": []
  },
  "Geraniol_Content_Quality": {
    "parent": "Terpene_Content_Quality",
    "children": []
  },
  "Nerol_Content_Quality": {
    "parent": "Terpene_Content_Quality",
    "children": []
  },
  "Citronellol_Content_Quality": {
    "parent": "Terpene_Content_Quality",
    "children": []
  },
  "Alpha_Terpineol_Content_Quality": {
    "parent": "Terpene_Content_Quality",
    "children": []
  },
  "Methoxypyrazine_Content_Quality": {
    "parent": "Primary_Aroma_Quality_(varietal)",
    "children": ["IBMP_Content_Quality_(Isobutyl-methoxypyrazine)", "IPMP_Content_Quality_(Isopropyl-methoxypyrazine)"]
  },
  "IBMP_Content_Quality_(Isobutyl-methoxypyrazine)": {
    "parent": "Methoxypyrazine_Content_Quality",
    "children": []
  },
  "IPMP_Content_Quality_(Isopropyl-methoxypyrazine)": {
    "parent": "Methoxypyrazine_Content_Quality",
    "children": []
  },
  "Thiol_Precursor_Quality": {
    "parent": "Primary_Aroma_Quality_(varietal)",
    "children": ["3MH_Precursor_Quality", "4MMP_Precursor_Quality"]
  },
  "3MH_Precursor_Quality": {
    "parent": "Thiol_Precursor_Quality",
    "children": []
  },
  "4MMP_Precursor_Quality": {
    "parent": "Thiol_Precursor_Quality",
    "children": []
  },
  "Norisoprenoid_Content_Quality": {
    "parent": "Primary_Aroma_Quality_(varietal)",
    "children": ["Beta_Damascenone_Precursor_Quality", "TDN_Precursor_Quality"]
  },
  "Beta_Damascenone_Precursor_Quality": {
    "parent": "Norisoprenoid_Content_Quality",
    "children": []
  },
  "TDN_Precursor_Quality": {
    "parent": "Norisoprenoid_Content_Quality",
    "children": []
  },
  "Secondary_Aroma_Precursor_Quality": {
    "parent": "Aromatic_Compound_Quality",
    "children": []
  },
  "Aroma_Potential_Quality": {
    "parent": "Aromatic_Compound_Quality",
    "children": []
  },
  "Mineral_Content_Quality": {
    "parent": "Chemical_Quality",
    "children": ["Macronutrient_Content_Quality", "Micronutrient_Content_Quality", "Mineral_Balance_Quality"]
  },
  "Macronutrient_Content_Quality": {
    "parent": "Mineral_Content_Quality",
    "children": ["Potassium_Content_Quality", "Calcium_Content_Quality", "Magnesium_Content_Quality", "Phosphorus_Content_Quality", "Sulfur_Content_Quality"]
  },
  "Potassium_Content_Quality": {
    "parent": "Macronutrient_Content_Quality",
    "children": []
  },
  "Calcium_Content_Quality": {
    "parent": "Macronutrient_Content_Quality",
    "children": []
  },
  "Magnesium_Content_Quality": {
    "parent": "Macronutrient_Content_Quality",
    "children": []
  },
  "Phosphorus_Content_Quality": {
    "parent": "Macronutrient_Content_Quality",
    "children": []
  },
  "Sulfur_Content_Quality": {
    "parent": "Macronutrient_Content_Quality",
    "children": []
  },
  "Micronutrient_Content_Quality": {
    "parent": "Mineral_Content_Quality",
    "children": ["Iron_Content_Quality", "Zinc_Content_Quality", "Manganese_Content_Quality", "Copper_Content_Quality", "Boron_Content_Quality", "Molybdenum_Content_Quality"]
  },
  "Iron_Content_Quality": {
    "parent": "Micronutrient_Content_Quality",
    "children": []
  },
  "Zinc_Content_Quality": {
    "parent": "Micronutrient_Content_Quality",
    "children": []
  },
  "Manganese_Content_Quality": {
    "parent": "Micronutrient_Content_Quality",
    "children": []
  },
  "Copper_Content_Quality": {
    "parent": "Micronutrient_Content_Quality",
    "children": []
  },
  "Boron_Content_Quality": {
    "parent": "Micronutrient_Content_Quality",
    "children": []
  },
  "Molybdenum_Content_Quality": {
    "parent": "Micronutrient_Content_Quality",
    "children": []
  },
  "Mineral_Balance_Quality": {
    "parent": "Mineral_Content_Quality",
    "children": ["Cation_Exchange_Quality", "K_Ca_Mg_Ratio_Quality"]
  },
  "Cation_Exchange_Quality": {
    "parent": "Mineral_Balance_Quality",
    "children": []
  },
  "K_Ca_Mg_Ratio_Quality": {
    "parent": "Mineral_Balance_Quality",
    "children": []
  },
  "Nitrogen_Content_Quality": {
    "parent": "Chemical_Quality",
    "children": ["Total_Nitrogen_Quality", "Yeast_Assimilable_Nitrogen_Quality_(YAN)", "Amino_Acid_Profile_Quality", "Protein_Content_Quality", "Nitrate_Content_Quality"]
  },
  "Total_Nitrogen_Quality": {
    "parent": "Nitrogen_Content_Quality",
    "children": []
  },
  "Yeast_Assimilable_Nitrogen_Quality_(YAN)": {
    "parent": "Nitrogen_Content_Quality",
    "children": ["Ammonium_Content_Quality", "Primary_Amino_Nitrogen_Quality"]
  },
  "Ammonium_Content_Quality": {
    "parent": "Yeast_Assimilable_Nitrogen_Quality_(YAN)",
    "children": []
  },
  "Primary_Amino_Nitrogen_Quality": {
    "parent": "Yeast_Assimilable_Nitrogen_Quality_(YAN)",
    "children": []
  },
  "Amino_Acid_Profile_Quality": {
    "parent": "Nitrogen_Content_Quality",
    "children": ["Proline_Content_Quality", "Arginine_Content_Quality", "Glutamine_Content_Quality", "GABA_Content_Quality"]
  },
  "Proline_Content_Quality": {
    "parent": "Amino_Acid_Profile_Quality",
    "children": []
  },
  "Arginine_Content_Quality": {
    "parent": "Amino_Acid_Profile_Quality",
    "children": []
  },
  "Glutamine_Content_Quality": {
    "parent": "Amino_Acid_Profile_Quality",
    "children": []
  },
  "GABA_Content_Quality": {
    "parent": "Amino_Acid_Profile_Quality",
    "children": []
  },
  "Protein_Content_Quality": {
    "parent": "Nitrogen_Content_Quality",
    "children": ["Pathogenesis_Related_Protein_Quality"]
  },
  "Pathogenesis_Related_Protein_Quality": {
    "parent": "Protein_Content_Quality",
    "children": []
  },
  "Nitrate_Content_Quality": {
    "parent": "Nitrogen_Content_Quality",
    "children": []
  },
  "Water_Content_Quality": {
    "parent": "Chemical_Quality",
    "children": ["Moisture_Content_Quality", "Water_Activity_Quality", "Relative_Water_Content_Quality", "Juice_Yield_Quality"]
  },
  "Moisture_Content_Quality": {
    "parent": "Water_Content_Quality",
    "children": []
  },
  "Water_Activity_Quality": {
    "parent": "Water_Content_Quality",
    "children": []
  },
  "Relative_Water_Content_Quality": {
    "parent": "Water_Content_Quality",
    "children": []
  },
  "Juice_Yield_Quality": {
    "parent": "Water_Content_Quality",
    "children": []
  },
  "Physical_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Firmness_Quality", "Density_Quality", "Temperature_Quality", "Turgor_Pressure_Quality", "Elasticity_Quality"]
  },
  "Firmness_Quality": {
    "parent": "Physical_Quality",
    "children": ["Tissue_Firmness_Quality", "Compression_Resistance_Quality", "Puncture_Resistance_Quality", "Deformation_Quality", "Softening_Stage_Quality"]
  },
  "Tissue_Firmness_Quality": {
    "parent": "Firmness_Quality",
    "children": ["Berry_Firmness_Quality", "Pulp_Firmness_Quality", "Skin_Firmness_Quality"]
  },
  "Berry_Firmness_Quality": {
    "parent": "Tissue_Firmness_Quality",
    "children": []
  },
  "Pulp_Firmness_Quality": {
    "parent": "Tissue_Firmness_Quality",
    "children": []
  },
  "Skin_Firmness_Quality": {
    "parent": "Tissue_Firmness_Quality",
    "children": []
  },
  "Compression_Resistance_Quality": {
    "parent": "Firmness_Quality",
    "children": []
  },
  "Puncture_Resistance_Quality": {
    "parent": "Firmness_Quality",
    "children": []
  },
  "Deformation_Quality": {
    "parent": "Firmness_Quality",
    "children": ["Elastic_Deformation_Quality", "Plastic_Deformation_Quality"]
  },
  "Elastic_Deformation_Quality": {
    "parent": "Deformation_Quality",
    "children": []
  },
  "Plastic_Deformation_Quality": {
    "parent": "Deformation_Quality",
    "children": []
  },
  "Softening_Stage_Quality": {
    "parent": "Firmness_Quality",
    "children": ["Pre_Veraison_Firmness_Quality", "Post_Veraison_Firmness_Quality", "Harvest_Firmness_Quality", "Overripe_Softening_Quality"]
  },
  "Pre_Veraison_Firmness_Quality": {
    "parent": "Softening_Stage_Quality",
    "children": []
  },
  "Post_Veraison_Firmness_Quality": {
    "parent": "Softening_Stage_Quality",
    "children": []
  },
  "Harvest_Firmness_Quality": {
    "parent": "Softening_Stage_Quality",
    "children": []
  },
  "Overripe_Softening_Quality": {
    "parent": "Softening_Stage_Quality",
    "children": []
  },
  "Density_Quality": {
    "parent": "Physical_Quality",
    "children": ["Tissue_Density_Quality", "Must_Density_Quality", "Bulk_Density_Quality", "Cluster_Packing_Density_Quality", "Specific_Gravity_Quality", "Porosity_Quality"]
  },
  "Tissue_Density_Quality": {
    "parent": "Density_Quality",
    "children": ["Berry_Density_Quality", "Seed_Density_Quality", "Skin_Density_Quality"]
  },
  "Berry_Density_Quality": {
    "parent": "Tissue_Density_Quality",
    "children": []
  },
  "Seed_Density_Quality": {
    "parent": "Tissue_Density_Quality",
    "children": []
  },
  "Skin_Density_Quality": {
    "parent": "Tissue_Density_Quality",
    "children": []
  },
  "Must_Density_Quality": {
    "parent": "Density_Quality",
    "children": []
  },
  "Bulk_Density_Quality": {
    "parent": "Density_Quality",
    "children": []
  },
  "Cluster_Packing_Density_Quality": {
    "parent": "Density_Quality",
    "children": []
  },
  "Specific_Gravity_Quality": {
    "parent": "Density_Quality",
    "children": []
  },
  "Porosity_Quality": {
    "parent": "Density_Quality",
    "children": ["Tissue_Porosity_Quality", "Intercellular_Space_Quality"]
  },
  "Tissue_Porosity_Quality": {
    "parent": "Porosity_Quality",
    "children": []
  },
  "Intercellular_Space_Quality": {
    "parent": "Porosity_Quality",
    "children": []
  },
  "Temperature_Quality": {
    "parent": "Physical_Quality",
    "children": ["Tissue_Temperature_Quality", "Temperature_Differential_Quality", "Thermal_Mass_Quality", "Thermal_Buffering_Capacity_Quality", "Critical_Temperature_Threshold_Quality"]
  },
  "Tissue_Temperature_Quality": {
    "parent": "Temperature_Quality",
    "children": ["Berry_Temperature_Quality", "Leaf_Temperature_Quality", "Canopy_Temperature_Quality"]
  },
  "Berry_Temperature_Quality": {
    "parent": "Tissue_Temperature_Quality",
    "children": []
  },
  "Leaf_Temperature_Quality": {
    "parent": "Tissue_Temperature_Quality",
    "children": []
  },
  "Canopy_Temperature_Quality": {
    "parent": "Tissue_Temperature_Quality",
    "children": []
  },
  "Temperature_Differential_Quality": {
    "parent": "Temperature_Quality",
    "children": ["Canopy_Air_Temperature_Differential_Quality", "Berry_Ambient_Temperature_Differential_Quality"]
  },
  "Canopy_Air_Temperature_Differential_Quality": {
    "parent": "Temperature_Differential_Quality",
    "children": []
  },
  "Berry_Ambient_Temperature_Differential_Quality": {
    "parent": "Temperature_Differential_Quality",
    "children": []
  },
  "Thermal_Mass_Quality": {
    "parent": "Temperature_Quality",
    "children": []
  },
  "Thermal_Buffering_Capacity_Quality": {
    "parent": "Temperature_Quality",
    "children": []
  },
  "Critical_Temperature_Threshold_Quality": {
    "parent": "Temperature_Quality",
    "children": ["Freezing_Point_Quality", "Heat_Damage_Threshold_Quality", "Optimal_Photosynthesis_Temperature_Quality"]
  },
  "Freezing_Point_Quality": {
    "parent": "Critical_Temperature_Threshold_Quality",
    "children": []
  },
  "Heat_Damage_Threshold_Quality": {
    "parent": "Critical_Temperature_Threshold_Quality",
    "children": []
  },
  "Optimal_Photosynthesis_Temperature_Quality": {
    "parent": "Critical_Temperature_Threshold_Quality",
    "children": []
  },
  "Turgor_Pressure_Quality": {
    "parent": "Physical_Quality",
    "children": ["Cell_Turgor_Quality", "Turgor_Loss_Point_Quality", "Osmotic_Potential_Quality", "Water_Potential_Quality", "Pressure_Volume_Relationship_Quality"]
  },
  "Cell_Turgor_Quality": {
    "parent": "Turgor_Pressure_Quality",
    "children": ["Mesocarp_Turgor_Quality", "Guard_Cell_Turgor_Quality", "Epidermal_Turgor_Quality"]
  },
  "Mesocarp_Turgor_Quality": {
    "parent": "Cell_Turgor_Quality",
    "children": []
  },
  "Guard_Cell_Turgor_Quality": {
    "parent": "Cell_Turgor_Quality",
    "children": []
  },
  "Epidermal_Turgor_Quality": {
    "parent": "Cell_Turgor_Quality",
    "children": []
  },
  "Turgor_Loss_Point_Quality": {
    "parent": "Turgor_Pressure_Quality",
    "children": []
  },
  "Osmotic_Potential_Quality": {
    "parent": "Turgor_Pressure_Quality",
    "children": []
  },
  "Water_Potential_Quality": {
    "parent": "Turgor_Pressure_Quality",
    "children": ["Predawn_Water_Potential_Quality", "Midday_Water_Potential_Quality", "Stem_Water_Potential_Quality", "Leaf_Water_Potential_Quality"]
  },
  "Predawn_Water_Potential_Quality": {
    "parent": "Water_Potential_Quality",
    "children": []
  },
  "Midday_Water_Potential_Quality": {
    "parent": "Water_Potential_Quality",
    "children": []
  },
  "Stem_Water_Potential_Quality": {
    "parent": "Water_Potential_Quality",
    "children": []
  },
  "Leaf_Water_Potential_Quality": {
    "parent": "Water_Potential_Quality",
    "children": []
  },
  "Pressure_Volume_Relationship_Quality": {
    "parent": "Turgor_Pressure_Quality",
    "children": []
  },
  "Elasticity_Quality": {
    "parent": "Physical_Quality",
    "children": ["Tissue_Elasticity_Quality", "Elastic_Modulus_Quality", "Viscoelastic_Property_Quality", "Reversible_Deformation_Capacity_Quality", "Brittleness_Quality"]
  },
  "Tissue_Elasticity_Quality": {
    "parent": "Elasticity_Quality",
    "children": ["Skin_Elasticity_Quality", "Cell_Wall_Elasticity_Quality"]
  },
  "Skin_Elasticity_Quality": {
    "parent": "Tissue_Elasticity_Quality",
    "children": []
  },
  "Cell_Wall_Elasticity_Quality": {
    "parent": "Tissue_Elasticity_Quality",
    "children": []
  },
  "Elastic_Modulus_Quality": {
    "parent": "Elasticity_Quality",
    "children": ["Bulk_Elastic_Modulus_Quality", "Youngs_Modulus_Quality"]
  },
  "Bulk_Elastic_Modulus_Quality": {
    "parent": "Elastic_Modulus_Quality",
    "children": []
  },
  "Youngs_Modulus_Quality": {
    "parent": "Elastic_Modulus_Quality",
    "children": []
  },
  "Viscoelastic_Property_Quality": {
    "parent": "Elasticity_Quality",
    "children": ["Creep_Behavior_Quality", "Stress_Relaxation_Quality"]
  },
  "Creep_Behavior_Quality": {
    "parent": "Viscoelastic_Property_Quality",
    "children": []
  },
  "Stress_Relaxation_Quality": {
    "parent": "Viscoelastic_Property_Quality",
    "children": []
  },
  "Reversible_Deformation_Capacity_Quality": {
    "parent": "Elasticity_Quality",
    "children": []
  },
  "Brittleness_Quality": {
    "parent": "Elasticity_Quality",
    "children": ["Rachis_Brittleness_Quality", "Pedicel_Brittleness_Quality"]
  },
  "Rachis_Brittleness_Quality": {
    "parent": "Brittleness_Quality",
    "children": []
  },
  "Pedicel_Brittleness_Quality": {
    "parent": "Brittleness_Quality",
    "children": []
  },
  "Sensory_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Taste_Quality", "Aroma_Quality", "Visual_Appearance_Quality", "Tactile_Quality"]
  },
  "Taste_Quality": {
    "parent": "Sensory_Quality",
    "children": ["Basic_Taste_Quality", "Taste_Balance_Quality", "Taste_Intensity_Quality", "Taste_Persistence_Quality", "Astringency_Quality"]
  },
  "Basic_Taste_Quality": {
    "parent": "Taste_Quality",
    "children": ["Sweetness_Quality", "Sourness_Quality", "Bitterness_Quality", "Umami_Quality"]
  },
  "Sweetness_Quality": {
    "parent": "Basic_Taste_Quality",
    "children": ["Perceived_Sweetness_Intensity_Quality", "Sweetness_Onset_Quality", "Sweetness_Persistence_Quality"]
  },
  "Perceived_Sweetness_Intensity_Quality": {
    "parent": "Sweetness_Quality",
    "children": []
  },
  "Sweetness_Onset_Quality": {
    "parent": "Sweetness_Quality",
    "children": []
  },
  "Sweetness_Persistence_Quality": {
    "parent": "Sweetness_Quality",
    "children": []
  },
  "Sourness_Quality": {
    "parent": "Basic_Taste_Quality",
    "children": ["Perceived_Acidity_Intensity_Quality", "Acidity_Character_Quality_(Sharp_vs_Soft)", "Acidity_Persistence_Quality"]
  },
  "Perceived_Acidity_Intensity_Quality": {
    "parent": "Sourness_Quality",
    "children": []
  },
  "Acidity_Character_Quality_(Sharp_vs_Soft)": {
    "parent": "Sourness_Quality",
    "children": []
  },
  "Acidity_Persistence_Quality": {
    "parent": "Sourness_Quality",
    "children": []
  },
  "Bitterness_Quality": {
    "parent": "Basic_Taste_Quality",
    "children": ["Perceived_Bitterness_Intensity_Quality", "Bitterness_Localization_Quality", "Bitterness_Persistence_Quality"]
  },
  "Perceived_Bitterness_Intensity_Quality": {
    "parent": "Bitterness_Quality",
    "children": []
  },
  "Bitterness_Localization_Quality": {
    "parent": "Bitterness_Quality",
    "children": []
  },
  "Bitterness_Persistence_Quality": {
    "parent": "Bitterness_Quality",
    "children": []
  },
  "Umami_Quality": {
    "parent": "Basic_Taste_Quality",
    "children": []
  },
  "Taste_Balance_Quality": {
    "parent": "Taste_Quality",
    "children": ["Sweet_Sour_Balance_Quality", "Sweet_Bitter_Balance_Quality", "Overall_Taste_Harmony_Quality"]
  },
  "Sweet_Sour_Balance_Quality": {
    "parent": "Taste_Balance_Quality",
    "children": []
  },
  "Sweet_Bitter_Balance_Quality": {
    "parent": "Taste_Balance_Quality",
    "children": []
  },
  "Overall_Taste_Harmony_Quality": {
    "parent": "Taste_Balance_Quality",
    "children": []
  },
  "Taste_Intensity_Quality": {
    "parent": "Taste_Quality",
    "children": ["Taste_Concentration_Quality", "Taste_Dilution_Quality"]
  },
  "Taste_Concentration_Quality": {
    "parent": "Taste_Intensity_Quality",
    "children": []
  },
  "Taste_Dilution_Quality": {
    "parent": "Taste_Intensity_Quality",
    "children": []
  },
  "Taste_Persistence_Quality": {
    "parent": "Taste_Quality",
    "children": ["Finish_Length_Quality", "Aftertaste_Quality"]
  },
  "Finish_Length_Quality": {
    "parent": "Taste_Persistence_Quality",
    "children": []
  },
  "Aftertaste_Quality": {
    "parent": "Taste_Persistence_Quality",
    "children": []
  },
  "Astringency_Quality": {
    "parent": "Taste_Quality",
    "children": ["Astringency_Intensity_Quality", "Astringency_Character_Quality_(Dry_vs_Grippy)", "Astringency_Development_Quality", "Tannin_Mouthfeel_Quality"]
  },
  "Astringency_Intensity_Quality": {
    "parent": "Astringency_Quality",
    "children": []
  },
  "Astringency_Character_Quality_(Dry_vs_Grippy)": {
    "parent": "Astringency_Quality",
    "children": []
  },
  "Astringency_Development_Quality": {
    "parent": "Astringency_Quality",
    "children": []
  },
  "Tannin_Mouthfeel_Quality": {
    "parent": "Astringency_Quality",
    "children": []
  },
  "Aroma_Quality": {
    "parent": "Sensory_Quality",
    "children": ["Aroma_Intensity_Quality", "Aroma_Character_Quality", "Aroma_Complexity_Quality", "Aroma_Typicity_Quality", "Aroma_Evolution_Quality", "Off_Aroma_Quality"]
  },
  "Aroma_Intensity_Quality": {
    "parent": "Aroma_Quality",
    "children": ["Orthonasal_Aroma_Intensity_Quality", "Retronasal_Aroma_Intensity_Quality"]
  },
  "Orthonasal_Aroma_Intensity_Quality": {
    "parent": "Aroma_Intensity_Quality",
    "children": []
  },
  "Retronasal_Aroma_Intensity_Quality": {
    "parent": "Aroma_Intensity_Quality",
    "children": []
  },
  "Aroma_Character_Quality": {
    "parent": "Aroma_Quality",
    "children": ["Fruity_Aroma_Quality", "Floral_Aroma_Quality", "Herbaceous_Aroma_Quality", "Spicy_Aroma_Quality", "Earthy_Aroma_Quality"]
  },
  "Fruity_Aroma_Quality": {
    "parent": "Aroma_Character_Quality",
    "children": ["Citrus_Aroma_Quality", "Tropical_Fruit_Aroma_Quality", "Stone_Fruit_Aroma_Quality", "Pome_Fruit_Aroma_Quality", "Berry_Fruit_Aroma_Quality", "Dried_Fruit_Aroma_Quality"]
  },
  "Citrus_Aroma_Quality": {
    "parent": "Fruity_Aroma_Quality",
    "children": []
  },
  "Tropical_Fruit_Aroma_Quality": {
    "parent": "Fruity_Aroma_Quality",
    "children": []
  },
  "Stone_Fruit_Aroma_Quality": {
    "parent": "Fruity_Aroma_Quality",
    "children": []
  },
  "Pome_Fruit_Aroma_Quality": {
    "parent": "Fruity_Aroma_Quality",
    "children": []
  },
  "Berry_Fruit_Aroma_Quality": {
    "parent": "Fruity_Aroma_Quality",
    "children": []
  },
  "Dried_Fruit_Aroma_Quality": {
    "parent": "Fruity_Aroma_Quality",
    "children": []
  },
  "Floral_Aroma_Quality": {
    "parent": "Aroma_Character_Quality",
    "children": ["White_Flower_Aroma_Quality", "Rose_Aroma_Quality", "Violet_Aroma_Quality"]
  },
  "White_Flower_Aroma_Quality": {
    "parent": "Floral_Aroma_Quality",
    "children": []
  },
  "Rose_Aroma_Quality": {
    "parent": "Floral_Aroma_Quality",
    "children": []
  },
  "Violet_Aroma_Quality": {
    "parent": "Floral_Aroma_Quality",
    "children": []
  },
  "Herbaceous_Aroma_Quality": {
    "parent": "Aroma_Character_Quality",
    "children": ["Green_Pepper_Aroma_Quality", "Grassy_Aroma_Quality", "Herbal_Aroma_Quality"]
  },
  "Green_Pepper_Aroma_Quality": {
    "parent": "Herbaceous_Aroma_Quality",
    "children": []
  },
  "Grassy_Aroma_Quality": {
    "parent": "Herbaceous_Aroma_Quality",
    "children": []
  },
  "Herbal_Aroma_Quality": {
    "parent": "Herbaceous_Aroma_Quality",
    "children": []
  },
  "Spicy_Aroma_Quality": {
    "parent": "Aroma_Character_Quality",
    "children": ["Pepper_Aroma_Quality", "Clove_Aroma_Quality", "Licorice_Aroma_Quality"]
  },
  "Pepper_Aroma_Quality": {
    "parent": "Spicy_Aroma_Quality",
    "children": []
  },
  "Clove_Aroma_Quality": {
    "parent": "Spicy_Aroma_Quality",
    "children": []
  },
  "Licorice_Aroma_Quality": {
    "parent": "Spicy_Aroma_Quality",
    "children": []
  },
  "Earthy_Aroma_Quality": {
    "parent": "Aroma_Character_Quality",
    "children": ["Mineral_Aroma_Quality", "Flinty_Aroma_Quality", "Petrichor_Aroma_Quality"]
  },
  "Mineral_Aroma_Quality": {
    "parent": "Earthy_Aroma_Quality",
    "children": []
  },
  "Flinty_Aroma_Quality": {
    "parent": "Earthy_Aroma_Quality",
    "children": []
  },
  "Petrichor_Aroma_Quality": {
    "parent": "Earthy_Aroma_Quality",
    "children": []
  },
  "Aroma_Complexity_Quality": {
    "parent": "Aroma_Quality",
    "children": []
  },
  "Aroma_Typicity_Quality": {
    "parent": "Aroma_Quality",
    "children": ["Varietal_Typicity_Quality", "Terroir_Expression_Quality"]
  },
  "Varietal_Typicity_Quality": {
    "parent": "Aroma_Typicity_Quality",
    "children": []
  },
  "Terroir_Expression_Quality": {
    "parent": "Aroma_Typicity_Quality",
    "children": []
  },
  "Aroma_Evolution_Quality": {
    "parent": "Aroma_Quality",
    "children": ["Primary_Aroma_Expression_Quality", "Aroma_Development_Potential_Quality"]
  },
  "Primary_Aroma_Expression_Quality": {
    "parent": "Aroma_Evolution_Quality",
    "children": []
  },
  "Aroma_Development_Potential_Quality": {
    "parent": "Aroma_Evolution_Quality",
    "children": []
  },
  "Off_Aroma_Quality": {
    "parent": "Aroma_Quality",
    "children": ["Volatile_Acidity_Aroma_Quality", "Reduction_Aroma_Quality", "Brett_Character_Quality", "Oxidation_Aroma_Quality"]
  },
  "Volatile_Acidity_Aroma_Quality": {
    "parent": "Off_Aroma_Quality",
    "children": []
  },
  "Reduction_Aroma_Quality": {
    "parent": "Off_Aroma_Quality",
    "children": []
  },
  "Brett_Character_Quality": {
    "parent": "Off_Aroma_Quality",
    "children": []
  },
  "Oxidation_Aroma_Quality": {
    "parent": "Off_Aroma_Quality",
    "children": []
  },
  "Visual_Appearance_Quality": {
    "parent": "Sensory_Quality",
    "children": ["Clarity_Quality", "Color_Appearance_Quality", "Viscosity_Appearance_Quality", "Surface_Appearance_Quality"]
  },
  "Clarity_Quality": {
    "parent": "Visual_Appearance_Quality",
    "children": ["Limpidity_Quality", "Brilliance_Quality", "Haziness_Quality"]
  },
  "Limpidity_Quality": {
    "parent": "Clarity_Quality",
    "children": []
  },
  "Brilliance_Quality": {
    "parent": "Clarity_Quality",
    "children": []
  },
  "Haziness_Quality": {
    "parent": "Clarity_Quality",
    "children": []
  },
  "Color_Appearance_Quality": {
    "parent": "Visual_Appearance_Quality",
    "children": ["Color_Intensity_Quality", "Color_Hue_Appearance_Quality", "Color_Saturation_Quality", "Color_Rim_Variation_Quality"]
  },
  "Color_Intensity_Quality": {
    "parent": "Color_Appearance_Quality",
    "children": []
  },
  "Color_Hue_Appearance_Quality": {
    "parent": "Color_Appearance_Quality",
    "children": []
  },
  "Color_Saturation_Quality": {
    "parent": "Color_Appearance_Quality",
    "children": []
  },
  "Color_Rim_Variation_Quality": {
    "parent": "Color_Appearance_Quality",
    "children": []
  },
  "Viscosity_Appearance_Quality": {
    "parent": "Visual_Appearance_Quality",
    "children": ["Legs_Quality_(Tears)", "Body_Visual_Impression_Quality"]
  },
  "Legs_Quality_(Tears)": {
    "parent": "Viscosity_Appearance_Quality",
    "children": []
  },
  "Body_Visual_Impression_Quality": {
    "parent": "Viscosity_Appearance_Quality",
    "children": []
  },
  "Surface_Appearance_Quality": {
    "parent": "Visual_Appearance_Quality",
    "children": ["Bloom_Appearance_Quality_(Pruina)", "Gloss_Quality", "Defect_Visibility_Quality"]
  },
  "Bloom_Appearance_Quality_(Pruina)": {
    "parent": "Surface_Appearance_Quality",
    "children": []
  },
  "Gloss_Quality": {
    "parent": "Surface_Appearance_Quality",
    "children": []
  },
  "Defect_Visibility_Quality": {
    "parent": "Surface_Appearance_Quality",
    "children": []
  },
  "Tactile_Quality": {
    "parent": "Sensory_Quality",
    "children": ["Mouthfeel_Quality", "Texture_Perception_Quality", "Temperature_Perception_Quality", "Tactile_Astringency_Quality", "Effervescence_Quality"]
  },
  "Mouthfeel_Quality": {
    "parent": "Tactile_Quality",
    "children": ["Body_Quality", "Viscosity_Mouthfeel_Quality", "Smoothness_Quality", "Roughness_Quality", "Creaminess_Quality"]
  },
  "Body_Quality": {
    "parent": "Mouthfeel_Quality",
    "children": ["Light_Body_Quality", "Medium_Body_Quality", "Full_Body_Quality"]
  },
  "Light_Body_Quality": {
    "parent": "Body_Quality",
    "children": []
  },
  "Medium_Body_Quality": {
    "parent": "Body_Quality",
    "children": []
  },
  "Full_Body_Quality": {
    "parent": "Body_Quality",
    "children": []
  },
  "Viscosity_Mouthfeel_Quality": {
    "parent": "Mouthfeel_Quality",
    "children": []
  },
  "Smoothness_Quality": {
    "parent": "Mouthfeel_Quality",
    "children": []
  },
  "Roughness_Quality": {
    "parent": "Mouthfeel_Quality",
    "children": []
  },
  "Creaminess_Quality": {
    "parent": "Mouthfeel_Quality",
    "children": []
  },
  "Texture_Perception_Quality": {
    "parent": "Tactile_Quality",
    "children": ["Graininess_Quality", "Silkiness_Quality", "Velvetiness_Quality"]
  },
  "Graininess_Quality": {
    "parent": "Texture_Perception_Quality",
    "children": []
  },
  "Silkiness_Quality": {
    "parent": "Texture_Perception_Quality",
    "children": []
  },
  "Velvetiness_Quality": {
    "parent": "Texture_Perception_Quality",
    "children": []
  },
  "Temperature_Perception_Quality": {
    "parent": "Tactile_Quality",
    "children": ["Cooling_Sensation_Quality", "Warming_Sensation_Quality_(Alcohol)"]
  },
  "Cooling_Sensation_Quality": {
    "parent": "Temperature_Perception_Quality",
    "children": []
  },
  "Warming_Sensation_Quality_(Alcohol)": {
    "parent": "Temperature_Perception_Quality",
    "children": []
  },
  "Tactile_Astringency_Quality": {
    "parent": "Tactile_Quality",
    "children": ["Drying_Sensation_Quality", "Puckering_Quality"]
  },
  "Drying_Sensation_Quality": {
    "parent": "Tactile_Astringency_Quality",
    "children": []
  },
  "Puckering_Quality": {
    "parent": "Tactile_Astringency_Quality",
    "children": []
  },
  "Effervescence_Quality": {
    "parent": "Tactile_Quality",
    "children": ["Bubble_Size_Quality", "Bubble_Persistence_Quality", "Mousse_Quality"]
  },
  "Bubble_Size_Quality": {
    "parent": "Effervescence_Quality",
    "children": []
  },
  "Bubble_Persistence_Quality": {
    "parent": "Effervescence_Quality",
    "children": []
  },
  "Mousse_Quality": {
    "parent": "Effervescence_Quality",
    "children": []
  },
  "Physiological_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Photosynthetic_Capacity_Quality", "Respiration_Rate_Quality", "Transpiration_Rate_Quality", "Hydraulic_Conductivity_Quality", "Nutrient_Uptake_Efficiency_Quality"]
  },
  "Photosynthetic_Capacity_Quality": {
    "parent": "Physiological_Quality",
    "children": ["Light_Capture_Efficiency_Quality", "Carbon_Fixation_Efficiency_Quality", "Photosynthetic_Limitation_Quality", "Chlorophyll_Fluorescence_Quality", "Light_Response_Quality"]
  },
  "Light_Capture_Efficiency_Quality": {
    "parent": "Photosynthetic_Capacity_Quality",
    "children": ["Chlorophyll_Content_Quality", "Chlorophyll_a_b_Ratio_Quality", "Carotenoid_Content_Quality", "Leaf_Absorptance_Quality"]
  },
  "Chlorophyll_Content_Quality": {
    "parent": "Light_Capture_Efficiency_Quality",
    "children": []
  },
  "Chlorophyll_a_b_Ratio_Quality": {
    "parent": "Light_Capture_Efficiency_Quality",
    "children": []
  },
  "Carotenoid_Content_Quality": {
    "parent": "Light_Capture_Efficiency_Quality",
    "children": []
  },
  "Leaf_Absorptance_Quality": {
    "parent": "Light_Capture_Efficiency_Quality",
    "children": []
  },
  "Carbon_Fixation_Efficiency_Quality": {
    "parent": "Photosynthetic_Capacity_Quality",
    "children": ["Net_Photosynthesis_Rate_Quality", "Gross_Photosynthesis_Rate_Quality", "Quantum_Yield_Quality", "Carboxylation_Efficiency_Quality"]
  },
  "Net_Photosynthesis_Rate_Quality": {
    "parent": "Carbon_Fixation_Efficiency_Quality",
    "children": []
  },
  "Gross_Photosynthesis_Rate_Quality": {
    "parent": "Carbon_Fixation_Efficiency_Quality",
    "children": []
  },
  "Quantum_Yield_Quality": {
    "parent": "Carbon_Fixation_Efficiency_Quality",
    "children": []
  },
  "Carboxylation_Efficiency_Quality": {
    "parent": "Carbon_Fixation_Efficiency_Quality",
    "children": []
  },
  "Photosynthetic_Limitation_Quality": {
    "parent": "Photosynthetic_Capacity_Quality",
    "children": ["Stomatal_Limitation_Quality", "Mesophyll_Conductance_Limitation_Quality", "Biochemical_Limitation_Quality"]
  },
  "Stomatal_Limitation_Quality": {
    "parent": "Photosynthetic_Limitation_Quality",
    "children": []
  },
  "Mesophyll_Conductance_Limitation_Quality": {
    "parent": "Photosynthetic_Limitation_Quality",
    "children": []
  },
  "Biochemical_Limitation_Quality": {
    "parent": "Photosynthetic_Limitation_Quality",
    "children": []
  },
  "Chlorophyll_Fluorescence_Quality": {
    "parent": "Photosynthetic_Capacity_Quality",
    "children": ["Fv_Fm_Ratio_Quality", "Photochemical_Quenching_Quality", "Non_Photochemical_Quenching_Quality", "Electron_Transport_Rate_Quality"]
  },
  "Fv_Fm_Ratio_Quality": {
    "parent": "Chlorophyll_Fluorescence_Quality",
    "children": []
  },
  "Photochemical_Quenching_Quality": {
    "parent": "Chlorophyll_Fluorescence_Quality",
    "children": []
  },
  "Non_Photochemical_Quenching_Quality": {
    "parent": "Chlorophyll_Fluorescence_Quality",
    "children": []
  },
  "Electron_Transport_Rate_Quality": {
    "parent": "Chlorophyll_Fluorescence_Quality",
    "children": []
  },
  "Light_Response_Quality": {
    "parent": "Photosynthetic_Capacity_Quality",
    "children": ["Light_Saturation_Point_Quality", "Light_Compensation_Point_Quality", "Photoinhibition_Susceptibility_Quality"]
  },
  "Light_Saturation_Point_Quality": {
    "parent": "Light_Response_Quality",
    "children": []
  },
  "Light_Compensation_Point_Quality": {
    "parent": "Light_Response_Quality",
    "children": []
  },
  "Photoinhibition_Susceptibility_Quality": {
    "parent": "Light_Response_Quality",
    "children": []
  },
  "Respiration_Rate_Quality": {
    "parent": "Physiological_Quality",
    "children": ["Maintenance_Respiration_Quality", "Growth_Respiration_Quality", "Dark_Respiration_Rate_Quality", "Photorespiration_Rate_Quality", "Respiratory_Quotient_Quality", "Temperature_Response_Quality", "Carbon_Balance_Quality"]
  },
  "Maintenance_Respiration_Quality": {
    "parent": "Respiration_Rate_Quality",
    "children": ["Leaf_Maintenance_Respiration_Quality", "Root_Maintenance_Respiration_Quality", "Fruit_Maintenance_Respiration_Quality"]
  },
  "Leaf_Maintenance_Respiration_Quality": {
    "parent": "Maintenance_Respiration_Quality",
    "children": []
  },
  "Root_Maintenance_Respiration_Quality": {
    "parent": "Maintenance_Respiration_Quality",
    "children": []
  },
  "Fruit_Maintenance_Respiration_Quality": {
    "parent": "Maintenance_Respiration_Quality",
    "children": []
  },
  "Growth_Respiration_Quality": {
    "parent": "Respiration_Rate_Quality",
    "children": []
  },
  "Dark_Respiration_Rate_Quality": {
    "parent": "Respiration_Rate_Quality",
    "children": []
  },
  "Photorespiration_Rate_Quality": {
    "parent": "Respiration_Rate_Quality",
    "children": []
  },
  "Respiratory_Quotient_Quality": {
    "parent": "Respiration_Rate_Quality",
    "children": []
  },
  "Temperature_Response_Quality": {
    "parent": "Respiration_Rate_Quality",
    "children": ["Q10_Coefficient_Quality", "Respiration_Acclimation_Quality"]
  },
  "Q10_Coefficient_Quality": {
    "parent": "Temperature_Response_Quality",
    "children": []
  },
  "Respiration_Acclimation_Quality": {
    "parent": "Temperature_Response_Quality",
    "children": []
  },
  "Carbon_Balance_Quality": {
    "parent": "Respiration_Rate_Quality",
    "children": ["Gross_Carbon_Gain_Quality", "Net_Carbon_Balance_Quality", "Carbon_Use_Efficiency_Quality"]
  },
  "Gross_Carbon_Gain_Quality": {
    "parent": "Carbon_Balance_Quality",
    "children": []
  },
  "Net_Carbon_Balance_Quality": {
    "parent": "Carbon_Balance_Quality",
    "children": []
  },
  "Carbon_Use_Efficiency_Quality": {
    "parent": "Carbon_Balance_Quality",
    "children": []
  },
  "Transpiration_Rate_Quality": {
    "parent": "Physiological_Quality",
    "children": ["Stomatal_Conductance_Quality", "Cuticular_Transpiration_Quality", "Canopy_Transpiration_Quality", "Transpiration_Efficiency_Quality", "Vapor_Pressure_Deficit_Response_Quality", "Boundary_Layer_Conductance_Quality", "Night_Transpiration_Quality"]
  },
  "Stomatal_Conductance_Quality": {
    "parent": "Transpiration_Rate_Quality",
    "children": ["Maximum_Stomatal_Conductance_Quality", "Operational_Stomatal_Conductance_Quality", "Stomatal_Sensitivity_Quality"]
  },
  "Maximum_Stomatal_Conductance_Quality": {
    "parent": "Stomatal_Conductance_Quality",
    "children": []
  },
  "Operational_Stomatal_Conductance_Quality": {
    "parent": "Stomatal_Conductance_Quality",
    "children": []
  },
  "Stomatal_Sensitivity_Quality": {
    "parent": "Stomatal_Conductance_Quality",
    "children": []
  },
  "Cuticular_Transpiration_Quality": {
    "parent": "Transpiration_Rate_Quality",
    "children": []
  },
  "Canopy_Transpiration_Quality": {
    "parent": "Transpiration_Rate_Quality",
    "children": []
  },
  "Transpiration_Efficiency_Quality": {
    "parent": "Transpiration_Rate_Quality",
    "children": ["Intrinsic_Water_Use_Efficiency_Quality", "Instantaneous_Water_Use_Efficiency_Quality", "Integrated_Water_Use_Efficiency_Quality_(Delta_13C)"]
  },
  "Intrinsic_Water_Use_Efficiency_Quality": {
    "parent": "Transpiration_Efficiency_Quality",
    "children": []
  },
  "Instantaneous_Water_Use_Efficiency_Quality": {
    "parent": "Transpiration_Efficiency_Quality",
    "children": []
  },
  "Integrated_Water_Use_Efficiency_Quality_(Delta_13C)": {
    "parent": "Transpiration_Efficiency_Quality",
    "children": []
  },
  "Vapor_Pressure_Deficit_Response_Quality": {
    "parent": "Transpiration_Rate_Quality",
    "children": []
  },
  "Boundary_Layer_Conductance_Quality": {
    "parent": "Transpiration_Rate_Quality",
    "children": []
  },
  "Night_Transpiration_Quality": {
    "parent": "Transpiration_Rate_Quality",
    "children": []
  },
  "Hydraulic_Conductivity_Quality": {
    "parent": "Physiological_Quality",
    "children": ["Root_Hydraulic_Conductivity_Quality", "Stem_Hydraulic_Conductivity_Quality", "Leaf_Hydraulic_Conductance_Quality", "Whole_Plant_Hydraulic_Conductance_Quality", "Vulnerability_To_Cavitation_Quality", "Embolism_Recovery_Capacity_Quality"]
  },
  "Root_Hydraulic_Conductivity_Quality": {
    "parent": "Hydraulic_Conductivity_Quality",
    "children": ["Root_Radial_Conductivity_Quality", "Root_Axial_Conductivity_Quality", "Aquaporin_Activity_Quality"]
  },
  "Root_Radial_Conductivity_Quality": {
    "parent": "Root_Hydraulic_Conductivity_Quality",
    "children": []
  },
  "Root_Axial_Conductivity_Quality": {
    "parent": "Root_Hydraulic_Conductivity_Quality",
    "children": []
  },
  "Aquaporin_Activity_Quality": {
    "parent": "Root_Hydraulic_Conductivity_Quality",
    "children": []
  },
  "Stem_Hydraulic_Conductivity_Quality": {
    "parent": "Hydraulic_Conductivity_Quality",
    "children": ["Vessel_Conductivity_Quality", "Petiole_Conductivity_Quality", "Shoot_Hydraulic_Conductance_Quality"]
  },
  "Vessel_Conductivity_Quality": {
    "parent": "Stem_Hydraulic_Conductivity_Quality",
    "children": []
  },
  "Petiole_Conductivity_Quality": {
    "parent": "Stem_Hydraulic_Conductivity_Quality",
    "children": []
  },
  "Shoot_Hydraulic_Conductance_Quality": {
    "parent": "Stem_Hydraulic_Conductivity_Quality",
    "children": []
  },
  "Leaf_Hydraulic_Conductance_Quality": {
    "parent": "Hydraulic_Conductivity_Quality",
    "children": ["Venation_Conductivity_Quality", "Mesophyll_Hydraulic_Conductance_Quality"]
  },
  "Venation_Conductivity_Quality": {
    "parent": "Leaf_Hydraulic_Conductance_Quality",
    "children": []
  },
  "Mesophyll_Hydraulic_Conductance_Quality": {
    "parent": "Leaf_Hydraulic_Conductance_Quality",
    "children": []
  },
  "Whole_Plant_Hydraulic_Conductance_Quality": {
    "parent": "Hydraulic_Conductivity_Quality",
    "children": []
  },
  "Vulnerability_To_Cavitation_Quality": {
    "parent": "Hydraulic_Conductivity_Quality",
    "children": ["P50_Value_Quality", "P88_Value_Quality", "Cavitation_Resistance_Quality"]
  },
  "P50_Value_Quality": {
    "parent": "Vulnerability_To_Cavitation_Quality",
    "children": []
  },
  "P88_Value_Quality": {
    "parent": "Vulnerability_To_Cavitation_Quality",
    "children": []
  },
  "Cavitation_Resistance_Quality": {
    "parent": "Vulnerability_To_Cavitation_Quality",
    "children": []
  },
  "Embolism_Recovery_Capacity_Quality": {
    "parent": "Hydraulic_Conductivity_Quality",
    "children": ["Refilling_Capacity_Quality", "Hydraulic_Safety_Margin_Quality"]
  },
  "Refilling_Capacity_Quality": {
    "parent": "Embolism_Recovery_Capacity_Quality",
    "children": []
  },
  "Hydraulic_Safety_Margin_Quality": {
    "parent": "Embolism_Recovery_Capacity_Quality",
    "children": []
  },
  "Nutrient_Uptake_Efficiency_Quality": {
    "parent": "Physiological_Quality",
    "children": ["Nitrogen_Uptake_Efficiency_Quality", "Phosphorus_Uptake_Efficiency_Quality", "Potassium_Uptake_Efficiency_Quality", "Micronutrient_Uptake_Efficiency_Quality", "Root_Uptake_Capacity_Quality", "Nutrient_Remobilization_Efficiency_Quality"]
  },
  "Nitrogen_Uptake_Efficiency_Quality": {
    "parent": "Nutrient_Uptake_Efficiency_Quality",
    "children": ["Nitrate_Uptake_Rate_Quality", "Ammonium_Uptake_Rate_Quality", "Nitrogen_Use_Efficiency_Quality"]
  },
  "Nitrate_Uptake_Rate_Quality": {
    "parent": "Nitrogen_Uptake_Efficiency_Quality",
    "children": []
  },
  "Ammonium_Uptake_Rate_Quality": {
    "parent": "Nitrogen_Uptake_Efficiency_Quality",
    "children": []
  },
  "Nitrogen_Use_Efficiency_Quality": {
    "parent": "Nitrogen_Uptake_Efficiency_Quality",
    "children": []
  },
  "Phosphorus_Uptake_Efficiency_Quality": {
    "parent": "Nutrient_Uptake_Efficiency_Quality",
    "children": ["Phosphate_Acquisition_Efficiency_Quality", "Phosphorus_Use_Efficiency_Quality", "Mycorrhizal_Colonization_Quality"]
  },
  "Phosphate_Acquisition_Efficiency_Quality": {
    "parent": "Phosphorus_Uptake_Efficiency_Quality",
    "children": []
  },
  "Phosphorus_Use_Efficiency_Quality": {
    "parent": "Phosphorus_Uptake_Efficiency_Quality",
    "children": []
  },
  "Mycorrhizal_Colonization_Quality": {
    "parent": "Phosphorus_Uptake_Efficiency_Quality",
    "children": []
  },
  "Potassium_Uptake_Efficiency_Quality": {
    "parent": "Nutrient_Uptake_Efficiency_Quality",
    "children": ["Potassium_Acquisition_Rate_Quality", "Potassium_Use_Efficiency_Quality"]
  },
  "Potassium_Acquisition_Rate_Quality": {
    "parent": "Potassium_Uptake_Efficiency_Quality",
    "children": []
  },
  "Potassium_Use_Efficiency_Quality": {
    "parent": "Potassium_Uptake_Efficiency_Quality",
    "children": []
  },
  "Micronutrient_Uptake_Efficiency_Quality": {
    "parent": "Nutrient_Uptake_Efficiency_Quality",
    "children": ["Iron_Uptake_Efficiency_Quality", "Zinc_Uptake_Efficiency_Quality", "Boron_Uptake_Efficiency_Quality"]
  },
  "Iron_Uptake_Efficiency_Quality": {
    "parent": "Micronutrient_Uptake_Efficiency_Quality",
    "children": []
  },
  "Zinc_Uptake_Efficiency_Quality": {
    "parent": "Micronutrient_Uptake_Efficiency_Quality",
    "children": []
  },
  "Boron_Uptake_Efficiency_Quality": {
    "parent": "Micronutrient_Uptake_Efficiency_Quality",
    "children": []
  },
  "Root_Uptake_Capacity_Quality": {
    "parent": "Nutrient_Uptake_Efficiency_Quality",
    "children": ["Root_Surface_Area_Quality", "Specific_Root_Length_Quality", "Root_Hair_Density_Quality"]
  },
  "Root_Surface_Area_Quality": {
    "parent": "Root_Uptake_Capacity_Quality",
    "children": []
  },
  "Specific_Root_Length_Quality": {
    "parent": "Root_Uptake_Capacity_Quality",
    "children": []
  },
  "Root_Hair_Density_Quality": {
    "parent": "Root_Uptake_Capacity_Quality",
    "children": []
  },
  "Nutrient_Remobilization_Efficiency_Quality": {
    "parent": "Nutrient_Uptake_Efficiency_Quality",
    "children": ["Senescence_Nutrient_Recovery_Quality", "Storage_Mobilization_Efficiency_Quality"]
  },
  "Senescence_Nutrient_Recovery_Quality": {
    "parent": "Nutrient_Remobilization_Efficiency_Quality",
    "children": []
  },
  "Storage_Mobilization_Efficiency_Quality": {
    "parent": "Nutrient_Remobilization_Efficiency_Quality",
    "children": []
  },
  "Phenological_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Developmental_Stage_Quality", "Maturity_Quality", "Synchronization_Quality", "Dormancy_Depth_Quality"]
  },
  "Developmental_Stage_Quality": {
    "parent": "Phenological_Quality",
    "children": ["BBCH_Stage_Precision_Quality", "Stage_Identification_Clarity_Quality", "Developmental_Rate_Quality", "Stage_Transition_Quality", "Developmental_Completeness_Quality"]
  },
  "BBCH_Stage_Precision_Quality": {
    "parent": "Developmental_Stage_Quality",
    "children": []
  },
  "Stage_Identification_Clarity_Quality": {
    "parent": "Developmental_Stage_Quality",
    "children": []
  },
  "Developmental_Rate_Quality": {
    "parent": "Developmental_Stage_Quality",
    "children": ["Bud_Development_Rate_Quality", "Shoot_Development_Rate_Quality", "Inflorescence_Development_Rate_Quality", "Berry_Development_Rate_Quality"]
  },
  "Bud_Development_Rate_Quality": {
    "parent": "Developmental_Rate_Quality",
    "children": []
  },
  "Shoot_Development_Rate_Quality": {
    "parent": "Developmental_Rate_Quality",
    "children": []
  },
  "Inflorescence_Development_Rate_Quality": {
    "parent": "Developmental_Rate_Quality",
    "children": []
  },
  "Berry_Development_Rate_Quality": {
    "parent": "Developmental_Rate_Quality",
    "children": []
  },
  "Stage_Transition_Quality": {
    "parent": "Developmental_Stage_Quality",
    "children": ["Stage_Transition_Sharpness_Quality", "Stage_Transition_Duration_Quality"]
  },
  "Stage_Transition_Sharpness_Quality": {
    "parent": "Stage_Transition_Quality",
    "children": []
  },
  "Stage_Transition_Duration_Quality": {
    "parent": "Stage_Transition_Quality",
    "children": []
  },
  "Developmental_Completeness_Quality": {
    "parent": "Developmental_Stage_Quality",
    "children": ["Full_Stage_Expression_Quality", "Arrested_Development_Quality", "Incomplete_Stage_Transition_Quality"]
  },
  "Full_Stage_Expression_Quality": {
    "parent": "Developmental_Completeness_Quality",
    "children": []
  },
  "Arrested_Development_Quality": {
    "parent": "Developmental_Completeness_Quality",
    "children": []
  },
  "Incomplete_Stage_Transition_Quality": {
    "parent": "Developmental_Completeness_Quality",
    "children": []
  },
  "Maturity_Quality": {
    "parent": "Phenological_Quality",
    "children": ["Physiological_Maturity_Quality", "Technological_Maturity_Quality", "Phenolic_Maturity_Quality", "Aromatic_Maturity_Quality", "Maturity_Index_Quality", "Harvest_Readiness_Quality"]
  },
  "Physiological_Maturity_Quality": {
    "parent": "Maturity_Quality",
    "children": ["Seed_Maturity_Quality", "Pulp_Maturity_Quality", "Skin_Maturity_Quality"]
  },
  "Seed_Maturity_Quality": {
    "parent": "Physiological_Maturity_Quality",
    "children": []
  },
  "Pulp_Maturity_Quality": {
    "parent": "Physiological_Maturity_Quality",
    "children": []
  },
  "Skin_Maturity_Quality": {
    "parent": "Physiological_Maturity_Quality",
    "children": []
  },
  "Technological_Maturity_Quality": {
    "parent": "Maturity_Quality",
    "children": ["Sugar_Maturity_Quality", "Acid_Maturity_Quality", "Must_Composition_Maturity_Quality"]
  },
  "Sugar_Maturity_Quality": {
    "parent": "Technological_Maturity_Quality",
    "children": []
  },
  "Acid_Maturity_Quality": {
    "parent": "Technological_Maturity_Quality",
    "children": []
  },
  "Must_Composition_Maturity_Quality": {
    "parent": "Technological_Maturity_Quality",
    "children": []
  },
  "Phenolic_Maturity_Quality": {
    "parent": "Maturity_Quality",
    "children": ["Anthocyanin_Maturity_Quality", "Tannin_Maturity_Quality", "Extractability_Maturity_Quality"]
  },
  "Anthocyanin_Maturity_Quality": {
    "parent": "Phenolic_Maturity_Quality",
    "children": []
  },
  "Tannin_Maturity_Quality": {
    "parent": "Phenolic_Maturity_Quality",
    "children": []
  },
  "Extractability_Maturity_Quality": {
    "parent": "Phenolic_Maturity_Quality",
    "children": []
  },
  "Aromatic_Maturity_Quality": {
    "parent": "Maturity_Quality",
    "children": ["Aroma_Precursor_Maturity_Quality", "Varietal_Aroma_Development_Quality", "Aroma_Stability_Quality"]
  },
  "Aroma_Precursor_Maturity_Quality": {
    "parent": "Aromatic_Maturity_Quality",
    "children": []
  },
  "Varietal_Aroma_Development_Quality": {
    "parent": "Aromatic_Maturity_Quality",
    "children": []
  },
  "Aroma_Stability_Quality": {
    "parent": "Aromatic_Maturity_Quality",
    "children": []
  },
  "Maturity_Index_Quality": {
    "parent": "Maturity_Quality",
    "children": ["Brix_Acid_Ratio_Quality", "Glories_Index_Quality", "Maturity_Potential_Index_Quality"]
  },
  "Brix_Acid_Ratio_Quality": {
    "parent": "Maturity_Index_Quality",
    "children": []
  },
  "Glories_Index_Quality": {
    "parent": "Maturity_Index_Quality",
    "children": []
  },
  "Maturity_Potential_Index_Quality": {
    "parent": "Maturity_Index_Quality",
    "children": []
  },
  "Harvest_Readiness_Quality": {
    "parent": "Maturity_Quality",
    "children": ["Optimal_Harvest_Window_Quality", "Harvest_Flexibility_Quality"]
  },
  "Optimal_Harvest_Window_Quality": {
    "parent": "Harvest_Readiness_Quality",
    "children": []
  },
  "Harvest_Flexibility_Quality": {
    "parent": "Harvest_Readiness_Quality",
    "children": []
  },
  "Synchronization_Quality": {
    "parent": "Phenological_Quality",
    "children": ["Intra_Plant_Synchrony_Quality", "Inter_Plant_Synchrony_Quality", "Organ_Synchrony_Quality", "Temporal_Spread_Quality", "Environmental_Synchronization_Quality"]
  },
  "Intra_Plant_Synchrony_Quality": {
    "parent": "Synchronization_Quality",
    "children": ["Bud_Break_Synchrony_Quality", "Flowering_Synchrony_Quality", "Veraison_Synchrony_Quality", "Ripening_Synchrony_Quality"]
  },
  "Bud_Break_Synchrony_Quality": {
    "parent": "Intra_Plant_Synchrony_Quality",
    "children": []
  },
  "Flowering_Synchrony_Quality": {
    "parent": "Intra_Plant_Synchrony_Quality",
    "children": []
  },
  "Veraison_Synchrony_Quality": {
    "parent": "Intra_Plant_Synchrony_Quality",
    "children": []
  },
  "Ripening_Synchrony_Quality": {
    "parent": "Intra_Plant_Synchrony_Quality",
    "children": []
  },
  "Inter_Plant_Synchrony_Quality": {
    "parent": "Synchronization_Quality",
    "children": ["Vineyard_Block_Synchrony_Quality", "Cultivar_Synchrony_Quality"]
  },
  "Vineyard_Block_Synchrony_Quality": {
    "parent": "Inter_Plant_Synchrony_Quality",
    "children": []
  },
  "Cultivar_Synchrony_Quality": {
    "parent": "Inter_Plant_Synchrony_Quality",
    "children": []
  },
  "Organ_Synchrony_Quality": {
    "parent": "Synchronization_Quality",
    "children": ["Berry_Cluster_Synchrony_Quality", "Shoot_Synchrony_Quality", "Root_Shoot_Synchrony_Quality"]
  },
  "Berry_Cluster_Synchrony_Quality": {
    "parent": "Organ_Synchrony_Quality",
    "children": []
  },
  "Shoot_Synchrony_Quality": {
    "parent": "Organ_Synchrony_Quality",
    "children": []
  },
  "Root_Shoot_Synchrony_Quality": {
    "parent": "Organ_Synchrony_Quality",
    "children": []
  },
  "Temporal_Spread_Quality": {
    "parent": "Synchronization_Quality",
    "children": ["Stage_Duration_Variance_Quality", "Maturity_Spread_Quality", "Harvest_Window_Concentration_Quality"]
  },
  "Stage_Duration_Variance_Quality": {
    "parent": "Temporal_Spread_Quality",
    "children": []
  },
  "Maturity_Spread_Quality": {
    "parent": "Temporal_Spread_Quality",
    "children": []
  },
  "Harvest_Window_Concentration_Quality": {
    "parent": "Temporal_Spread_Quality",
    "children": []
  },
  "Environmental_Synchronization_Quality": {
    "parent": "Synchronization_Quality",
    "children": ["Photoperiod_Synchrony_Quality", "Temperature_Sum_Alignment_Quality"]
  },
  "Photoperiod_Synchrony_Quality": {
    "parent": "Environmental_Synchronization_Quality",
    "children": []
  },
  "Temperature_Sum_Alignment_Quality": {
    "parent": "Environmental_Synchronization_Quality",
    "children": []
  },
  "Dormancy_Depth_Quality": {
    "parent": "Phenological_Quality",
    "children": ["Endodormancy_Depth_Quality", "Ecodormancy_Status_Quality", "Paradormancy_Quality", "Dormancy_Transition_Quality", "Cold_Hardiness_Quality", "Bud_Viability_Quality"]
  },
  "Endodormancy_Depth_Quality": {
    "parent": "Dormancy_Depth_Quality",
    "children": ["Chilling_Requirement_Quality", "Chilling_Accumulation_Quality", "Endodormancy_Release_Timing_Quality"]
  },
  "Chilling_Requirement_Quality": {
    "parent": "Endodormancy_Depth_Quality",
    "children": []
  },
  "Chilling_Accumulation_Quality": {
    "parent": "Endodormancy_Depth_Quality",
    "children": []
  },
  "Endodormancy_Release_Timing_Quality": {
    "parent": "Endodormancy_Depth_Quality",
    "children": []
  },
  "Ecodormancy_Status_Quality": {
    "parent": "Dormancy_Depth_Quality",
    "children": ["Heat_Requirement_Quality", "Ecodormancy_Duration_Quality"]
  },
  "Heat_Requirement_Quality": {
    "parent": "Ecodormancy_Status_Quality",
    "children": []
  },
  "Ecodormancy_Duration_Quality": {
    "parent": "Ecodormancy_Status_Quality",
    "children": []
  },
  "Paradormancy_Quality": {
    "parent": "Dormancy_Depth_Quality",
    "children": ["Apical_Dominance_Quality", "Lateral_Bud_Inhibition_Quality"]
  },
  "Apical_Dominance_Quality": {
    "parent": "Paradormancy_Quality",
    "children": []
  },
  "Lateral_Bud_Inhibition_Quality": {
    "parent": "Paradormancy_Quality",
    "children": []
  },
  "Dormancy_Transition_Quality": {
    "parent": "Dormancy_Depth_Quality",
    "children": ["Dormancy_Induction_Quality", "Dormancy_Completion_Quality", "Dormancy_Breaking_Potential_Quality"]
  },
  "Dormancy_Induction_Quality": {
    "parent": "Dormancy_Transition_Quality",
    "children": []
  },
  "Dormancy_Completion_Quality": {
    "parent": "Dormancy_Transition_Quality",
    "children": []
  },
  "Dormancy_Breaking_Potential_Quality": {
    "parent": "Dormancy_Transition_Quality",
    "children": []
  },
  "Cold_Hardiness_Quality": {
    "parent": "Dormancy_Depth_Quality",
    "children": ["Maximum_Cold_Hardiness_Quality", "Hardiness_Development_Rate_Quality", "Deacclimation_Rate_Quality", "Reacclimation_Capacity_Quality"]
  },
  "Maximum_Cold_Hardiness_Quality": {
    "parent": "Cold_Hardiness_Quality",
    "children": []
  },
  "Hardiness_Development_Rate_Quality": {
    "parent": "Cold_Hardiness_Quality",
    "children": []
  },
  "Deacclimation_Rate_Quality": {
    "parent": "Cold_Hardiness_Quality",
    "children": []
  },
  "Reacclimation_Capacity_Quality": {
    "parent": "Cold_Hardiness_Quality",
    "children": []
  },
  "Bud_Viability_Quality": {
    "parent": "Dormancy_Depth_Quality",
    "children": ["Primary_Bud_Viability_Quality", "Secondary_Bud_Viability_Quality", "Basal_Bud_Viability_Quality"]
  },
  "Primary_Bud_Viability_Quality": {
    "parent": "Bud_Viability_Quality",
    "children": []
  },
  "Secondary_Bud_Viability_Quality": {
    "parent": "Bud_Viability_Quality",
    "children": []
  },
  "Basal_Bud_Viability_Quality": {
    "parent": "Bud_Viability_Quality",
    "children": []
  },
  "Viticultural_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Yield_Quality", "Vigor_Quality", "Canopy_Density_Quality", "Training_System_Suitability_Quality", "Harvest_Timing_Quality"]
  },
  "Yield_Quality": {
    "parent": "Viticultural_Quality",
    "children": ["Quantity_Yield_Quality", "Yield_Consistency_Quality", "Yield_Efficiency_Quality", "Yield_Potential_Quality"]
  },
  "Quantity_Yield_Quality": {
    "parent": "Yield_Quality",
    "children": ["Cluster_Number_Quality", "Cluster_Weight_Quality", "Berry_Number_Per_Cluster_Quality", "Berry_Weight_Quality", "Yield_Per_Vine_Quality", "Yield_Per_Hectare_Quality"]
  },
  "Cluster_Number_Quality": {
    "parent": "Quantity_Yield_Quality",
    "children": []
  },
  "Cluster_Weight_Quality": {
    "parent": "Quantity_Yield_Quality",
    "children": []
  },
  "Berry_Number_Per_Cluster_Quality": {
    "parent": "Quantity_Yield_Quality",
    "children": []
  },
  "Berry_Weight_Quality": {
    "parent": "Quantity_Yield_Quality",
    "children": []
  },
  "Yield_Per_Vine_Quality": {
    "parent": "Quantity_Yield_Quality",
    "children": []
  },
  "Yield_Per_Hectare_Quality": {
    "parent": "Quantity_Yield_Quality",
    "children": []
  },
  "Yield_Consistency_Quality": {
    "parent": "Yield_Quality",
    "children": ["Annual_Yield_Stability_Quality", "Spatial_Yield_Uniformity_Quality", "Vine_To_Vine_Yield_Variance_Quality"]
  },
  "Annual_Yield_Stability_Quality": {
    "parent": "Yield_Consistency_Quality",
    "children": []
  },
  "Spatial_Yield_Uniformity_Quality": {
    "parent": "Yield_Consistency_Quality",
    "children": []
  },
  "Vine_To_Vine_Yield_Variance_Quality": {
    "parent": "Yield_Consistency_Quality",
    "children": []
  },
  "Yield_Efficiency_Quality": {
    "parent": "Yield_Quality",
    "children": ["Yield_To_Pruning_Weight_Ratio_Quality_(Ravaz_Index)", "Leaf_Area_To_Fruit_Ratio_Quality", "Source_Sink_Balance_Quality"]
  },
  "Yield_To_Pruning_Weight_Ratio_Quality_(Ravaz_Index)": {
    "parent": "Yield_Efficiency_Quality",
    "children": []
  },
  "Leaf_Area_To_Fruit_Ratio_Quality": {
    "parent": "Yield_Efficiency_Quality",
    "children": []
  },
  "Source_Sink_Balance_Quality": {
    "parent": "Yield_Efficiency_Quality",
    "children": []
  },
  "Yield_Potential_Quality": {
    "parent": "Yield_Quality",
    "children": ["Bud_Fruitfulness_Quality", "Fruit_Set_Percentage_Quality", "Coulure_Susceptibility_Quality", "Millerandage_Incidence_Quality"]
  },
  "Bud_Fruitfulness_Quality": {
    "parent": "Yield_Potential_Quality",
    "children": []
  },
  "Fruit_Set_Percentage_Quality": {
    "parent": "Yield_Potential_Quality",
    "children": []
  },
  "Coulure_Susceptibility_Quality": {
    "parent": "Yield_Potential_Quality",
    "children": []
  },
  "Millerandage_Incidence_Quality": {
    "parent": "Yield_Potential_Quality",
    "children": []
  },
  "Vigor_Quality": {
    "parent": "Viticultural_Quality",
    "children": ["Vegetative_Growth_Vigor_Quality", "Vigor_Expression_Quality", "Vigor_Balance_Quality", "Vigor_Uniformity_Quality", "Vigor_Manipulation_Response_Quality"]
  },
  "Vegetative_Growth_Vigor_Quality": {
    "parent": "Vigor_Quality",
    "children": ["Shoot_Growth_Rate_Quality", "Internode_Length_Quality", "Shoot_Length_Quality", "Lateral_Shoot_Development_Quality"]
  },
  "Shoot_Growth_Rate_Quality": {
    "parent": "Vegetative_Growth_Vigor_Quality",
    "children": []
  },
  "Internode_Length_Quality": {
    "parent": "Vegetative_Growth_Vigor_Quality",
    "children": []
  },
  "Shoot_Length_Quality": {
    "parent": "Vegetative_Growth_Vigor_Quality",
    "children": []
  },
  "Lateral_Shoot_Development_Quality": {
    "parent": "Vegetative_Growth_Vigor_Quality",
    "children": []
  },
  "Vigor_Expression_Quality": {
    "parent": "Vigor_Quality",
    "children": ["Cane_Diameter_Quality", "Pruning_Weight_Quality", "Pruning_Weight_Per_Meter_Quality"]
  },
  "Cane_Diameter_Quality": {
    "parent": "Vigor_Expression_Quality",
    "children": []
  },
  "Pruning_Weight_Quality": {
    "parent": "Vigor_Expression_Quality",
    "children": []
  },
  "Pruning_Weight_Per_Meter_Quality": {
    "parent": "Vigor_Expression_Quality",
    "children": []
  },
  "Vigor_Balance_Quality": {
    "parent": "Vigor_Quality",
    "children": ["Vegetative_Reproductive_Balance_Quality", "Vine_Balance_Index_Quality", "Point_Quadrat_Index_Quality"]
  },
  "Vegetative_Reproductive_Balance_Quality": {
    "parent": "Vigor_Balance_Quality",
    "children": []
  },
  "Vine_Balance_Index_Quality": {
    "parent": "Vigor_Balance_Quality",
    "children": []
  },
  "Point_Quadrat_Index_Quality": {
    "parent": "Vigor_Balance_Quality",
    "children": []
  },
  "Vigor_Uniformity_Quality": {
    "parent": "Vigor_Quality",
    "children": ["Within_Vine_Vigor_Uniformity_Quality", "Block_Vigor_Uniformity_Quality", "NDVI_Uniformity_Quality"]
  },
  "Within_Vine_Vigor_Uniformity_Quality": {
    "parent": "Vigor_Uniformity_Quality",
    "children": []
  },
  "Block_Vigor_Uniformity_Quality": {
    "parent": "Vigor_Uniformity_Quality",
    "children": []
  },
  "NDVI_Uniformity_Quality": {
    "parent": "Vigor_Uniformity_Quality",
    "children": []
  },
  "Vigor_Manipulation_Response_Quality": {
    "parent": "Vigor_Quality",
    "children": ["Topping_Response_Quality", "Hedging_Response_Quality", "Shoot_Thinning_Response_Quality"]
  },
  "Topping_Response_Quality": {
    "parent": "Vigor_Manipulation_Response_Quality",
    "children": []
  },
  "Hedging_Response_Quality": {
    "parent": "Vigor_Manipulation_Response_Quality",
    "children": []
  },
  "Shoot_Thinning_Response_Quality": {
    "parent": "Vigor_Manipulation_Response_Quality",
    "children": []
  },
  "Canopy_Density_Quality": {
    "parent": "Viticultural_Quality",
    "children": ["Canopy_Porosity_Quality", "Leaf_Layer_Number_Quality", "Canopy_Dimension_Quality", "Canopy_Gaps_Quality", "Canopy_Microclimate_Quality", "Leaf_Removal_Response_Quality"]
  },
  "Canopy_Porosity_Quality": {
    "parent": "Canopy_Density_Quality",
    "children": ["Light_Penetration_Quality", "Air_Circulation_Quality", "Spray_Penetration_Quality"]
  },
  "Light_Penetration_Quality": {
    "parent": "Canopy_Porosity_Quality",
    "children": []
  },
  "Air_Circulation_Quality": {
    "parent": "Canopy_Porosity_Quality",
    "children": []
  },
  "Spray_Penetration_Quality": {
    "parent": "Canopy_Porosity_Quality",
    "children": []
  },
  "Leaf_Layer_Number_Quality": {
    "parent": "Canopy_Density_Quality",
    "children": ["Fruit_Zone_Leaf_Layers_Quality", "External_Leaf_Layer_Quality", "Interior_Leaf_Layer_Quality"]
  },
  "Fruit_Zone_Leaf_Layers_Quality": {
    "parent": "Leaf_Layer_Number_Quality",
    "children": []
  },
  "External_Leaf_Layer_Quality": {
    "parent": "Leaf_Layer_Number_Quality",
    "children": []
  },
  "Interior_Leaf_Layer_Quality": {
    "parent": "Leaf_Layer_Number_Quality",
    "children": []
  },
  "Canopy_Dimension_Quality": {
    "parent": "Canopy_Density_Quality",
    "children": ["Canopy_Height_Quality", "Canopy_Width_Quality", "Canopy_Surface_Area_Quality"]
  },
  "Canopy_Height_Quality": {
    "parent": "Canopy_Dimension_Quality",
    "children": []
  },
  "Canopy_Width_Quality": {
    "parent": "Canopy_Dimension_Quality",
    "children": []
  },
  "Canopy_Surface_Area_Quality": {
    "parent": "Canopy_Dimension_Quality",
    "children": []
  },
  "Canopy_Gaps_Quality": {
    "parent": "Canopy_Density_Quality",
    "children": ["Gap_Frequency_Quality", "Gap_Size_Quality", "Cluster_Exposure_Quality"]
  },
  "Gap_Frequency_Quality": {
    "parent": "Canopy_Gaps_Quality",
    "children": []
  },
  "Gap_Size_Quality": {
    "parent": "Canopy_Gaps_Quality",
    "children": []
  },
  "Cluster_Exposure_Quality": {
    "parent": "Canopy_Gaps_Quality",
    "children": []
  },
  "Canopy_Microclimate_Quality": {
    "parent": "Canopy_Density_Quality",
    "children": ["Fruit_Zone_Temperature_Quality", "Fruit_Zone_Humidity_Quality", "Fruit_Zone_Light_Intensity_Quality"]
  },
  "Fruit_Zone_Temperature_Quality": {
    "parent": "Canopy_Microclimate_Quality",
    "children": []
  },
  "Fruit_Zone_Humidity_Quality": {
    "parent": "Canopy_Microclimate_Quality",
    "children": []
  },
  "Fruit_Zone_Light_Intensity_Quality": {
    "parent": "Canopy_Microclimate_Quality",
    "children": []
  },
  "Leaf_Removal_Response_Quality": {
    "parent": "Canopy_Density_Quality",
    "children": ["Defoliation_Tolerance_Quality", "Refoliation_Capacity_Quality"]
  },
  "Defoliation_Tolerance_Quality": {
    "parent": "Leaf_Removal_Response_Quality",
    "children": []
  },
  "Refoliation_Capacity_Quality": {
    "parent": "Leaf_Removal_Response_Quality",
    "children": []
  },
  "Training_System_Suitability_Quality": {
    "parent": "Viticultural_Quality",
    "children": ["Growth_Habit_Compatibility_Quality", "Trellis_Adaptation_Quality", "Mechanization_Suitability_Quality", "Training_Response_Quality"]
  },
  "Growth_Habit_Compatibility_Quality": {
    "parent": "Training_System_Suitability_Quality",
    "children": ["Upright_Growth_Suitability_Quality", "Trailing_Growth_Suitability_Quality", "Sprawling_Tendency_Quality"]
  },
  "Upright_Growth_Suitability_Quality": {
    "parent": "Growth_Habit_Compatibility_Quality",
    "children": []
  },
  "Trailing_Growth_Suitability_Quality": {
    "parent": "Growth_Habit_Compatibility_Quality",
    "children": []
  },
  "Sprawling_Tendency_Quality": {
    "parent": "Growth_Habit_Compatibility_Quality",
    "children": []
  },
  "Trellis_Adaptation_Quality": {
    "parent": "Training_System_Suitability_Quality",
    "children": ["VSP_Suitability_Quality_(Vertical_Shoot_Positioning)", "GDC_Suitability_Quality_(Geneva_Double_Curtain)", "Lyre_Suitability_Quality", "Pergola_Suitability_Quality", "Gobelet_Suitability_Quality", "Guyot_Suitability_Quality", "Cordon_Suitability_Quality"]
  },
  "VSP_Suitability_Quality_(Vertical_Shoot_Positioning)": {
    "parent": "Trellis_Adaptation_Quality",
    "children": []
  },
  "GDC_Suitability_Quality_(Geneva_Double_Curtain)": {
    "parent": "Trellis_Adaptation_Quality",
    "children": []
  },
  "Lyre_Suitability_Quality": {
    "parent": "Trellis_Adaptation_Quality",
    "children": []
  },
  "Pergola_Suitability_Quality": {
    "parent": "Trellis_Adaptation_Quality",
    "children": []
  },
  "Gobelet_Suitability_Quality": {
    "parent": "Trellis_Adaptation_Quality",
    "children": []
  },
  "Guyot_Suitability_Quality": {
    "parent": "Trellis_Adaptation_Quality",
    "children": []
  },
  "Cordon_Suitability_Quality": {
    "parent": "Trellis_Adaptation_Quality",
    "children": []
  },
  "Mechanization_Suitability_Quality": {
    "parent": "Training_System_Suitability_Quality",
    "children": ["Mechanical_Pruning_Suitability_Quality", "Mechanical_Harvesting_Suitability_Quality", "Mechanical_Leaf_Removal_Suitability_Quality"]
  },
  "Mechanical_Pruning_Suitability_Quality": {
    "parent": "Mechanization_Suitability_Quality",
    "children": []
  },
  "Mechanical_Harvesting_Suitability_Quality": {
    "parent": "Mechanization_Suitability_Quality",
    "children": []
  },
  "Mechanical_Leaf_Removal_Suitability_Quality": {
    "parent": "Mechanization_Suitability_Quality",
    "children": []
  },
  "Training_Response_Quality": {
    "parent": "Training_System_Suitability_Quality",
    "children": ["Bending_Tolerance_Quality", "Positioning_Ease_Quality", "Tendril_Attachment_Quality"]
  },
  "Bending_Tolerance_Quality": {
    "parent": "Training_Response_Quality",
    "children": []
  },
  "Positioning_Ease_Quality": {
    "parent": "Training_Response_Quality",
    "children": []
  },
  "Tendril_Attachment_Quality": {
    "parent": "Training_Response_Quality",
    "children": []
  },
  "Harvest_Timing_Quality": {
    "parent": "Viticultural_Quality",
    "children": ["Harvest_Window_Quality", "Harvest_Timing_Indicators_Quality", "Harvest_Condition_Quality", "Post_Optimal_Decline_Quality", "Harvest_Logistics_Quality"]
  },
  "Harvest_Window_Quality": {
    "parent": "Harvest_Timing_Quality",
    "children": ["Optimal_Harvest_Date_Quality", "Harvest_Window_Duration_Quality"]
  },
  "Optimal_Harvest_Date_Quality": {
    "parent": "Harvest_Window_Quality",
    "children": []
  },
  "Harvest_Window_Duration_Quality": {
    "parent": "Harvest_Window_Quality",
    "children": []
  },
  "Harvest_Timing_Indicators_Quality": {
    "parent": "Harvest_Timing_Quality",
    "children": ["Berry_Sampling_Reliability_Quality", "Maturity_Monitoring_Precision_Quality", "Vintage_Predictability_Quality"]
  },
  "Berry_Sampling_Reliability_Quality": {
    "parent": "Harvest_Timing_Indicators_Quality",
    "children": []
  },
  "Maturity_Monitoring_Precision_Quality": {
    "parent": "Harvest_Timing_Indicators_Quality",
    "children": []
  },
  "Vintage_Predictability_Quality": {
    "parent": "Harvest_Timing_Indicators_Quality",
    "children": []
  },
  "Harvest_Condition_Quality": {
    "parent": "Harvest_Timing_Quality",
    "children": ["Weather_Dependency_Quality", "Morning_Harvest_Suitability_Quality", "Night_Harvest_Suitability_Quality"]
  },
  "Weather_Dependency_Quality": {
    "parent": "Harvest_Condition_Quality",
    "children": []
  },
  "Morning_Harvest_Suitability_Quality": {
    "parent": "Harvest_Condition_Quality",
    "children": []
  },
  "Night_Harvest_Suitability_Quality": {
    "parent": "Harvest_Condition_Quality",
    "children": []
  },
  "Post_Optimal_Decline_Quality": {
    "parent": "Harvest_Timing_Quality",
    "children": ["Sugar_Accumulation_Plateau_Quality", "Acid_Decline_Rate_Quality", "Aroma_Degradation_Rate_Quality", "Over_Ripening_Tolerance_Quality"]
  },
  "Sugar_Accumulation_Plateau_Quality": {
    "parent": "Post_Optimal_Decline_Quality",
    "children": []
  },
  "Acid_Decline_Rate_Quality": {
    "parent": "Post_Optimal_Decline_Quality",
    "children": []
  },
  "Aroma_Degradation_Rate_Quality": {
    "parent": "Post_Optimal_Decline_Quality",
    "children": []
  },
  "Over_Ripening_Tolerance_Quality": {
    "parent": "Post_Optimal_Decline_Quality",
    "children": []
  },
  "Harvest_Logistics_Quality": {
    "parent": "Harvest_Timing_Quality",
    "children": ["Picking_Ease_Quality", "Cluster_Accessibility_Quality", "Fruit_Integrity_At_Harvest_Quality", "Transport_Tolerance_Quality"]
  },
  "Picking_Ease_Quality": {
    "parent": "Harvest_Logistics_Quality",
    "children": []
  },
  "Cluster_Accessibility_Quality": {
    "parent": "Harvest_Logistics_Quality",
    "children": []
  },
  "Fruit_Integrity_At_Harvest_Quality": {
    "parent": "Harvest_Logistics_Quality",
    "children": []
  },
  "Transport_Tolerance_Quality": {
    "parent": "Harvest_Logistics_Quality",
    "children": []
  },
  "Stress_Response_Quality": {
    "parent": "Grapevine_Quality",
    "children": ["Drought_Stress_Indicator_Quality", "Heat_Stress_Indicator_Quality", "Cold_Stress_Indicator_Quality", "Pathogen_Infection_Indicator_Quality", "Nutrient_Deficiency_Indicator_Quality"]
  },
  "Drought_Stress_Indicator_Quality": {
    "parent": "Stress_Response_Quality",
    "children": ["Water_Deficit_Severity_Quality", "Drought_Symptom_Expression_Quality", "Stomatal_Response_To_Drought_Quality", "Osmotic_Adjustment_Quality", "Drought_Recovery_Quality"]
  },
  "Water_Deficit_Severity_Quality": {
    "parent": "Drought_Stress_Indicator_Quality",
    "children": ["Mild_Water_Stress_Quality", "Moderate_Water_Stress_Quality", "Severe_Water_Stress_Quality"]
  },
  "Mild_Water_Stress_Quality": {
    "parent": "Water_Deficit_Severity_Quality",
    "children": []
  },
  "Moderate_Water_Stress_Quality": {
    "parent": "Water_Deficit_Severity_Quality",
    "children": []
  },
  "Severe_Water_Stress_Quality": {
    "parent": "Water_Deficit_Severity_Quality",
    "children": []
  },
  "Drought_Symptom_Expression_Quality": {
    "parent": "Drought_Stress_Indicator_Quality",
    "children": ["Leaf_Wilting_Quality", "Leaf_Rolling_Quality", "Tendril_Drooping_Quality", "Shoot_Tip_Desiccation_Quality"]
  },
  "Leaf_Wilting_Quality": {
    "parent": "Drought_Symptom_Expression_Quality",
    "children": []
  },
  "Leaf_Rolling_Quality": {
    "parent": "Drought_Symptom_Expression_Quality",
    "children": []
  },
  "Tendril_Drooping_Quality": {
    "parent": "Drought_Symptom_Expression_Quality",
    "children": []
  },
  "Shoot_Tip_Desiccation_Quality": {
    "parent": "Drought_Symptom_Expression_Quality",
    "children": []
  },
  "Stomatal_Response_To_Drought_Quality": {
    "parent": "Drought_Stress_Indicator_Quality",
    "children": ["Stomatal_Closure_Sensitivity_Quality", "Stomatal_Recovery_Rate_Quality", "Isohydric_Behavior_Quality", "Anisohydric_Behavior_Quality"]
  },
  "Stomatal_Closure_Sensitivity_Quality": {
    "parent": "Stomatal_Response_To_Drought_Quality",
    "children": []
  },
  "Stomatal_Recovery_Rate_Quality": {
    "parent": "Stomatal_Response_To_Drought_Quality",
    "children": []
  },
  "Isohydric_Behavior_Quality": {
    "parent": "Stomatal_Response_To_Drought_Quality",
    "children": []
  },
  "Anisohydric_Behavior_Quality": {
    "parent": "Stomatal_Response_To_Drought_Quality",
    "children": []
  },
  "Osmotic_Adjustment_Quality": {
    "parent": "Drought_Stress_Indicator_Quality",
    "children": ["Osmolyte_Accumulation_Quality", "Proline_Accumulation_Quality", "Soluble_Sugar_Accumulation_Quality"]
  },
  "Osmolyte_Accumulation_Quality": {
    "parent": "Osmotic_Adjustment_Quality",
    "children": []
  },
  "Proline_Accumulation_Quality": {
    "parent": "Osmotic_Adjustment_Quality",
    "children": []
  },
  "Soluble_Sugar_Accumulation_Quality": {
    "parent": "Osmotic_Adjustment_Quality",
    "children": []
  },
  "Drought_Recovery_Quality": {
    "parent": "Drought_Stress_Indicator_Quality",
    "children": ["Rehydration_Rate_Quality", "Post_Drought_Growth_Resumption_Quality", "Hydraulic_Recovery_Quality"]
  },
  "Rehydration_Rate_Quality": {
    "parent": "Drought_Recovery_Quality",
    "children": []
  },
  "Post_Drought_Growth_Resumption_Quality": {
    "parent": "Drought_Recovery_Quality",
    "children": []
  },
  "Hydraulic_Recovery_Quality": {
    "parent": "Drought_Recovery_Quality",
    "children": []
  },
  "Heat_Stress_Indicator_Quality": {
    "parent": "Stress_Response_Quality",
    "children": ["Heat_Damage_Severity_Quality", "Thermal_Tolerance_Quality", "Heat_Shock_Response_Quality", "Heat_Avoidance_Quality", "Heat_Impact_On_Development_Quality"]
  },
  "Heat_Damage_Severity_Quality": {
    "parent": "Heat_Stress_Indicator_Quality",
    "children": ["Sunburn_Severity_Quality", "Heat_Necrosis_Quality", "Leaf_Scorch_Quality"]
  },
  "Sunburn_Severity_Quality": {
    "parent": "Heat_Damage_Severity_Quality",
    "children": []
  },
  "Heat_Necrosis_Quality": {
    "parent": "Heat_Damage_Severity_Quality",
    "children": []
  },
  "Leaf_Scorch_Quality": {
    "parent": "Heat_Damage_Severity_Quality",
    "children": []
  },
  "Thermal_Tolerance_Quality": {
    "parent": "Heat_Stress_Indicator_Quality",
    "children": ["Membrane_Thermostability_Quality", "Photosynthetic_Heat_Tolerance_Quality", "Enzyme_Thermostability_Quality"]
  },
  "Membrane_Thermostability_Quality": {
    "parent": "Thermal_Tolerance_Quality",
    "children": []
  },
  "Photosynthetic_Heat_Tolerance_Quality": {
    "parent": "Thermal_Tolerance_Quality",
    "children": []
  },
  "Enzyme_Thermostability_Quality": {
    "parent": "Thermal_Tolerance_Quality",
    "children": []
  },
  "Heat_Shock_Response_Quality": {
    "parent": "Heat_Stress_Indicator_Quality",
    "children": ["Heat_Shock_Protein_Expression_Quality", "Antioxidant_Response_Quality", "Reactive_Oxygen_Species_Scavenging_Quality"]
  },
  "Heat_Shock_Protein_Expression_Quality": {
    "parent": "Heat_Shock_Response_Quality",
    "children": []
  },
  "Antioxidant_Response_Quality": {
    "parent": "Heat_Shock_Response_Quality",
    "children": []
  },
  "Reactive_Oxygen_Species_Scavenging_Quality": {
    "parent": "Heat_Shock_Response_Quality",
    "children": []
  },
  "Heat_Avoidance_Quality": {
    "parent": "Heat_Stress_Indicator_Quality",
    "children": ["Leaf_Angle_Adjustment_Quality", "Transpirational_Cooling_Capacity_Quality", "Reflectance_Increase_Quality"]
  },
  "Leaf_Angle_Adjustment_Quality": {
    "parent": "Heat_Avoidance_Quality",
    "children": []
  },
  "Transpirational_Cooling_Capacity_Quality": {
    "parent": "Heat_Avoidance_Quality",
    "children": []
  },
  "Reflectance_Increase_Quality": {
    "parent": "Heat_Avoidance_Quality",
    "children": []
  },
  "Heat_Impact_On_Development_Quality": {
    "parent": "Heat_Stress_Indicator_Quality",
    "children": ["Anthocyanin_Degradation_Quality", "Aroma_Compound_Volatilization_Quality", "Acid_Respiration_Loss_Quality", "Berry_Shrivel_Quality"]
  },
  "Anthocyanin_Degradation_Quality": {
    "parent": "Heat_Impact_On_Development_Quality",
    "children": []
  },
  "Aroma_Compound_Volatilization_Quality": {
    "parent": "Heat_Impact_On_Development_Quality",
    "children": []
  },
  "Acid_Respiration_Loss_Quality": {
    "parent": "Heat_Impact_On_Development_Quality",
    "children": []
  },
  "Berry_Shrivel_Quality": {
    "parent": "Heat_Impact_On_Development_Quality",
    "children": []
  },
  "Cold_Stress_Indicator_Quality": {
    "parent": "Stress_Response_Quality",
    "children": ["Frost_Damage_Severity_Quality", "Tissue_Freezing_Tolerance_Quality", "Cold_Acclimation_Quality", "Cryoprotection_Quality", "Cold_Damage_Symptom_Quality", "Cold_Recovery_Quality"]
  },
  "Frost_Damage_Severity_Quality": {
    "parent": "Cold_Stress_Indicator_Quality",
    "children": ["Spring_Frost_Damage_Quality", "Autumn_Frost_Damage_Quality", "Winter_Freeze_Damage_Quality"]
  },
  "Spring_Frost_Damage_Quality": {
    "parent": "Frost_Damage_Severity_Quality",
    "children": []
  },
  "Autumn_Frost_Damage_Quality": {
    "parent": "Frost_Damage_Severity_Quality",
    "children": []
  },
  "Winter_Freeze_Damage_Quality": {
    "parent": "Frost_Damage_Severity_Quality",
    "children": []
  },
  "Tissue_Freezing_Tolerance_Quality": {
    "parent": "Cold_Stress_Indicator_Quality",
    "children": ["Bud_Freezing_Tolerance_Quality", "Shoot_Freezing_Tolerance_Quality", "Trunk_Freezing_Tolerance_Quality", "Root_Freezing_Tolerance_Quality"]
  },
  "Bud_Freezing_Tolerance_Quality": {
    "parent": "Tissue_Freezing_Tolerance_Quality",
    "children": []
  },
  "Shoot_Freezing_Tolerance_Quality": {
    "parent": "Tissue_Freezing_Tolerance_Quality",
    "children": []
  },
  "Trunk_Freezing_Tolerance_Quality": {
    "parent": "Tissue_Freezing_Tolerance_Quality",
    "children": []
  },
  "Root_Freezing_Tolerance_Quality": {
    "parent": "Tissue_Freezing_Tolerance_Quality",
    "children": []
  },
  "Cold_Acclimation_Quality": {
    "parent": "Cold_Stress_Indicator_Quality",
    "children": ["Acclimation_Rate_Quality", "Maximum_Hardiness_Level_Quality", "Acclimation_Stability_Quality"]
  },
  "Acclimation_Rate_Quality": {
    "parent": "Cold_Acclimation_Quality",
    "children": []
  },
  "Maximum_Hardiness_Level_Quality": {
    "parent": "Cold_Acclimation_Quality",
    "children": []
  },
  "Acclimation_Stability_Quality": {
    "parent": "Cold_Acclimation_Quality",
    "children": []
  },
  "Cryoprotection_Quality": {
    "parent": "Cold_Stress_Indicator_Quality",
    "children": ["Sugar_Cryoprotection_Quality", "Protein_Cryoprotection_Quality", "Membrane_Lipid_Adjustment_Quality"]
  },
  "Sugar_Cryoprotection_Quality": {
    "parent": "Cryoprotection_Quality",
    "children": []
  },
  "Protein_Cryoprotection_Quality": {
    "parent": "Cryoprotection_Quality",
    "children": []
  },
  "Membrane_Lipid_Adjustment_Quality": {
    "parent": "Cryoprotection_Quality",
    "children": []
  },
  "Cold_Damage_Symptom_Quality": {
    "parent": "Cold_Stress_Indicator_Quality",
    "children": ["Bud_Browning_Quality", "Cambium_Browning_Quality", "Phloem_Necrosis_Quality", "Xylem_Discoloration_Quality"]
  },
  "Bud_Browning_Quality": {
    "parent": "Cold_Damage_Symptom_Quality",
    "children": []
  },
  "Cambium_Browning_Quality": {
    "parent": "Cold_Damage_Symptom_Quality",
    "children": []
  },
  "Phloem_Necrosis_Quality": {
    "parent": "Cold_Damage_Symptom_Quality",
    "children": []
  },
  "Xylem_Discoloration_Quality": {
    "parent": "Cold_Damage_Symptom_Quality",
    "children": []
  },
  "Cold_Recovery_Quality": {
    "parent": "Cold_Stress_Indicator_Quality",
    "children": ["Secondary_Bud_Activation_Quality", "Trunk_Recovery_Capacity_Quality", "Crown_Gall_Susceptibility_Quality"]
  },
  "Secondary_Bud_Activation_Quality": {
    "parent": "Cold_Recovery_Quality",
    "children": []
  },
  "Trunk_Recovery_Capacity_Quality": {
    "parent": "Cold_Recovery_Quality",
    "children": []
  },
  "Crown_Gall_Susceptibility_Quality": {
    "parent": "Cold_Recovery_Quality",
    "children": []
  },
  "Pathogen_Infection_Indicator_Quality": {
    "parent": "Stress_Response_Quality",
    "children": ["Disease_Severity_Quality", "Fungal_Infection_Indicator_Quality", "Bacterial_Infection_Indicator_Quality", "Viral_Infection_Indicator_Quality", "Defense_Response_Quality", "Disease_Tolerance_Quality"]
  },
  "Disease_Severity_Quality": {
    "parent": "Pathogen_Infection_Indicator_Quality",
    "children": ["Infection_Incidence_Quality", "Infection_Intensity_Quality", "Lesion_Coverage_Quality"]
  },
  "Infection_Incidence_Quality": {
    "parent": "Disease_Severity_Quality",
    "children": []
  },
  "Infection_Intensity_Quality": {
    "parent": "Disease_Severity_Quality",
    "children": []
  },
  "Lesion_Coverage_Quality": {
    "parent": "Disease_Severity_Quality",
    "children": []
  },
  "Fungal_Infection_Indicator_Quality": {
    "parent": "Pathogen_Infection_Indicator_Quality",
    "children": ["Downy_Mildew_Symptom_Quality_(Plasmopara_viticola)", "Powdery_Mildew_Symptom_Quality_(Erysiphe_necator)", "Botrytis_Symptom_Quality_(Botrytis_cinerea)", "Black_Rot_Symptom_Quality_(Guignardia_bidwellii)", "Esca_Symptom_Quality", "Eutypa_Dieback_Symptom_Quality"]
  },
  "Downy_Mildew_Symptom_Quality_(Plasmopara_viticola)": {
    "parent": "Fungal_Infection_Indicator_Quality",
    "children": []
  },
  "Powdery_Mildew_Symptom_Quality_(Erysiphe_necator)": {
    "parent": "Fungal_Infection_Indicator_Quality",
    "children": []
  },
  "Botrytis_Symptom_Quality_(Botrytis_cinerea)": {
    "parent": "Fungal_Infection_Indicator_Quality",
    "children": []
  },
  "Black_Rot_Symptom_Quality_(Guignardia_bidwellii)": {
    "parent": "Fungal_Infection_Indicator_Quality",
    "children": []
  },
  "Esca_Symptom_Quality": {
    "parent": "Fungal_Infection_Indicator_Quality",
    "children": []
  },
  "Eutypa_Dieback_Symptom_Quality": {
    "parent": "Fungal_Infection_Indicator_Quality",
    "children": []
  },
  "Bacterial_Infection_Indicator_Quality": {
    "parent": "Pathogen_Infection_Indicator_Quality",
    "children": ["Crown_Gall_Symptom_Quality_(Agrobacterium_vitis)", "Pierces_Disease_Symptom_Quality_(Xylella_fastidiosa)"]
  },
  "Crown_Gall_Symptom_Quality_(Agrobacterium_vitis)": {
    "parent": "Bacterial_Infection_Indicator_Quality",
    "children": []
  },
  "Pierces_Disease_Symptom_Quality_(Xylella_fastidiosa)": {
    "parent": "Bacterial_Infection_Indicator_Quality",
    "children": []
  },
  "Viral_Infection_Indicator_Quality": {
    "parent": "Pathogen_Infection_Indicator_Quality",
    "children": ["Leafroll_Symptom_Quality", "Fanleaf_Symptom_Quality", "Red_Blotch_Symptom_Quality", "Fleck_Symptom_Quality"]
  },
  "Leafroll_Symptom_Quality": {
    "parent": "Viral_Infection_Indicator_Quality",
    "children": []
  },
  "Fanleaf_Symptom_Quality": {
    "parent": "Viral_Infection_Indicator_Quality",
    "children": []
  },
  "Red_Blotch_Symptom_Quality": {
    "parent": "Viral_Infection_Indicator_Quality",
    "children": []
  },
  "Fleck_Symptom_Quality": {
    "parent": "Viral_Infection_Indicator_Quality",
    "children": []
  },
  "Defense_Response_Quality": {
    "parent": "Pathogen_Infection_Indicator_Quality",
    "children": ["Hypersensitive_Response_Quality", "Phytoalexin_Production_Quality", "Pathogenesis_Related_Protein_Induction_Quality", "Systemic_Acquired_Resistance_Quality"]
  },
  "Hypersensitive_Response_Quality": {
    "parent": "Defense_Response_Quality",
    "children": []
  },
  "Phytoalexin_Production_Quality": {
    "parent": "Defense_Response_Quality",
    "children": []
  },
  "Pathogenesis_Related_Protein_Induction_Quality": {
    "parent": "Defense_Response_Quality",
    "children": []
  },
  "Systemic_Acquired_Resistance_Quality": {
    "parent": "Defense_Response_Quality",
    "children": []
  },
  "Disease_Tolerance_Quality": {
    "parent": "Pathogen_Infection_Indicator_Quality",
    "children": ["Symptom_Suppression_Quality", "Yield_Maintenance_Under_Infection_Quality"]
  },
  "Symptom_Suppression_Quality": {
    "parent": "Disease_Tolerance_Quality",
    "children": []
  },
  "Yield_Maintenance_Under_Infection_Quality": {
    "parent": "Disease_Tolerance_Quality",
    "children": []
  },
  "Nutrient_Deficiency_Indicator_Quality": {
    "parent": "Stress_Response_Quality",
    "children": ["Macronutrient_Deficiency_Symptom_Quality", "Micronutrient_Deficiency_Symptom_Quality", "Nutrient_Toxicity_Symptom_Quality", "Deficiency_Severity_Quality"]
  },
  "Macronutrient_Deficiency_Symptom_Quality": {
    "parent": "Nutrient_Deficiency_Indicator_Quality",
    "children": ["Nitrogen_Deficiency_Symptom_Quality", "Phosphorus_Deficiency_Symptom_Quality", "Potassium_Deficiency_Symptom_Quality", "Magnesium_Deficiency_Symptom_Quality", "Calcium_Deficiency_Symptom_Quality"]
  },
  "Nitrogen_Deficiency_Symptom_Quality": {
    "parent": "Macronutrient_Deficiency_Symptom_Quality",
    "children": ["Chlorosis_Pattern_Quality_(N)", "Growth_Reduction_Quality_(N)", "Early_Senescence_Quality_(N)"]
  },
  "Chlorosis_Pattern_Quality_(N)": {
    "parent": "Nitrogen_Deficiency_Symptom_Quality",
    "children": []
  },
  "Growth_Reduction_Quality_(N)": {
    "parent": "Nitrogen_Deficiency_Symptom_Quality",
    "children": []
  },
  "Early_Senescence_Quality_(N)": {
    "parent": "Nitrogen_Deficiency_Symptom_Quality",
    "children": []
  },
  "Phosphorus_Deficiency_Symptom_Quality": {
    "parent": "Macronutrient_Deficiency_Symptom_Quality",
    "children": ["Anthocyanin_Accumulation_Quality_(P)", "Root_Growth_Limitation_Quality_(P)"]
  },
  "Anthocyanin_Accumulation_Quality_(P)": {
    "parent": "Phosphorus_Deficiency_Symptom_Quality",
    "children": []
  },
  "Root_Growth_Limitation_Quality_(P)": {
    "parent": "Phosphorus_Deficiency_Symptom_Quality",
    "children": []
  },
  "Potassium_Deficiency_Symptom_Quality": {
    "parent": "Macronutrient_Deficiency_Symptom_Quality",
    "children": ["Marginal_Leaf_Necrosis_Quality_(K)", "Berry_Ripening_Delay_Quality_(K)"]
  },
  "Marginal_Leaf_Necrosis_Quality_(K)": {
    "parent": "Potassium_Deficiency_Symptom_Quality",
    "children": []
  },
  "Berry_Ripening_Delay_Quality_(K)": {
    "parent": "Potassium_Deficiency_Symptom_Quality",
    "children": []
  },
  "Magnesium_Deficiency_Symptom_Quality": {
    "parent": "Macronutrient_Deficiency_Symptom_Quality",
    "children": ["Interveinal_Chlorosis_Quality_(Mg)", "Grape_Stem_Necrosis_Quality"]
  },
  "Interveinal_Chlorosis_Quality_(Mg)": {
    "parent": "Magnesium_Deficiency_Symptom_Quality",
    "children": []
  },
  "Grape_Stem_Necrosis_Quality": {
    "parent": "Magnesium_Deficiency_Symptom_Quality",
    "children": []
  },
  "Calcium_Deficiency_Symptom_Quality": {
    "parent": "Macronutrient_Deficiency_Symptom_Quality",
    "children": ["Bunch_Stem_Necrosis_Quality_(Ca)", "Tip_Burn_Quality_(Ca)"]
  },
  "Bunch_Stem_Necrosis_Quality_(Ca)": {
    "parent": "Calcium_Deficiency_Symptom_Quality",
    "children": []
  },
  "Tip_Burn_Quality_(Ca)": {
    "parent": "Calcium_Deficiency_Symptom_Quality",
    "children": []
  },
  "Micronutrient_Deficiency_Symptom_Quality": {
    "parent": "Nutrient_Deficiency_Indicator_Quality",
    "children": ["Iron_Deficiency_Symptom_Quality", "Zinc_Deficiency_Symptom_Quality", "Boron_Deficiency_Symptom_Quality", "Manganese_Deficiency_Symptom_Quality"]
  },
  "Iron_Deficiency_Symptom_Quality": {
    "parent": "Micronutrient_Deficiency_Symptom_Quality",
    "children": ["Lime_Induced_Chlorosis_Quality", "Interveinal_Yellowing_Quality_(Fe)"]
  },
  "Lime_Induced_Chlorosis_Quality": {
    "parent": "Iron_Deficiency_Symptom_Quality",
    "children": []
  },
  "Interveinal_Yellowing_Quality_(Fe)": {
    "parent": "Iron_Deficiency_Symptom_Quality",
    "children": []
  },
  "Zinc_Deficiency_Symptom_Quality": {
    "parent": "Micronutrient_Deficiency_Symptom_Quality",
    "children": ["Little_Leaf_Quality", "Millerandage_Induction_Quality_(Zn)"]
  },
  "Little_Leaf_Quality": {
    "parent": "Zinc_Deficiency_Symptom_Quality",
    "children": []
  },
  "Millerandage_Induction_Quality_(Zn)": {
    "parent": "Zinc_Deficiency_Symptom_Quality",
    "children": []
  },
  "Boron_Deficiency_Symptom_Quality": {
    "parent": "Micronutrient_Deficiency_Symptom_Quality",
    "children": ["Hen_And_Chicken_Quality", "Poor_Fruit_Set_Quality_(B)"]
  },
  "Hen_And_Chicken_Quality": {
    "parent": "Boron_Deficiency_Symptom_Quality",
    "children": []
  },
  "Poor_Fruit_Set_Quality_(B)": {
    "parent": "Boron_Deficiency_Symptom_Quality",
    "children": []
  },
  "Manganese_Deficiency_Symptom_Quality": {
    "parent": "Micronutrient_Deficiency_Symptom_Quality",
    "children": ["Interveinal_Chlorosis_Quality_(Mn)"]
  },
  "Interveinal_Chlorosis_Quality_(Mn)": {
    "parent": "Manganese_Deficiency_Symptom_Quality",
    "children": []
  },
  "Nutrient_Toxicity_Symptom_Quality": {
    "parent": "Nutrient_Deficiency_Indicator_Quality",
    "children": ["Boron_Toxicity_Quality", "Sodium_Toxicity_Quality", "Chloride_Toxicity_Quality"]
  },
  "Boron_Toxicity_Quality": {
    "parent": "Nutrient_Toxicity_Symptom_Quality",
    "children": []
  },
  "Sodium_Toxicity_Quality": {
    "parent": "Nutrient_Toxicity_Symptom_Quality",
    "children": []
  },
  "Chloride_Toxicity_Quality": {
    "parent": "Nutrient_Toxicity_Symptom_Quality",
    "children": []
  },
  "Deficiency_Severity_Quality": {
    "parent": "Nutrient_Deficiency_Indicator_Quality",
    "children": ["Mild_Deficiency_Quality", "Moderate_Deficiency_Quality", "Severe_Deficiency_Quality", "Latent_Deficiency_Quality"]
  },
  "Mild_Deficiency_Quality": {
    "parent": "Deficiency_Severity_Quality",
    "children": []
  },
  "Moderate_Deficiency_Quality": {
    "parent": "Deficiency_Severity_Quality",
    "children": []
  },
  "Severe_Deficiency_Quality": {
    "parent": "Deficiency_Severity_Quality",
    "children": []
  },
  "Latent_Deficiency_Quality": {
    "parent": "Deficiency_Severity_Quality",
    "children": []
  },

  /* ── Grapevine Disposition (BFO_0000016) ── */

  "Grapevine_Disposition": {
    "bfo": "BFO_0000016",
    "label": "disposition",
    "children": ["Biotic_Stress_Resistance_Disposition", "Abiotic_Stress_Tolerance_Disposition", "Growth_And_Development_Disposition", "Reproductive_Disposition", "Phenological_Timing_Disposition", "Nutrient_Acquisition_Disposition", "Water_Relations_Disposition", "Compatibility_Disposition", "Quality_Potential_Disposition", "Longevity_And_Resilience_Disposition"]
  },
  "Biotic_Stress_Resistance_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Pathogen_Resistance_Disposition", "Pest_Resistance_Disposition", "Defense_Mechanism_Disposition"]
  },
  "Pathogen_Resistance_Disposition": {
    "parent": "Biotic_Stress_Resistance_Disposition",
    "children": ["Fungal_Resistance_Disposition", "Viral_Resistance_Disposition", "Bacterial_Resistance_Disposition", "Phytoplasma_Resistance_Disposition"]
  },
  "Fungal_Resistance_Disposition": {
    "parent": "Pathogen_Resistance_Disposition",
    "children": ["Downy_Mildew_Resistance_Disposition", "Powdery_Mildew_Resistance_Disposition", "Botrytis_Resistance_Disposition", "Black_Rot_Resistance_Disposition", "Anthracnose_Resistance_Disposition", "Trunk_Disease_Resistance_Disposition"]
  },
  "Downy_Mildew_Resistance_Disposition": {
    "parent": "Fungal_Resistance_Disposition",
    "children": ["Rpv_Mediated_Resistance_Disposition", "Quantitative_Downy_Mildew_Resistance_Disposition", "Ontogenic_Downy_Mildew_Resistance_Disposition", "Induced_Downy_Mildew_Resistance_Disposition"]
  },
  "Rpv_Mediated_Resistance_Disposition": {
    "parent": "Downy_Mildew_Resistance_Disposition",
    "children": ["Rpv1_Resistance_Disposition", "Rpv3_Resistance_Disposition", "Rpv10_Resistance_Disposition", "Rpv12_Resistance_Disposition", "Pyramided_Rpv_Resistance_Disposition"]
  },
  "Rpv1_Resistance_Disposition": {
    "parent": "Rpv_Mediated_Resistance_Disposition",
    "children": []
  },
  "Rpv3_Resistance_Disposition": {
    "parent": "Rpv_Mediated_Resistance_Disposition",
    "children": []
  },
  "Rpv10_Resistance_Disposition": {
    "parent": "Rpv_Mediated_Resistance_Disposition",
    "children": []
  },
  "Rpv12_Resistance_Disposition": {
    "parent": "Rpv_Mediated_Resistance_Disposition",
    "children": []
  },
  "Pyramided_Rpv_Resistance_Disposition": {
    "parent": "Rpv_Mediated_Resistance_Disposition",
    "children": []
  },
  "Quantitative_Downy_Mildew_Resistance_Disposition": {
    "parent": "Downy_Mildew_Resistance_Disposition",
    "children": []
  },
  "Ontogenic_Downy_Mildew_Resistance_Disposition": {
    "parent": "Downy_Mildew_Resistance_Disposition",
    "children": []
  },
  "Induced_Downy_Mildew_Resistance_Disposition": {
    "parent": "Downy_Mildew_Resistance_Disposition",
    "children": []
  },
  "Powdery_Mildew_Resistance_Disposition": {
    "parent": "Fungal_Resistance_Disposition",
    "children": ["Run_Mediated_Resistance_Disposition", "Ren_Mediated_Resistance_Disposition", "Quantitative_Powdery_Mildew_Resistance_Disposition", "Ontogenic_Powdery_Mildew_Resistance_Disposition", "Evasion_Based_Resistance_Disposition"]
  },
  "Run_Mediated_Resistance_Disposition": {
    "parent": "Powdery_Mildew_Resistance_Disposition",
    "children": ["Run1_Resistance_Disposition", "Run2_Resistance_Disposition"]
  },
  "Run1_Resistance_Disposition": {
    "parent": "Run_Mediated_Resistance_Disposition",
    "children": []
  },
  "Run2_Resistance_Disposition": {
    "parent": "Run_Mediated_Resistance_Disposition",
    "children": []
  },
  "Ren_Mediated_Resistance_Disposition": {
    "parent": "Powdery_Mildew_Resistance_Disposition",
    "children": ["Ren1_Resistance_Disposition", "Ren2_Resistance_Disposition", "Ren3_Resistance_Disposition", "Ren4_Resistance_Disposition", "Ren6_Resistance_Disposition"]
  },
  "Ren1_Resistance_Disposition": {
    "parent": "Ren_Mediated_Resistance_Disposition",
    "children": []
  },
  "Ren2_Resistance_Disposition": {
    "parent": "Ren_Mediated_Resistance_Disposition",
    "children": []
  },
  "Ren3_Resistance_Disposition": {
    "parent": "Ren_Mediated_Resistance_Disposition",
    "children": []
  },
  "Ren4_Resistance_Disposition": {
    "parent": "Ren_Mediated_Resistance_Disposition",
    "children": []
  },
  "Ren6_Resistance_Disposition": {
    "parent": "Ren_Mediated_Resistance_Disposition",
    "children": []
  },
  "Quantitative_Powdery_Mildew_Resistance_Disposition": {
    "parent": "Powdery_Mildew_Resistance_Disposition",
    "children": []
  },
  "Ontogenic_Powdery_Mildew_Resistance_Disposition": {
    "parent": "Powdery_Mildew_Resistance_Disposition",
    "children": []
  },
  "Evasion_Based_Resistance_Disposition": {
    "parent": "Powdery_Mildew_Resistance_Disposition",
    "children": []
  },
  "Botrytis_Resistance_Disposition": {
    "parent": "Fungal_Resistance_Disposition",
    "children": ["Cluster_Architecture_Based_Resistance_Disposition", "Thick_Skin_Disposition", "Cuticle_Based_Resistance_Disposition", "Phytoalexin_Based_Botrytis_Resistance_Disposition", "Noble_Rot_Susceptibility_Disposition"]
  },
  "Cluster_Architecture_Based_Resistance_Disposition": {
    "parent": "Botrytis_Resistance_Disposition",
    "children": []
  },
  "Thick_Skin_Disposition": {
    "parent": "Botrytis_Resistance_Disposition",
    "children": []
  },
  "Cuticle_Based_Resistance_Disposition": {
    "parent": "Botrytis_Resistance_Disposition",
    "children": []
  },
  "Phytoalexin_Based_Botrytis_Resistance_Disposition": {
    "parent": "Botrytis_Resistance_Disposition",
    "children": []
  },
  "Noble_Rot_Susceptibility_Disposition": {
    "parent": "Botrytis_Resistance_Disposition",
    "children": []
  },
  "Black_Rot_Resistance_Disposition": {
    "parent": "Fungal_Resistance_Disposition",
    "children": ["Rgr_Mediated_Resistance_Disposition", "Quantitative_Black_Rot_Resistance_Disposition"]
  },
  "Rgr_Mediated_Resistance_Disposition": {
    "parent": "Black_Rot_Resistance_Disposition",
    "children": []
  },
  "Quantitative_Black_Rot_Resistance_Disposition": {
    "parent": "Black_Rot_Resistance_Disposition",
    "children": []
  },
  "Anthracnose_Resistance_Disposition": {
    "parent": "Fungal_Resistance_Disposition",
    "children": []
  },
  "Trunk_Disease_Resistance_Disposition": {
    "parent": "Fungal_Resistance_Disposition",
    "children": ["Esca_Resistance_Disposition", "Eutypa_Resistance_Disposition", "Botryosphaeria_Resistance_Disposition"]
  },
  "Esca_Resistance_Disposition": {
    "parent": "Trunk_Disease_Resistance_Disposition",
    "children": ["Wound_Compartmentalization_Disposition", "Tylosis_Formation_Disposition"]
  },
  "Wound_Compartmentalization_Disposition": {
    "parent": "Esca_Resistance_Disposition",
    "children": []
  },
  "Tylosis_Formation_Disposition": {
    "parent": "Esca_Resistance_Disposition",
    "children": []
  },
  "Eutypa_Resistance_Disposition": {
    "parent": "Trunk_Disease_Resistance_Disposition",
    "children": []
  },
  "Botryosphaeria_Resistance_Disposition": {
    "parent": "Trunk_Disease_Resistance_Disposition",
    "children": []
  },
  "Viral_Resistance_Disposition": {
    "parent": "Pathogen_Resistance_Disposition",
    "children": ["Fanleaf_Resistance_Disposition", "Leafroll_Resistance_Disposition", "Red_Blotch_Resistance_Disposition", "Fleck_Tolerance_Disposition"]
  },
  "Fanleaf_Resistance_Disposition": {
    "parent": "Viral_Resistance_Disposition",
    "children": ["GFLV_Resistance_Disposition", "Xiphinema_Transmission_Resistance_Disposition"]
  },
  "GFLV_Resistance_Disposition": {
    "parent": "Fanleaf_Resistance_Disposition",
    "children": []
  },
  "Xiphinema_Transmission_Resistance_Disposition": {
    "parent": "Fanleaf_Resistance_Disposition",
    "children": []
  },
  "Leafroll_Resistance_Disposition": {
    "parent": "Viral_Resistance_Disposition",
    "children": ["GLRaV_Replication_Resistance_Disposition", "Vector_Transmission_Resistance_Disposition"]
  },
  "GLRaV_Replication_Resistance_Disposition": {
    "parent": "Leafroll_Resistance_Disposition",
    "children": []
  },
  "Vector_Transmission_Resistance_Disposition": {
    "parent": "Leafroll_Resistance_Disposition",
    "children": []
  },
  "Red_Blotch_Resistance_Disposition": {
    "parent": "Viral_Resistance_Disposition",
    "children": []
  },
  "Fleck_Tolerance_Disposition": {
    "parent": "Viral_Resistance_Disposition",
    "children": []
  },
  "Bacterial_Resistance_Disposition": {
    "parent": "Pathogen_Resistance_Disposition",
    "children": ["Crown_Gall_Resistance_Disposition", "Pierces_Disease_Resistance_Disposition"]
  },
  "Crown_Gall_Resistance_Disposition": {
    "parent": "Bacterial_Resistance_Disposition",
    "children": ["Agrobacterium_Transformation_Resistance_Disposition", "Wound_Healing_Efficiency_Disposition"]
  },
  "Agrobacterium_Transformation_Resistance_Disposition": {
    "parent": "Crown_Gall_Resistance_Disposition",
    "children": []
  },
  "Wound_Healing_Efficiency_Disposition": {
    "parent": "Crown_Gall_Resistance_Disposition",
    "children": []
  },
  "Pierces_Disease_Resistance_Disposition": {
    "parent": "Bacterial_Resistance_Disposition",
    "children": ["PdR1_Mediated_Resistance_Disposition", "Xylella_Multiplication_Resistance_Disposition", "Xylem_Occlusion_Tolerance_Disposition"]
  },
  "PdR1_Mediated_Resistance_Disposition": {
    "parent": "Pierces_Disease_Resistance_Disposition",
    "children": []
  },
  "Xylella_Multiplication_Resistance_Disposition": {
    "parent": "Pierces_Disease_Resistance_Disposition",
    "children": []
  },
  "Xylem_Occlusion_Tolerance_Disposition": {
    "parent": "Pierces_Disease_Resistance_Disposition",
    "children": []
  },
  "Phytoplasma_Resistance_Disposition": {
    "parent": "Pathogen_Resistance_Disposition",
    "children": ["Flavescence_Doree_Resistance_Disposition", "Bois_Noir_Resistance_Disposition"]
  },
  "Flavescence_Doree_Resistance_Disposition": {
    "parent": "Phytoplasma_Resistance_Disposition",
    "children": ["Scaphoideus_Titanus_Resistance_Disposition"]
  },
  "Scaphoideus_Titanus_Resistance_Disposition": {
    "parent": "Flavescence_Doree_Resistance_Disposition",
    "children": []
  },
  "Bois_Noir_Resistance_Disposition": {
    "parent": "Phytoplasma_Resistance_Disposition",
    "children": []
  },
  "Pest_Resistance_Disposition": {
    "parent": "Biotic_Stress_Resistance_Disposition",
    "children": ["Phylloxera_Resistance_Disposition", "Nematode_Resistance_Disposition", "Insect_Resistance_Disposition", "Mite_Resistance_Disposition"]
  },
  "Phylloxera_Resistance_Disposition": {
    "parent": "Pest_Resistance_Disposition",
    "children": ["Root_Phylloxera_Resistance_Disposition", "Foliar_Phylloxera_Resistance_Disposition"]
  },
  "Root_Phylloxera_Resistance_Disposition": {
    "parent": "Phylloxera_Resistance_Disposition",
    "children": ["Nodosity_Limitation_Disposition", "Tuberosity_Resistance_Disposition", "Root_Regeneration_Disposition"]
  },
  "Nodosity_Limitation_Disposition": {
    "parent": "Root_Phylloxera_Resistance_Disposition",
    "children": []
  },
  "Tuberosity_Resistance_Disposition": {
    "parent": "Root_Phylloxera_Resistance_Disposition",
    "children": []
  },
  "Root_Regeneration_Disposition": {
    "parent": "Root_Phylloxera_Resistance_Disposition",
    "children": []
  },
  "Foliar_Phylloxera_Resistance_Disposition": {
    "parent": "Phylloxera_Resistance_Disposition",
    "children": ["Gall_Formation_Resistance_Disposition"]
  },
  "Gall_Formation_Resistance_Disposition": {
    "parent": "Foliar_Phylloxera_Resistance_Disposition",
    "children": []
  },
  "Nematode_Resistance_Disposition": {
    "parent": "Pest_Resistance_Disposition",
    "children": ["Xiphinema_Index_Resistance_Disposition", "Meloidogyne_Resistance_Disposition", "Pratylenchus_Resistance_Disposition"]
  },
  "Xiphinema_Index_Resistance_Disposition": {
    "parent": "Nematode_Resistance_Disposition",
    "children": []
  },
  "Meloidogyne_Resistance_Disposition": {
    "parent": "Nematode_Resistance_Disposition",
    "children": ["M_Incognita_Resistance_Disposition", "M_Javanica_Resistance_Disposition", "M_Arenaria_Resistance_Disposition"]
  },
  "M_Incognita_Resistance_Disposition": {
    "parent": "Meloidogyne_Resistance_Disposition",
    "children": []
  },
  "M_Javanica_Resistance_Disposition": {
    "parent": "Meloidogyne_Resistance_Disposition",
    "children": []
  },
  "M_Arenaria_Resistance_Disposition": {
    "parent": "Meloidogyne_Resistance_Disposition",
    "children": []
  },
  "Pratylenchus_Resistance_Disposition": {
    "parent": "Nematode_Resistance_Disposition",
    "children": []
  },
  "Insect_Resistance_Disposition": {
    "parent": "Pest_Resistance_Disposition",
    "children": ["Leafhopper_Resistance_Disposition", "Mealybug_Resistance_Disposition", "Grape_Berry_Moth_Resistance_Disposition", "Japanese_Beetle_Resistance_Disposition"]
  },
  "Leafhopper_Resistance_Disposition": {
    "parent": "Insect_Resistance_Disposition",
    "children": ["Glassy_Winged_Sharpshooter_Resistance_Disposition", "Empoasca_Resistance_Disposition"]
  },
  "Glassy_Winged_Sharpshooter_Resistance_Disposition": {
    "parent": "Leafhopper_Resistance_Disposition",
    "children": []
  },
  "Empoasca_Resistance_Disposition": {
    "parent": "Leafhopper_Resistance_Disposition",
    "children": []
  },
  "Mealybug_Resistance_Disposition": {
    "parent": "Insect_Resistance_Disposition",
    "children": []
  },
  "Grape_Berry_Moth_Resistance_Disposition": {
    "parent": "Insect_Resistance_Disposition",
    "children": []
  },
  "Japanese_Beetle_Resistance_Disposition": {
    "parent": "Insect_Resistance_Disposition",
    "children": []
  },
  "Mite_Resistance_Disposition": {
    "parent": "Pest_Resistance_Disposition",
    "children": ["Eriophyid_Mite_Resistance_Disposition", "Spider_Mite_Resistance_Disposition"]
  },
  "Eriophyid_Mite_Resistance_Disposition": {
    "parent": "Mite_Resistance_Disposition",
    "children": ["Erineum_Formation_Resistance_Disposition", "Bud_Mite_Resistance_Disposition"]
  },
  "Erineum_Formation_Resistance_Disposition": {
    "parent": "Eriophyid_Mite_Resistance_Disposition",
    "children": []
  },
  "Bud_Mite_Resistance_Disposition": {
    "parent": "Eriophyid_Mite_Resistance_Disposition",
    "children": []
  },
  "Spider_Mite_Resistance_Disposition": {
    "parent": "Mite_Resistance_Disposition",
    "children": []
  },
  "Defense_Mechanism_Disposition": {
    "parent": "Biotic_Stress_Resistance_Disposition",
    "children": ["Constitutive_Defense_Disposition", "Induced_Defense_Disposition"]
  },
  "Constitutive_Defense_Disposition": {
    "parent": "Defense_Mechanism_Disposition",
    "children": ["Physical_Barrier_Disposition", "Chemical_Defense_Disposition"]
  },
  "Physical_Barrier_Disposition": {
    "parent": "Constitutive_Defense_Disposition",
    "children": ["Cuticle_Thickness_Disposition", "Trichome_Density_Disposition", "Stomatal_Density_Disposition"]
  },
  "Cuticle_Thickness_Disposition": {
    "parent": "Physical_Barrier_Disposition",
    "children": []
  },
  "Trichome_Density_Disposition": {
    "parent": "Physical_Barrier_Disposition",
    "children": []
  },
  "Stomatal_Density_Disposition": {
    "parent": "Physical_Barrier_Disposition",
    "children": []
  },
  "Chemical_Defense_Disposition": {
    "parent": "Constitutive_Defense_Disposition",
    "children": ["Constitutive_Phenolic_Disposition", "Preformed_Antimicrobial_Disposition"]
  },
  "Constitutive_Phenolic_Disposition": {
    "parent": "Chemical_Defense_Disposition",
    "children": []
  },
  "Preformed_Antimicrobial_Disposition": {
    "parent": "Chemical_Defense_Disposition",
    "children": []
  },
  "Induced_Defense_Disposition": {
    "parent": "Defense_Mechanism_Disposition",
    "children": ["Hypersensitive_Response_Disposition", "Phytoalexin_Production_Disposition", "Pathogenesis_Related_Protein_Disposition", "Systemic_Acquired_Resistance_Disposition", "Induced_Systemic_Resistance_Disposition"]
  },
  "Hypersensitive_Response_Disposition": {
    "parent": "Induced_Defense_Disposition",
    "children": []
  },
  "Phytoalexin_Production_Disposition": {
    "parent": "Induced_Defense_Disposition",
    "children": ["Stilbene_Synthase_Induction_Disposition", "Resveratrol_Production_Disposition", "Viniferin_Production_Disposition"]
  },
  "Stilbene_Synthase_Induction_Disposition": {
    "parent": "Phytoalexin_Production_Disposition",
    "children": []
  },
  "Resveratrol_Production_Disposition": {
    "parent": "Phytoalexin_Production_Disposition",
    "children": []
  },
  "Viniferin_Production_Disposition": {
    "parent": "Phytoalexin_Production_Disposition",
    "children": []
  },
  "Pathogenesis_Related_Protein_Disposition": {
    "parent": "Induced_Defense_Disposition",
    "children": ["Chitinase_Induction_Disposition", "Glucanase_Induction_Disposition"]
  },
  "Chitinase_Induction_Disposition": {
    "parent": "Pathogenesis_Related_Protein_Disposition",
    "children": []
  },
  "Glucanase_Induction_Disposition": {
    "parent": "Pathogenesis_Related_Protein_Disposition",
    "children": []
  },
  "Systemic_Acquired_Resistance_Disposition": {
    "parent": "Induced_Defense_Disposition",
    "children": []
  },
  "Induced_Systemic_Resistance_Disposition": {
    "parent": "Induced_Defense_Disposition",
    "children": []
  },
  "Abiotic_Stress_Tolerance_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Cold_Tolerance_Disposition", "Heat_Tolerance_Disposition", "Drought_Tolerance_Disposition", "Salt_Tolerance_Disposition", "Lime_Tolerance_Disposition", "Waterlogging_Tolerance_Disposition", "UV_Tolerance_Disposition"]
  },
  "Cold_Tolerance_Disposition": {
    "parent": "Abiotic_Stress_Tolerance_Disposition",
    "children": ["Midwinter_Hardiness_Disposition", "Acclimation_Disposition", "Deacclimation_Disposition", "Spring_Frost_Tolerance_Disposition", "Cold_Recovery_Disposition"]
  },
  "Midwinter_Hardiness_Disposition": {
    "parent": "Cold_Tolerance_Disposition",
    "children": ["Bud_Cold_Hardiness_Disposition", "Cane_Cold_Hardiness_Disposition", "Trunk_Cold_Hardiness_Disposition", "Root_Cold_Hardiness_Disposition"]
  },
  "Bud_Cold_Hardiness_Disposition": {
    "parent": "Midwinter_Hardiness_Disposition",
    "children": ["Primary_Bud_Hardiness_Disposition", "Secondary_Bud_Hardiness_Disposition", "Tertiary_Bud_Hardiness_Disposition"]
  },
  "Primary_Bud_Hardiness_Disposition": {
    "parent": "Bud_Cold_Hardiness_Disposition",
    "children": []
  },
  "Secondary_Bud_Hardiness_Disposition": {
    "parent": "Bud_Cold_Hardiness_Disposition",
    "children": []
  },
  "Tertiary_Bud_Hardiness_Disposition": {
    "parent": "Bud_Cold_Hardiness_Disposition",
    "children": []
  },
  "Cane_Cold_Hardiness_Disposition": {
    "parent": "Midwinter_Hardiness_Disposition",
    "children": ["Phloem_Hardiness_Disposition", "Xylem_Hardiness_Disposition", "Cambium_Hardiness_Disposition"]
  },
  "Phloem_Hardiness_Disposition": {
    "parent": "Cane_Cold_Hardiness_Disposition",
    "children": []
  },
  "Xylem_Hardiness_Disposition": {
    "parent": "Cane_Cold_Hardiness_Disposition",
    "children": []
  },
  "Cambium_Hardiness_Disposition": {
    "parent": "Cane_Cold_Hardiness_Disposition",
    "children": []
  },
  "Trunk_Cold_Hardiness_Disposition": {
    "parent": "Midwinter_Hardiness_Disposition",
    "children": []
  },
  "Root_Cold_Hardiness_Disposition": {
    "parent": "Midwinter_Hardiness_Disposition",
    "children": []
  },
  "Acclimation_Disposition": {
    "parent": "Cold_Tolerance_Disposition",
    "children": ["Acclimation_Rate_Disposition", "Maximum_Hardiness_Disposition", "Hardiness_Retention_Disposition"]
  },
  "Acclimation_Rate_Disposition": {
    "parent": "Acclimation_Disposition",
    "children": []
  },
  "Maximum_Hardiness_Disposition": {
    "parent": "Acclimation_Disposition",
    "children": []
  },
  "Hardiness_Retention_Disposition": {
    "parent": "Acclimation_Disposition",
    "children": []
  },
  "Deacclimation_Disposition": {
    "parent": "Cold_Tolerance_Disposition",
    "children": ["Deacclimation_Resistance_Disposition", "Reacclimation_Capacity_Disposition"]
  },
  "Deacclimation_Resistance_Disposition": {
    "parent": "Deacclimation_Disposition",
    "children": []
  },
  "Reacclimation_Capacity_Disposition": {
    "parent": "Deacclimation_Disposition",
    "children": []
  },
  "Spring_Frost_Tolerance_Disposition": {
    "parent": "Cold_Tolerance_Disposition",
    "children": ["Late_Budbreak_Frost_Avoidance_Disposition", "Shoot_Frost_Recovery_Disposition"]
  },
  "Late_Budbreak_Frost_Avoidance_Disposition": {
    "parent": "Spring_Frost_Tolerance_Disposition",
    "children": []
  },
  "Shoot_Frost_Recovery_Disposition": {
    "parent": "Spring_Frost_Tolerance_Disposition",
    "children": []
  },
  "Cold_Recovery_Disposition": {
    "parent": "Cold_Tolerance_Disposition",
    "children": ["Secondary_Bud_Activation_Disposition", "Trunk_Regeneration_Disposition"]
  },
  "Secondary_Bud_Activation_Disposition": {
    "parent": "Cold_Recovery_Disposition",
    "children": []
  },
  "Trunk_Regeneration_Disposition": {
    "parent": "Cold_Recovery_Disposition",
    "children": []
  },
  "Heat_Tolerance_Disposition": {
    "parent": "Abiotic_Stress_Tolerance_Disposition",
    "children": ["Photosynthesis_Heat_Stability_Disposition", "Membrane_Thermostability_Disposition", "Heat_Shock_Protein_Disposition", "Evaporative_Cooling_Disposition", "Berry_Heat_Tolerance_Disposition"]
  },
  "Photosynthesis_Heat_Stability_Disposition": {
    "parent": "Heat_Tolerance_Disposition",
    "children": []
  },
  "Membrane_Thermostability_Disposition": {
    "parent": "Heat_Tolerance_Disposition",
    "children": []
  },
  "Heat_Shock_Protein_Disposition": {
    "parent": "Heat_Tolerance_Disposition",
    "children": []
  },
  "Evaporative_Cooling_Disposition": {
    "parent": "Heat_Tolerance_Disposition",
    "children": []
  },
  "Berry_Heat_Tolerance_Disposition": {
    "parent": "Heat_Tolerance_Disposition",
    "children": ["Sunburn_Resistance_Disposition", "Heat_Induced_Abscission_Resistance_Disposition"]
  },
  "Sunburn_Resistance_Disposition": {
    "parent": "Berry_Heat_Tolerance_Disposition",
    "children": []
  },
  "Heat_Induced_Abscission_Resistance_Disposition": {
    "parent": "Berry_Heat_Tolerance_Disposition",
    "children": []
  },
  "Drought_Tolerance_Disposition": {
    "parent": "Abiotic_Stress_Tolerance_Disposition",
    "children": ["Stomatal_Regulation_Disposition", "Osmotic_Adjustment_Disposition", "Root_System_Drought_Adaptation_Disposition", "Hydraulic_Architecture_Disposition", "Drought_Recovery_Disposition"]
  },
  "Stomatal_Regulation_Disposition": {
    "parent": "Drought_Tolerance_Disposition",
    "children": ["Isohydric_Behavior_Disposition", "Anisohydric_Behavior_Disposition", "Near_Isohydric_Behavior_Disposition"]
  },
  "Isohydric_Behavior_Disposition": {
    "parent": "Stomatal_Regulation_Disposition",
    "children": []
  },
  "Anisohydric_Behavior_Disposition": {
    "parent": "Stomatal_Regulation_Disposition",
    "children": []
  },
  "Near_Isohydric_Behavior_Disposition": {
    "parent": "Stomatal_Regulation_Disposition",
    "children": []
  },
  "Osmotic_Adjustment_Disposition": {
    "parent": "Drought_Tolerance_Disposition",
    "children": ["Solute_Accumulation_Disposition", "Turgor_Maintenance_Disposition"]
  },
  "Solute_Accumulation_Disposition": {
    "parent": "Osmotic_Adjustment_Disposition",
    "children": []
  },
  "Turgor_Maintenance_Disposition": {
    "parent": "Osmotic_Adjustment_Disposition",
    "children": []
  },
  "Root_System_Drought_Adaptation_Disposition": {
    "parent": "Drought_Tolerance_Disposition",
    "children": ["Deep_Rooting_Disposition", "Root_Density_Disposition", "Root_Hydraulic_Conductance_Disposition"]
  },
  "Deep_Rooting_Disposition": {
    "parent": "Root_System_Drought_Adaptation_Disposition",
    "children": []
  },
  "Root_Density_Disposition": {
    "parent": "Root_System_Drought_Adaptation_Disposition",
    "children": []
  },
  "Root_Hydraulic_Conductance_Disposition": {
    "parent": "Root_System_Drought_Adaptation_Disposition",
    "children": []
  },
  "Hydraulic_Architecture_Disposition": {
    "parent": "Drought_Tolerance_Disposition",
    "children": ["Cavitation_Resistance_Disposition", "Embolism_Repair_Disposition", "Vessel_Diameter_Disposition", "Intrinsic_WUE_Disposition", "Instantaneous_WUE_Disposition"]
  },
  "Cavitation_Resistance_Disposition": {
    "parent": "Hydraulic_Architecture_Disposition",
    "children": []
  },
  "Embolism_Repair_Disposition": {
    "parent": "Hydraulic_Architecture_Disposition",
    "children": []
  },
  "Vessel_Diameter_Disposition": {
    "parent": "Hydraulic_Architecture_Disposition",
    "children": []
  },
  "Intrinsic_WUE_Disposition": {
    "parent": "Hydraulic_Architecture_Disposition",
    "children": []
  },
  "Instantaneous_WUE_Disposition": {
    "parent": "Hydraulic_Architecture_Disposition",
    "children": []
  },
  "Drought_Recovery_Disposition": {
    "parent": "Drought_Tolerance_Disposition",
    "children": ["Rehydration_Capacity_Disposition", "Growth_Resumption_Disposition"]
  },
  "Rehydration_Capacity_Disposition": {
    "parent": "Drought_Recovery_Disposition",
    "children": []
  },
  "Growth_Resumption_Disposition": {
    "parent": "Drought_Recovery_Disposition",
    "children": []
  },
  "Salt_Tolerance_Disposition": {
    "parent": "Abiotic_Stress_Tolerance_Disposition",
    "children": ["Ion_Exclusion_Disposition", "Ion_Compartmentalization_Disposition", "Osmotic_Stress_Tolerance_Disposition", "Salt_Induced_ABA_Response_Disposition"]
  },
  "Ion_Exclusion_Disposition": {
    "parent": "Salt_Tolerance_Disposition",
    "children": ["Chloride_Exclusion_Disposition", "Sodium_Exclusion_Disposition"]
  },
  "Chloride_Exclusion_Disposition": {
    "parent": "Ion_Exclusion_Disposition",
    "children": ["Root_Chloride_Exclusion_Disposition", "Xylem_Loading_Restriction_Disposition"]
  },
  "Root_Chloride_Exclusion_Disposition": {
    "parent": "Chloride_Exclusion_Disposition",
    "children": []
  },
  "Xylem_Loading_Restriction_Disposition": {
    "parent": "Chloride_Exclusion_Disposition",
    "children": []
  },
  "Sodium_Exclusion_Disposition": {
    "parent": "Ion_Exclusion_Disposition",
    "children": ["Root_Sodium_Exclusion_Disposition", "Sodium_Retrieval_Disposition"]
  },
  "Root_Sodium_Exclusion_Disposition": {
    "parent": "Sodium_Exclusion_Disposition",
    "children": []
  },
  "Sodium_Retrieval_Disposition": {
    "parent": "Sodium_Exclusion_Disposition",
    "children": []
  },
  "Ion_Compartmentalization_Disposition": {
    "parent": "Salt_Tolerance_Disposition",
    "children": ["Vacuolar_Sequestration_Disposition", "Older_Tissue_Accumulation_Disposition"]
  },
  "Vacuolar_Sequestration_Disposition": {
    "parent": "Ion_Compartmentalization_Disposition",
    "children": []
  },
  "Older_Tissue_Accumulation_Disposition": {
    "parent": "Ion_Compartmentalization_Disposition",
    "children": []
  },
  "Osmotic_Stress_Tolerance_Disposition": {
    "parent": "Salt_Tolerance_Disposition",
    "children": []
  },
  "Salt_Induced_ABA_Response_Disposition": {
    "parent": "Salt_Tolerance_Disposition",
    "children": []
  },
  "Lime_Tolerance_Disposition": {
    "parent": "Abiotic_Stress_Tolerance_Disposition",
    "children": ["Rhizosphere_Acidification_Disposition", "Iron_Reductase_Activity_Disposition", "Iron_Chelate_Uptake_Disposition", "Bicarbonate_Tolerance_Disposition", "High_pH_Adaptation_Disposition"]
  },
  "Rhizosphere_Acidification_Disposition": {
    "parent": "Lime_Tolerance_Disposition",
    "children": []
  },
  "Iron_Reductase_Activity_Disposition": {
    "parent": "Lime_Tolerance_Disposition",
    "children": []
  },
  "Iron_Chelate_Uptake_Disposition": {
    "parent": "Lime_Tolerance_Disposition",
    "children": []
  },
  "Bicarbonate_Tolerance_Disposition": {
    "parent": "Lime_Tolerance_Disposition",
    "children": []
  },
  "High_pH_Adaptation_Disposition": {
    "parent": "Lime_Tolerance_Disposition",
    "children": []
  },
  "Waterlogging_Tolerance_Disposition": {
    "parent": "Abiotic_Stress_Tolerance_Disposition",
    "children": ["Adventitious_Root_Formation_Disposition", "Aerenchyma_Formation_Disposition", "Anaerobic_Metabolism_Disposition"]
  },
  "Adventitious_Root_Formation_Disposition": {
    "parent": "Waterlogging_Tolerance_Disposition",
    "children": []
  },
  "Aerenchyma_Formation_Disposition": {
    "parent": "Waterlogging_Tolerance_Disposition",
    "children": []
  },
  "Anaerobic_Metabolism_Disposition": {
    "parent": "Waterlogging_Tolerance_Disposition",
    "children": []
  },
  "UV_Tolerance_Disposition": {
    "parent": "Abiotic_Stress_Tolerance_Disposition",
    "children": ["Flavonoid_Accumulation_Disposition", "DNA_Repair_Disposition"]
  },
  "Flavonoid_Accumulation_Disposition": {
    "parent": "UV_Tolerance_Disposition",
    "children": []
  },
  "DNA_Repair_Disposition": {
    "parent": "UV_Tolerance_Disposition",
    "children": []
  },
  "Growth_And_Development_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Vigor_Disposition", "Growth_Habit_Disposition", "Leaf_Development_Disposition", "Tendril_Development_Disposition", "Lignification_Disposition", "Senescence_Disposition"]
  },
  "Vigor_Disposition": {
    "parent": "Growth_And_Development_Disposition",
    "children": ["Shoot_Vigor_Disposition", "Root_Vigor_Disposition", "Vigor_Conferred_To_Scion_Disposition"]
  },
  "Shoot_Vigor_Disposition": {
    "parent": "Vigor_Disposition",
    "children": ["High_Vigor_Disposition", "Moderate_Vigor_Disposition", "Low_Vigor_Disposition"]
  },
  "High_Vigor_Disposition": {
    "parent": "Shoot_Vigor_Disposition",
    "children": []
  },
  "Moderate_Vigor_Disposition": {
    "parent": "Shoot_Vigor_Disposition",
    "children": []
  },
  "Low_Vigor_Disposition": {
    "parent": "Shoot_Vigor_Disposition",
    "children": []
  },
  "Root_Vigor_Disposition": {
    "parent": "Vigor_Disposition",
    "children": ["Extensive_Root_System_Disposition", "Limited_Root_System_Disposition"]
  },
  "Extensive_Root_System_Disposition": {
    "parent": "Root_Vigor_Disposition",
    "children": []
  },
  "Limited_Root_System_Disposition": {
    "parent": "Root_Vigor_Disposition",
    "children": []
  },
  "Vigor_Conferred_To_Scion_Disposition": {
    "parent": "Vigor_Disposition",
    "children": ["Vigor_Reducing_Rootstock_Disposition", "Vigor_Enhancing_Rootstock_Disposition"]
  },
  "Vigor_Reducing_Rootstock_Disposition": {
    "parent": "Vigor_Conferred_To_Scion_Disposition",
    "children": []
  },
  "Vigor_Enhancing_Rootstock_Disposition": {
    "parent": "Vigor_Conferred_To_Scion_Disposition",
    "children": []
  },
  "Growth_Habit_Disposition": {
    "parent": "Growth_And_Development_Disposition",
    "children": ["Shoot_Orientation_Disposition", "Branching_Pattern_Disposition", "Internode_Length_Disposition"]
  },
  "Shoot_Orientation_Disposition": {
    "parent": "Growth_Habit_Disposition",
    "children": ["Upright_Growth_Disposition", "Semi_Upright_Growth_Disposition", "Horizontal_Growth_Disposition", "Trailing_Growth_Disposition"]
  },
  "Upright_Growth_Disposition": {
    "parent": "Shoot_Orientation_Disposition",
    "children": []
  },
  "Semi_Upright_Growth_Disposition": {
    "parent": "Shoot_Orientation_Disposition",
    "children": []
  },
  "Horizontal_Growth_Disposition": {
    "parent": "Shoot_Orientation_Disposition",
    "children": []
  },
  "Trailing_Growth_Disposition": {
    "parent": "Shoot_Orientation_Disposition",
    "children": []
  },
  "Branching_Pattern_Disposition": {
    "parent": "Growth_Habit_Disposition",
    "children": ["Strong_Apical_Dominance_Disposition", "Weak_Apical_Dominance_Disposition", "Lateral_Shoot_Proliferation_Disposition"]
  },
  "Strong_Apical_Dominance_Disposition": {
    "parent": "Branching_Pattern_Disposition",
    "children": []
  },
  "Weak_Apical_Dominance_Disposition": {
    "parent": "Branching_Pattern_Disposition",
    "children": []
  },
  "Lateral_Shoot_Proliferation_Disposition": {
    "parent": "Branching_Pattern_Disposition",
    "children": []
  },
  "Internode_Length_Disposition": {
    "parent": "Growth_Habit_Disposition",
    "children": ["Long_Internode_Disposition", "Short_Internode_Disposition"]
  },
  "Long_Internode_Disposition": {
    "parent": "Internode_Length_Disposition",
    "children": []
  },
  "Short_Internode_Disposition": {
    "parent": "Internode_Length_Disposition",
    "children": []
  },
  "Leaf_Development_Disposition": {
    "parent": "Growth_And_Development_Disposition",
    "children": ["Leaf_Size_Disposition", "Leaf_Dissection_Disposition", "Leaf_Thickness_Disposition"]
  },
  "Leaf_Size_Disposition": {
    "parent": "Leaf_Development_Disposition",
    "children": ["Large_Leaf_Disposition", "Small_Leaf_Disposition"]
  },
  "Large_Leaf_Disposition": {
    "parent": "Leaf_Size_Disposition",
    "children": []
  },
  "Small_Leaf_Disposition": {
    "parent": "Leaf_Size_Disposition",
    "children": []
  },
  "Leaf_Dissection_Disposition": {
    "parent": "Leaf_Development_Disposition",
    "children": []
  },
  "Leaf_Thickness_Disposition": {
    "parent": "Leaf_Development_Disposition",
    "children": []
  },
  "Tendril_Development_Disposition": {
    "parent": "Growth_And_Development_Disposition",
    "children": ["Strong_Tendril_Disposition", "Weak_Tendril_Disposition"]
  },
  "Strong_Tendril_Disposition": {
    "parent": "Tendril_Development_Disposition",
    "children": []
  },
  "Weak_Tendril_Disposition": {
    "parent": "Tendril_Development_Disposition",
    "children": []
  },
  "Lignification_Disposition": {
    "parent": "Growth_And_Development_Disposition",
    "children": ["Early_Lignification_Disposition", "Complete_Cane_Maturation_Disposition", "Periderm_Development_Disposition"]
  },
  "Early_Lignification_Disposition": {
    "parent": "Lignification_Disposition",
    "children": []
  },
  "Complete_Cane_Maturation_Disposition": {
    "parent": "Lignification_Disposition",
    "children": []
  },
  "Periderm_Development_Disposition": {
    "parent": "Lignification_Disposition",
    "children": []
  },
  "Senescence_Disposition": {
    "parent": "Growth_And_Development_Disposition",
    "children": ["Leaf_Senescence_Timing_Disposition", "Nutrient_Remobilization_Disposition"]
  },
  "Leaf_Senescence_Timing_Disposition": {
    "parent": "Senescence_Disposition",
    "children": []
  },
  "Nutrient_Remobilization_Disposition": {
    "parent": "Senescence_Disposition",
    "children": []
  },
  "Reproductive_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Flowering_Disposition", "Fruit_Set_Disposition", "Seedlessness_Disposition", "Fruitfulness_Disposition", "Cluster_Architecture_Disposition"]
  },
  "Flowering_Disposition": {
    "parent": "Reproductive_Disposition",
    "children": ["Flower_Type_Disposition", "Inflorescence_Development_Disposition", "Pollen_Disposition"]
  },
  "Flower_Type_Disposition": {
    "parent": "Flowering_Disposition",
    "children": ["Hermaphrodite_Flower_Disposition", "Female_Flower_Disposition", "Male_Flower_Disposition"]
  },
  "Hermaphrodite_Flower_Disposition": {
    "parent": "Flower_Type_Disposition",
    "children": []
  },
  "Female_Flower_Disposition": {
    "parent": "Flower_Type_Disposition",
    "children": []
  },
  "Male_Flower_Disposition": {
    "parent": "Flower_Type_Disposition",
    "children": []
  },
  "Inflorescence_Development_Disposition": {
    "parent": "Flowering_Disposition",
    "children": ["Inflorescence_Initiation_Disposition", "Inflorescence_Number_Disposition"]
  },
  "Inflorescence_Initiation_Disposition": {
    "parent": "Inflorescence_Development_Disposition",
    "children": []
  },
  "Inflorescence_Number_Disposition": {
    "parent": "Inflorescence_Development_Disposition",
    "children": []
  },
  "Pollen_Disposition": {
    "parent": "Flowering_Disposition",
    "children": ["Pollen_Viability_Disposition", "Pollen_Germination_Disposition", "Pollen_Tube_Growth_Disposition"]
  },
  "Pollen_Viability_Disposition": {
    "parent": "Pollen_Disposition",
    "children": []
  },
  "Pollen_Germination_Disposition": {
    "parent": "Pollen_Disposition",
    "children": []
  },
  "Pollen_Tube_Growth_Disposition": {
    "parent": "Pollen_Disposition",
    "children": []
  },
  "Fruit_Set_Disposition": {
    "parent": "Reproductive_Disposition",
    "children": ["High_Fruit_Set_Disposition", "Coulure_Susceptibility_Disposition", "Millerandage_Susceptibility_Disposition"]
  },
  "High_Fruit_Set_Disposition": {
    "parent": "Fruit_Set_Disposition",
    "children": []
  },
  "Coulure_Susceptibility_Disposition": {
    "parent": "Fruit_Set_Disposition",
    "children": ["Weather_Induced_Coulure_Disposition", "Nutritional_Coulure_Disposition"]
  },
  "Weather_Induced_Coulure_Disposition": {
    "parent": "Coulure_Susceptibility_Disposition",
    "children": []
  },
  "Nutritional_Coulure_Disposition": {
    "parent": "Coulure_Susceptibility_Disposition",
    "children": []
  },
  "Millerandage_Susceptibility_Disposition": {
    "parent": "Fruit_Set_Disposition",
    "children": []
  },
  "Seedlessness_Disposition": {
    "parent": "Reproductive_Disposition",
    "children": ["Stenospermocarpy_Disposition", "Parthenocarpy_Disposition", "GA_Responsive_Seedlessness_Disposition"]
  },
  "Stenospermocarpy_Disposition": {
    "parent": "Seedlessness_Disposition",
    "children": ["Early_Seed_Abortion_Disposition", "Late_Seed_Abortion_Disposition"]
  },
  "Early_Seed_Abortion_Disposition": {
    "parent": "Stenospermocarpy_Disposition",
    "children": []
  },
  "Late_Seed_Abortion_Disposition": {
    "parent": "Stenospermocarpy_Disposition",
    "children": []
  },
  "Parthenocarpy_Disposition": {
    "parent": "Seedlessness_Disposition",
    "children": []
  },
  "GA_Responsive_Seedlessness_Disposition": {
    "parent": "Seedlessness_Disposition",
    "children": []
  },
  "Fruitfulness_Disposition": {
    "parent": "Reproductive_Disposition",
    "children": ["Bud_Fruitfulness_Disposition", "Second_Crop_Potential_Disposition"]
  },
  "Bud_Fruitfulness_Disposition": {
    "parent": "Fruitfulness_Disposition",
    "children": ["High_Basal_Fruitfulness_Disposition", "Distal_Fruitfulness_Disposition", "Lateral_Bud_Fruitfulness_Disposition"]
  },
  "High_Basal_Fruitfulness_Disposition": {
    "parent": "Bud_Fruitfulness_Disposition",
    "children": []
  },
  "Distal_Fruitfulness_Disposition": {
    "parent": "Bud_Fruitfulness_Disposition",
    "children": []
  },
  "Lateral_Bud_Fruitfulness_Disposition": {
    "parent": "Bud_Fruitfulness_Disposition",
    "children": []
  },
  "Second_Crop_Potential_Disposition": {
    "parent": "Fruitfulness_Disposition",
    "children": []
  },
  "Cluster_Architecture_Disposition": {
    "parent": "Reproductive_Disposition",
    "children": ["Cluster_Compactness_Disposition", "Cluster_Size_Disposition", "Wing_Development_Disposition"]
  },
  "Cluster_Compactness_Disposition": {
    "parent": "Cluster_Architecture_Disposition",
    "children": ["Compact_Cluster_Disposition", "Loose_Cluster_Disposition", "Very_Loose_Cluster_Disposition"]
  },
  "Compact_Cluster_Disposition": {
    "parent": "Cluster_Compactness_Disposition",
    "children": []
  },
  "Loose_Cluster_Disposition": {
    "parent": "Cluster_Compactness_Disposition",
    "children": []
  },
  "Very_Loose_Cluster_Disposition": {
    "parent": "Cluster_Compactness_Disposition",
    "children": []
  },
  "Cluster_Size_Disposition": {
    "parent": "Cluster_Architecture_Disposition",
    "children": ["Large_Cluster_Disposition", "Small_Cluster_Disposition"]
  },
  "Large_Cluster_Disposition": {
    "parent": "Cluster_Size_Disposition",
    "children": []
  },
  "Small_Cluster_Disposition": {
    "parent": "Cluster_Size_Disposition",
    "children": []
  },
  "Wing_Development_Disposition": {
    "parent": "Cluster_Architecture_Disposition",
    "children": []
  },
  "Phenological_Timing_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Dormancy_Disposition", "Budbreak_Timing_Disposition", "Flowering_Timing_Disposition", "Veraison_Timing_Disposition", "Ripening_Timing_Disposition", "Phenological_Plasticity_Disposition"]
  },
  "Dormancy_Disposition": {
    "parent": "Phenological_Timing_Disposition",
    "children": ["Chilling_Requirement_Disposition", "Dormancy_Release_Disposition", "Paradormancy_Disposition"]
  },
  "Chilling_Requirement_Disposition": {
    "parent": "Dormancy_Disposition",
    "children": ["High_Chilling_Requirement_Disposition", "Low_Chilling_Requirement_Disposition"]
  },
  "High_Chilling_Requirement_Disposition": {
    "parent": "Chilling_Requirement_Disposition",
    "children": []
  },
  "Low_Chilling_Requirement_Disposition": {
    "parent": "Chilling_Requirement_Disposition",
    "children": []
  },
  "Dormancy_Release_Disposition": {
    "parent": "Dormancy_Disposition",
    "children": []
  },
  "Paradormancy_Disposition": {
    "parent": "Dormancy_Disposition",
    "children": []
  },
  "Budbreak_Timing_Disposition": {
    "parent": "Phenological_Timing_Disposition",
    "children": ["Early_Budbreak_Disposition", "Mid_Season_Budbreak_Disposition", "Late_Budbreak_Disposition"]
  },
  "Early_Budbreak_Disposition": {
    "parent": "Budbreak_Timing_Disposition",
    "children": []
  },
  "Mid_Season_Budbreak_Disposition": {
    "parent": "Budbreak_Timing_Disposition",
    "children": []
  },
  "Late_Budbreak_Disposition": {
    "parent": "Budbreak_Timing_Disposition",
    "children": []
  },
  "Flowering_Timing_Disposition": {
    "parent": "Phenological_Timing_Disposition",
    "children": ["Early_Flowering_Disposition", "Late_Flowering_Disposition"]
  },
  "Early_Flowering_Disposition": {
    "parent": "Flowering_Timing_Disposition",
    "children": []
  },
  "Late_Flowering_Disposition": {
    "parent": "Flowering_Timing_Disposition",
    "children": []
  },
  "Veraison_Timing_Disposition": {
    "parent": "Phenological_Timing_Disposition",
    "children": ["Early_Veraison_Disposition", "Uniform_Veraison_Disposition", "Extended_Veraison_Disposition"]
  },
  "Early_Veraison_Disposition": {
    "parent": "Veraison_Timing_Disposition",
    "children": []
  },
  "Uniform_Veraison_Disposition": {
    "parent": "Veraison_Timing_Disposition",
    "children": []
  },
  "Extended_Veraison_Disposition": {
    "parent": "Veraison_Timing_Disposition",
    "children": []
  },
  "Ripening_Timing_Disposition": {
    "parent": "Phenological_Timing_Disposition",
    "children": ["Very_Early_Ripening_Disposition", "Early_Ripening_Disposition", "Mid_Season_Ripening_Disposition", "Late_Ripening_Disposition", "Very_Late_Ripening_Disposition"]
  },
  "Very_Early_Ripening_Disposition": {
    "parent": "Ripening_Timing_Disposition",
    "children": []
  },
  "Early_Ripening_Disposition": {
    "parent": "Ripening_Timing_Disposition",
    "children": []
  },
  "Mid_Season_Ripening_Disposition": {
    "parent": "Ripening_Timing_Disposition",
    "children": []
  },
  "Late_Ripening_Disposition": {
    "parent": "Ripening_Timing_Disposition",
    "children": []
  },
  "Very_Late_Ripening_Disposition": {
    "parent": "Ripening_Timing_Disposition",
    "children": []
  },
  "Phenological_Plasticity_Disposition": {
    "parent": "Phenological_Timing_Disposition",
    "children": ["Temperature_Response_Disposition", "Photoperiod_Response_Disposition"]
  },
  "Temperature_Response_Disposition": {
    "parent": "Phenological_Plasticity_Disposition",
    "children": []
  },
  "Photoperiod_Response_Disposition": {
    "parent": "Phenological_Plasticity_Disposition",
    "children": []
  },
  "Nutrient_Acquisition_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Macronutrient_Uptake_Disposition", "Micronutrient_Uptake_Disposition", "Nutrient_Use_Efficiency_Disposition", "Mycorrhizal_Association_Disposition"]
  },
  "Macronutrient_Uptake_Disposition": {
    "parent": "Nutrient_Acquisition_Disposition",
    "children": ["Nitrogen_Uptake_Efficiency_Disposition", "Phosphorus_Uptake_Efficiency_Disposition", "Potassium_Uptake_Efficiency_Disposition", "Calcium_Uptake_Disposition", "Magnesium_Uptake_Disposition"]
  },
  "Nitrogen_Uptake_Efficiency_Disposition": {
    "parent": "Macronutrient_Uptake_Disposition",
    "children": ["Nitrate_Uptake_Disposition", "Ammonium_Uptake_Disposition"]
  },
  "Nitrate_Uptake_Disposition": {
    "parent": "Nitrogen_Uptake_Efficiency_Disposition",
    "children": []
  },
  "Ammonium_Uptake_Disposition": {
    "parent": "Nitrogen_Uptake_Efficiency_Disposition",
    "children": []
  },
  "Phosphorus_Uptake_Efficiency_Disposition": {
    "parent": "Macronutrient_Uptake_Disposition",
    "children": []
  },
  "Potassium_Uptake_Efficiency_Disposition": {
    "parent": "Macronutrient_Uptake_Disposition",
    "children": ["Potassium_Accumulation_Disposition"]
  },
  "Potassium_Accumulation_Disposition": {
    "parent": "Potassium_Uptake_Efficiency_Disposition",
    "children": []
  },
  "Calcium_Uptake_Disposition": {
    "parent": "Macronutrient_Uptake_Disposition",
    "children": []
  },
  "Magnesium_Uptake_Disposition": {
    "parent": "Macronutrient_Uptake_Disposition",
    "children": []
  },
  "Micronutrient_Uptake_Disposition": {
    "parent": "Nutrient_Acquisition_Disposition",
    "children": ["Iron_Acquisition_Efficiency_Disposition", "Zinc_Uptake_Disposition", "Manganese_Uptake_Disposition", "Boron_Uptake_Disposition"]
  },
  "Iron_Acquisition_Efficiency_Disposition": {
    "parent": "Micronutrient_Uptake_Disposition",
    "children": []
  },
  "Zinc_Uptake_Disposition": {
    "parent": "Micronutrient_Uptake_Disposition",
    "children": []
  },
  "Manganese_Uptake_Disposition": {
    "parent": "Micronutrient_Uptake_Disposition",
    "children": []
  },
  "Boron_Uptake_Disposition": {
    "parent": "Micronutrient_Uptake_Disposition",
    "children": []
  },
  "Nutrient_Use_Efficiency_Disposition": {
    "parent": "Nutrient_Acquisition_Disposition",
    "children": ["Nitrogen_Use_Efficiency_Disposition", "Phosphorus_Use_Efficiency_Disposition"]
  },
  "Nitrogen_Use_Efficiency_Disposition": {
    "parent": "Nutrient_Use_Efficiency_Disposition",
    "children": []
  },
  "Phosphorus_Use_Efficiency_Disposition": {
    "parent": "Nutrient_Use_Efficiency_Disposition",
    "children": []
  },
  "Mycorrhizal_Association_Disposition": {
    "parent": "Nutrient_Acquisition_Disposition",
    "children": ["Arbuscular_Mycorrhizal_Colonization_Disposition", "Mycorrhizal_Dependency_Disposition"]
  },
  "Arbuscular_Mycorrhizal_Colonization_Disposition": {
    "parent": "Mycorrhizal_Association_Disposition",
    "children": []
  },
  "Mycorrhizal_Dependency_Disposition": {
    "parent": "Mycorrhizal_Association_Disposition",
    "children": []
  },
  "Water_Relations_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Water_Uptake_Disposition", "Water_Transport_Disposition", "Transpiration_Disposition", "Water_Use_Efficiency_Disposition"]
  },
  "Water_Uptake_Disposition": {
    "parent": "Water_Relations_Disposition",
    "children": ["Root_Hydraulic_Conductivity_Disposition", "Aquaporin_Activity_Disposition"]
  },
  "Root_Hydraulic_Conductivity_Disposition": {
    "parent": "Water_Uptake_Disposition",
    "children": []
  },
  "Aquaporin_Activity_Disposition": {
    "parent": "Water_Uptake_Disposition",
    "children": []
  },
  "Water_Transport_Disposition": {
    "parent": "Water_Relations_Disposition",
    "children": ["Xylem_Conductivity_Disposition"]
  },
  "Xylem_Conductivity_Disposition": {
    "parent": "Water_Transport_Disposition",
    "children": []
  },
  "Transpiration_Disposition": {
    "parent": "Water_Relations_Disposition",
    "children": ["Stomatal_Conductance_Disposition", "Cuticular_Transpiration_Disposition"]
  },
  "Stomatal_Conductance_Disposition": {
    "parent": "Transpiration_Disposition",
    "children": ["High_Stomatal_Conductance_Disposition", "Low_Stomatal_Conductance_Disposition"]
  },
  "High_Stomatal_Conductance_Disposition": {
    "parent": "Stomatal_Conductance_Disposition",
    "children": []
  },
  "Low_Stomatal_Conductance_Disposition": {
    "parent": "Stomatal_Conductance_Disposition",
    "children": []
  },
  "Cuticular_Transpiration_Disposition": {
    "parent": "Transpiration_Disposition",
    "children": []
  },
  "Water_Use_Efficiency_Disposition": {
    "parent": "Water_Relations_Disposition",
    "children": ["Carbon_Isotope_Discrimination_Disposition", "Transpiration_Efficiency_Disposition"]
  },
  "Carbon_Isotope_Discrimination_Disposition": {
    "parent": "Water_Use_Efficiency_Disposition",
    "children": []
  },
  "Transpiration_Efficiency_Disposition": {
    "parent": "Water_Use_Efficiency_Disposition",
    "children": []
  },
  "Compatibility_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Graft_Compatibility_Disposition", "Interspecific_Hybridization_Disposition"]
  },
  "Graft_Compatibility_Disposition": {
    "parent": "Compatibility_Disposition",
    "children": ["Graft_Union_Formation_Disposition", "Graft_Incompatibility_Disposition", "Delayed_Incompatibility_Disposition"]
  },
  "Graft_Union_Formation_Disposition": {
    "parent": "Graft_Compatibility_Disposition",
    "children": ["Callus_Formation_Disposition", "Vascular_Connection_Disposition"]
  },
  "Callus_Formation_Disposition": {
    "parent": "Graft_Union_Formation_Disposition",
    "children": []
  },
  "Vascular_Connection_Disposition": {
    "parent": "Graft_Union_Formation_Disposition",
    "children": []
  },
  "Graft_Incompatibility_Disposition": {
    "parent": "Graft_Compatibility_Disposition",
    "children": ["Translocated_Incompatibility_Disposition", "Localized_Incompatibility_Disposition"]
  },
  "Translocated_Incompatibility_Disposition": {
    "parent": "Graft_Incompatibility_Disposition",
    "children": []
  },
  "Localized_Incompatibility_Disposition": {
    "parent": "Graft_Incompatibility_Disposition",
    "children": []
  },
  "Delayed_Incompatibility_Disposition": {
    "parent": "Graft_Compatibility_Disposition",
    "children": []
  },
  "Interspecific_Hybridization_Disposition": {
    "parent": "Compatibility_Disposition",
    "children": ["Cross_Compatibility_Disposition", "Hybrid_Vigor_Disposition"]
  },
  "Cross_Compatibility_Disposition": {
    "parent": "Interspecific_Hybridization_Disposition",
    "children": []
  },
  "Hybrid_Vigor_Disposition": {
    "parent": "Interspecific_Hybridization_Disposition",
    "children": []
  },
  "Quality_Potential_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Sugar_Accumulation_Disposition", "Acid_Metabolism_Disposition", "Phenolic_Compound_Disposition", "Aromatic_Compound_Disposition", "Color_Stability_Disposition"]
  },
  "Sugar_Accumulation_Disposition": {
    "parent": "Quality_Potential_Disposition",
    "children": ["High_Sugar_Accumulation_Disposition", "Moderate_Sugar_Accumulation_Disposition", "Hexose_Transporter_Activity_Disposition"]
  },
  "High_Sugar_Accumulation_Disposition": {
    "parent": "Sugar_Accumulation_Disposition",
    "children": []
  },
  "Moderate_Sugar_Accumulation_Disposition": {
    "parent": "Sugar_Accumulation_Disposition",
    "children": []
  },
  "Hexose_Transporter_Activity_Disposition": {
    "parent": "Sugar_Accumulation_Disposition",
    "children": []
  },
  "Acid_Metabolism_Disposition": {
    "parent": "Quality_Potential_Disposition",
    "children": ["Tartaric_Acid_Accumulation_Disposition", "Malic_Acid_Accumulation_Disposition", "Malic_Acid_Degradation_Disposition", "Acidity_Retention_Disposition"]
  },
  "Tartaric_Acid_Accumulation_Disposition": {
    "parent": "Acid_Metabolism_Disposition",
    "children": []
  },
  "Malic_Acid_Accumulation_Disposition": {
    "parent": "Acid_Metabolism_Disposition",
    "children": []
  },
  "Malic_Acid_Degradation_Disposition": {
    "parent": "Acid_Metabolism_Disposition",
    "children": []
  },
  "Acidity_Retention_Disposition": {
    "parent": "Acid_Metabolism_Disposition",
    "children": ["High_Acidity_Retention_Disposition", "Low_Acidity_Retention_Disposition"]
  },
  "High_Acidity_Retention_Disposition": {
    "parent": "Acidity_Retention_Disposition",
    "children": []
  },
  "Low_Acidity_Retention_Disposition": {
    "parent": "Acidity_Retention_Disposition",
    "children": []
  },
  "Phenolic_Compound_Disposition": {
    "parent": "Quality_Potential_Disposition",
    "children": ["Anthocyanin_Accumulation_Disposition", "Tannin_Accumulation_Disposition", "Flavonol_Accumulation_Disposition"]
  },
  "Anthocyanin_Accumulation_Disposition": {
    "parent": "Phenolic_Compound_Disposition",
    "children": ["Malvidin_Dominance_Disposition", "Cyanidin_Accumulation_Disposition", "Peonidin_Accumulation_Disposition", "Acylated_Anthocyanin_Disposition", "Skin_Anthocyanin_Concentration_Disposition"]
  },
  "Malvidin_Dominance_Disposition": {
    "parent": "Anthocyanin_Accumulation_Disposition",
    "children": []
  },
  "Cyanidin_Accumulation_Disposition": {
    "parent": "Anthocyanin_Accumulation_Disposition",
    "children": []
  },
  "Peonidin_Accumulation_Disposition": {
    "parent": "Anthocyanin_Accumulation_Disposition",
    "children": []
  },
  "Acylated_Anthocyanin_Disposition": {
    "parent": "Anthocyanin_Accumulation_Disposition",
    "children": []
  },
  "Skin_Anthocyanin_Concentration_Disposition": {
    "parent": "Anthocyanin_Accumulation_Disposition",
    "children": []
  },
  "Tannin_Accumulation_Disposition": {
    "parent": "Phenolic_Compound_Disposition",
    "children": ["Skin_Tannin_Disposition", "Seed_Tannin_Disposition", "Tannin_Polymerization_Disposition", "Tannin_Extractability_Disposition"]
  },
  "Skin_Tannin_Disposition": {
    "parent": "Tannin_Accumulation_Disposition",
    "children": []
  },
  "Seed_Tannin_Disposition": {
    "parent": "Tannin_Accumulation_Disposition",
    "children": []
  },
  "Tannin_Polymerization_Disposition": {
    "parent": "Tannin_Accumulation_Disposition",
    "children": []
  },
  "Tannin_Extractability_Disposition": {
    "parent": "Tannin_Accumulation_Disposition",
    "children": []
  },
  "Flavonol_Accumulation_Disposition": {
    "parent": "Phenolic_Compound_Disposition",
    "children": []
  },
  "Aromatic_Compound_Disposition": {
    "parent": "Quality_Potential_Disposition",
    "children": ["Monoterpene_Accumulation_Disposition", "Norisoprenoid_Accumulation_Disposition", "Methoxypyrazine_Accumulation_Disposition", "Thiol_Precursor_Accumulation_Disposition", "Rotundone_Accumulation_Disposition"]
  },
  "Monoterpene_Accumulation_Disposition": {
    "parent": "Aromatic_Compound_Disposition",
    "children": ["Linalool_Accumulation_Disposition", "Geraniol_Accumulation_Disposition", "Terpene_Glycoside_Accumulation_Disposition"]
  },
  "Linalool_Accumulation_Disposition": {
    "parent": "Monoterpene_Accumulation_Disposition",
    "children": []
  },
  "Geraniol_Accumulation_Disposition": {
    "parent": "Monoterpene_Accumulation_Disposition",
    "children": []
  },
  "Terpene_Glycoside_Accumulation_Disposition": {
    "parent": "Monoterpene_Accumulation_Disposition",
    "children": []
  },
  "Norisoprenoid_Accumulation_Disposition": {
    "parent": "Aromatic_Compound_Disposition",
    "children": ["TDN_Precursor_Accumulation_Disposition", "Beta_Damascenone_Precursor_Disposition"]
  },
  "TDN_Precursor_Accumulation_Disposition": {
    "parent": "Norisoprenoid_Accumulation_Disposition",
    "children": []
  },
  "Beta_Damascenone_Precursor_Disposition": {
    "parent": "Norisoprenoid_Accumulation_Disposition",
    "children": []
  },
  "Methoxypyrazine_Accumulation_Disposition": {
    "parent": "Aromatic_Compound_Disposition",
    "children": ["IBMP_Accumulation_Disposition", "IPMP_Accumulation_Disposition"]
  },
  "IBMP_Accumulation_Disposition": {
    "parent": "Methoxypyrazine_Accumulation_Disposition",
    "children": []
  },
  "IPMP_Accumulation_Disposition": {
    "parent": "Methoxypyrazine_Accumulation_Disposition",
    "children": []
  },
  "Thiol_Precursor_Accumulation_Disposition": {
    "parent": "Aromatic_Compound_Disposition",
    "children": ["3MH_Precursor_Disposition", "4MMP_Precursor_Disposition"]
  },
  "3MH_Precursor_Disposition": {
    "parent": "Thiol_Precursor_Accumulation_Disposition",
    "children": []
  },
  "4MMP_Precursor_Disposition": {
    "parent": "Thiol_Precursor_Accumulation_Disposition",
    "children": []
  },
  "Rotundone_Accumulation_Disposition": {
    "parent": "Aromatic_Compound_Disposition",
    "children": []
  },
  "Color_Stability_Disposition": {
    "parent": "Quality_Potential_Disposition",
    "children": ["Copigmentation_Disposition", "Polymeric_Pigment_Formation_Disposition"]
  },
  "Copigmentation_Disposition": {
    "parent": "Color_Stability_Disposition",
    "children": []
  },
  "Polymeric_Pigment_Formation_Disposition": {
    "parent": "Color_Stability_Disposition",
    "children": []
  },
  "Longevity_And_Resilience_Disposition": {
    "parent": "Grapevine_Disposition",
    "children": ["Vine_Longevity_Disposition", "Cane_Maturation_Disposition", "Recovery_Disposition"]
  },
  "Vine_Longevity_Disposition": {
    "parent": "Longevity_And_Resilience_Disposition",
    "children": ["Structural_Integrity_Disposition", "Decline_Resistance_Disposition"]
  },
  "Structural_Integrity_Disposition": {
    "parent": "Vine_Longevity_Disposition",
    "children": []
  },
  "Decline_Resistance_Disposition": {
    "parent": "Vine_Longevity_Disposition",
    "children": []
  },
  "Cane_Maturation_Disposition": {
    "parent": "Longevity_And_Resilience_Disposition",
    "children": ["Periderm_Formation_Disposition", "Reserve_Accumulation_Disposition"]
  },
  "Periderm_Formation_Disposition": {
    "parent": "Cane_Maturation_Disposition",
    "children": []
  },
  "Reserve_Accumulation_Disposition": {
    "parent": "Cane_Maturation_Disposition",
    "children": []
  },
  "Recovery_Disposition": {
    "parent": "Longevity_And_Resilience_Disposition",
    "children": ["Retraining_Capacity_Disposition", "Crown_Regeneration_Disposition"]
  },
  "Retraining_Capacity_Disposition": {
    "parent": "Recovery_Disposition",
    "children": []
  },
  "Crown_Regeneration_Disposition": {
    "parent": "Recovery_Disposition",
    "children": []
  },

  /* ── Grapevine Role (BFO_0000023) ── */

  "Grapevine_Role": {
    "bfo": "BFO_0000023",
    "label": "role",
    "children": ["Rootstock_Role", "Scion_Role", "Propagation_Role", "Clone_Role", "Breeding_Role", "Vineyard_Role", "Production_System_Role", "Regional_Production_Role", "Quality_Tier_Role", "Ecological_Role", "Research_And_Education_Role", "Conservation_Role"]
  },
  "Rootstock_Role": {
    "parent": "Grapevine_Role",
    "children": ["Vigor_Modifying_Rootstock_Role", "Stress_Resistance_Rootstock_Role", "Abiotic_Stress_Tolerant_Rootstock_Role", "Nutrient_Acquisition_Rootstock_Role", "Parentage_Based_Rootstock_Role", "Rooting_Capacity_Rootstock_Role", "Graft_Affinity_Rootstock_Role"]
  },
  "Vigor_Modifying_Rootstock_Role": {
    "parent": "Rootstock_Role",
    "children": ["High_Vigor_Rootstock_Role", "Moderate_Vigor_Rootstock_Role", "Low_Vigor_Rootstock_Role", "Dwarfing_Rootstock_Role"]
  },
  "High_Vigor_Rootstock_Role": {
    "parent": "Vigor_Modifying_Rootstock_Role",
    "children": []
  },
  "Moderate_Vigor_Rootstock_Role": {
    "parent": "Vigor_Modifying_Rootstock_Role",
    "children": []
  },
  "Low_Vigor_Rootstock_Role": {
    "parent": "Vigor_Modifying_Rootstock_Role",
    "children": []
  },
  "Dwarfing_Rootstock_Role": {
    "parent": "Vigor_Modifying_Rootstock_Role",
    "children": []
  },
  "Stress_Resistance_Rootstock_Role": {
    "parent": "Rootstock_Role",
    "children": ["Phylloxera_Resistant_Rootstock_Role", "Nematode_Resistant_Rootstock_Role", "Fungal_Disease_Resistant_Rootstock_Role"]
  },
  "Phylloxera_Resistant_Rootstock_Role": {
    "parent": "Stress_Resistance_Rootstock_Role",
    "children": ["Root_Phylloxera_Resistant_Rootstock_Role", "Foliar_Phylloxera_Resistant_Rootstock_Role"]
  },
  "Root_Phylloxera_Resistant_Rootstock_Role": {
    "parent": "Phylloxera_Resistant_Rootstock_Role",
    "children": []
  },
  "Foliar_Phylloxera_Resistant_Rootstock_Role": {
    "parent": "Phylloxera_Resistant_Rootstock_Role",
    "children": []
  },
  "Nematode_Resistant_Rootstock_Role": {
    "parent": "Stress_Resistance_Rootstock_Role",
    "children": ["Xiphinema_Index_Resistant_Rootstock_Role", "Meloidogyne_Incognita_Resistant_Rootstock_Role", "Meloidogyne_Javanica_Resistant_Rootstock_Role", "Meloidogyne_Arenaria_Resistant_Rootstock_Role", "Root_Knot_Nematode_Resistant_Rootstock_Role", "Dagger_Nematode_Resistant_Rootstock_Role"]
  },
  "Xiphinema_Index_Resistant_Rootstock_Role": {
    "parent": "Nematode_Resistant_Rootstock_Role",
    "children": []
  },
  "Meloidogyne_Incognita_Resistant_Rootstock_Role": {
    "parent": "Nematode_Resistant_Rootstock_Role",
    "children": []
  },
  "Meloidogyne_Javanica_Resistant_Rootstock_Role": {
    "parent": "Nematode_Resistant_Rootstock_Role",
    "children": []
  },
  "Meloidogyne_Arenaria_Resistant_Rootstock_Role": {
    "parent": "Nematode_Resistant_Rootstock_Role",
    "children": []
  },
  "Root_Knot_Nematode_Resistant_Rootstock_Role": {
    "parent": "Nematode_Resistant_Rootstock_Role",
    "children": []
  },
  "Dagger_Nematode_Resistant_Rootstock_Role": {
    "parent": "Nematode_Resistant_Rootstock_Role",
    "children": []
  },
  "Fungal_Disease_Resistant_Rootstock_Role": {
    "parent": "Stress_Resistance_Rootstock_Role",
    "children": ["Armillaria_Resistant_Rootstock_Role", "Phytophthora_Resistant_Rootstock_Role"]
  },
  "Armillaria_Resistant_Rootstock_Role": {
    "parent": "Fungal_Disease_Resistant_Rootstock_Role",
    "children": []
  },
  "Phytophthora_Resistant_Rootstock_Role": {
    "parent": "Fungal_Disease_Resistant_Rootstock_Role",
    "children": []
  },
  "Abiotic_Stress_Tolerant_Rootstock_Role": {
    "parent": "Rootstock_Role",
    "children": ["Drought_Tolerant_Rootstock_Role", "Salt_Tolerant_Rootstock_Role", "Lime_Tolerant_Rootstock_Role", "Waterlogging_Tolerant_Rootstock_Role", "Cold_Hardy_Rootstock_Role", "Heat_Tolerant_Rootstock_Role"]
  },
  "Drought_Tolerant_Rootstock_Role": {
    "parent": "Abiotic_Stress_Tolerant_Rootstock_Role",
    "children": ["High_Drought_Tolerance_Rootstock_Role", "Moderate_Drought_Tolerance_Rootstock_Role"]
  },
  "High_Drought_Tolerance_Rootstock_Role": {
    "parent": "Drought_Tolerant_Rootstock_Role",
    "children": []
  },
  "Moderate_Drought_Tolerance_Rootstock_Role": {
    "parent": "Drought_Tolerant_Rootstock_Role",
    "children": []
  },
  "Salt_Tolerant_Rootstock_Role": {
    "parent": "Abiotic_Stress_Tolerant_Rootstock_Role",
    "children": ["Chloride_Excluding_Rootstock_Role", "Sodium_Excluding_Rootstock_Role", "High_Salt_Tolerance_Rootstock_Role", "Moderate_Salt_Tolerance_Rootstock_Role"]
  },
  "Chloride_Excluding_Rootstock_Role": {
    "parent": "Salt_Tolerant_Rootstock_Role",
    "children": []
  },
  "Sodium_Excluding_Rootstock_Role": {
    "parent": "Salt_Tolerant_Rootstock_Role",
    "children": []
  },
  "High_Salt_Tolerance_Rootstock_Role": {
    "parent": "Salt_Tolerant_Rootstock_Role",
    "children": []
  },
  "Moderate_Salt_Tolerance_Rootstock_Role": {
    "parent": "Salt_Tolerant_Rootstock_Role",
    "children": []
  },
  "Lime_Tolerant_Rootstock_Role": {
    "parent": "Abiotic_Stress_Tolerant_Rootstock_Role",
    "children": ["High_Lime_Tolerance_Rootstock_Role", "Moderate_Lime_Tolerance_Rootstock_Role", "Low_Lime_Tolerance_Rootstock_Role"]
  },
  "High_Lime_Tolerance_Rootstock_Role": {
    "parent": "Lime_Tolerant_Rootstock_Role",
    "children": []
  },
  "Moderate_Lime_Tolerance_Rootstock_Role": {
    "parent": "Lime_Tolerant_Rootstock_Role",
    "children": []
  },
  "Low_Lime_Tolerance_Rootstock_Role": {
    "parent": "Lime_Tolerant_Rootstock_Role",
    "children": []
  },
  "Waterlogging_Tolerant_Rootstock_Role": {
    "parent": "Abiotic_Stress_Tolerant_Rootstock_Role",
    "children": []
  },
  "Cold_Hardy_Rootstock_Role": {
    "parent": "Abiotic_Stress_Tolerant_Rootstock_Role",
    "children": []
  },
  "Heat_Tolerant_Rootstock_Role": {
    "parent": "Abiotic_Stress_Tolerant_Rootstock_Role",
    "children": []
  },
  "Nutrient_Acquisition_Rootstock_Role": {
    "parent": "Rootstock_Role",
    "children": ["High_Potassium_Uptake_Rootstock_Role", "Low_Potassium_Uptake_Rootstock_Role", "Iron_Efficient_Rootstock_Role", "Magnesium_Efficient_Rootstock_Role", "Nitrogen_Efficient_Rootstock_Role"]
  },
  "High_Potassium_Uptake_Rootstock_Role": {
    "parent": "Nutrient_Acquisition_Rootstock_Role",
    "children": []
  },
  "Low_Potassium_Uptake_Rootstock_Role": {
    "parent": "Nutrient_Acquisition_Rootstock_Role",
    "children": []
  },
  "Iron_Efficient_Rootstock_Role": {
    "parent": "Nutrient_Acquisition_Rootstock_Role",
    "children": []
  },
  "Magnesium_Efficient_Rootstock_Role": {
    "parent": "Nutrient_Acquisition_Rootstock_Role",
    "children": []
  },
  "Nitrogen_Efficient_Rootstock_Role": {
    "parent": "Nutrient_Acquisition_Rootstock_Role",
    "children": []
  },
  "Parentage_Based_Rootstock_Role": {
    "parent": "Rootstock_Role",
    "children": ["Vitis_Riparia_Derived_Rootstock_Role", "Vitis_Rupestris_Derived_Rootstock_Role", "Vitis_Berlandieri_Derived_Rootstock_Role", "Vitis_Champinii_Derived_Rootstock_Role", "Vitis_Cinerea_Derived_Rootstock_Role", "Vitis_Longii_Derived_Rootstock_Role", "Vitis_Solonis_Derived_Rootstock_Role", "Riparia_X_Rupestris_Rootstock_Role", "Berlandieri_X_Riparia_Rootstock_Role", "Berlandieri_X_Rupestris_Rootstock_Role", "Complex_Hybrid_Rootstock_Role"]
  },
  "Vitis_Riparia_Derived_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Vitis_Rupestris_Derived_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Vitis_Berlandieri_Derived_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Vitis_Champinii_Derived_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Vitis_Cinerea_Derived_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Vitis_Longii_Derived_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Vitis_Solonis_Derived_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Riparia_X_Rupestris_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Berlandieri_X_Riparia_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Berlandieri_X_Rupestris_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Complex_Hybrid_Rootstock_Role": {
    "parent": "Parentage_Based_Rootstock_Role",
    "children": []
  },
  "Rooting_Capacity_Rootstock_Role": {
    "parent": "Rootstock_Role",
    "children": ["Easy_Rooting_Rootstock_Role", "Difficult_Rooting_Rootstock_Role", "Moderate_Rooting_Rootstock_Role"]
  },
  "Easy_Rooting_Rootstock_Role": {
    "parent": "Rooting_Capacity_Rootstock_Role",
    "children": []
  },
  "Difficult_Rooting_Rootstock_Role": {
    "parent": "Rooting_Capacity_Rootstock_Role",
    "children": []
  },
  "Moderate_Rooting_Rootstock_Role": {
    "parent": "Rooting_Capacity_Rootstock_Role",
    "children": []
  },
  "Graft_Affinity_Rootstock_Role": {
    "parent": "Rootstock_Role",
    "children": ["Universal_Compatibility_Rootstock_Role", "Limited_Compatibility_Rootstock_Role", "Delayed_Incompatibility_Prone_Rootstock_Role"]
  },
  "Universal_Compatibility_Rootstock_Role": {
    "parent": "Graft_Affinity_Rootstock_Role",
    "children": []
  },
  "Limited_Compatibility_Rootstock_Role": {
    "parent": "Graft_Affinity_Rootstock_Role",
    "children": []
  },
  "Delayed_Incompatibility_Prone_Rootstock_Role": {
    "parent": "Graft_Affinity_Rootstock_Role",
    "children": []
  },
  "Scion_Role": {
    "parent": "Grapevine_Role",
    "children": ["Wine_Production_Scion_Role", "Table_Grape_Scion_Role", "Raisin_Production_Scion_Role", "Juice_Production_Scion_Role", "Distillation_Scion_Role", "Multi_Purpose_Scion_Role"]
  },
  "Wine_Production_Scion_Role": {
    "parent": "Scion_Role",
    "children": ["Red_Wine_Scion_Role", "White_Wine_Scion_Role", "Rose_Wine_Scion_Role", "Sparkling_Wine_Scion_Role", "Fortified_Wine_Scion_Role", "Dessert_Wine_Scion_Role", "Orange_Wine_Scion_Role"]
  },
  "Red_Wine_Scion_Role": {
    "parent": "Wine_Production_Scion_Role",
    "children": ["Premium_Red_Wine_Scion_Role", "Bulk_Red_Wine_Scion_Role", "Teinturier_Scion_Role", "Blending_Red_Wine_Scion_Role"]
  },
  "Premium_Red_Wine_Scion_Role": {
    "parent": "Red_Wine_Scion_Role",
    "children": []
  },
  "Bulk_Red_Wine_Scion_Role": {
    "parent": "Red_Wine_Scion_Role",
    "children": []
  },
  "Teinturier_Scion_Role": {
    "parent": "Red_Wine_Scion_Role",
    "children": []
  },
  "Blending_Red_Wine_Scion_Role": {
    "parent": "Red_Wine_Scion_Role",
    "children": []
  },
  "White_Wine_Scion_Role": {
    "parent": "Wine_Production_Scion_Role",
    "children": ["Premium_White_Wine_Scion_Role", "Aromatic_White_Wine_Scion_Role", "Neutral_White_Wine_Scion_Role", "Bulk_White_Wine_Scion_Role"]
  },
  "Premium_White_Wine_Scion_Role": {
    "parent": "White_Wine_Scion_Role",
    "children": []
  },
  "Aromatic_White_Wine_Scion_Role": {
    "parent": "White_Wine_Scion_Role",
    "children": []
  },
  "Neutral_White_Wine_Scion_Role": {
    "parent": "White_Wine_Scion_Role",
    "children": []
  },
  "Bulk_White_Wine_Scion_Role": {
    "parent": "White_Wine_Scion_Role",
    "children": []
  },
  "Rose_Wine_Scion_Role": {
    "parent": "Wine_Production_Scion_Role",
    "children": []
  },
  "Sparkling_Wine_Scion_Role": {
    "parent": "Wine_Production_Scion_Role",
    "children": ["Champagne_Method_Scion_Role", "Charmat_Method_Scion_Role", "Pet_Nat_Scion_Role"]
  },
  "Champagne_Method_Scion_Role": {
    "parent": "Sparkling_Wine_Scion_Role",
    "children": []
  },
  "Charmat_Method_Scion_Role": {
    "parent": "Sparkling_Wine_Scion_Role",
    "children": []
  },
  "Pet_Nat_Scion_Role": {
    "parent": "Sparkling_Wine_Scion_Role",
    "children": []
  },
  "Fortified_Wine_Scion_Role": {
    "parent": "Wine_Production_Scion_Role",
    "children": ["Port_Style_Scion_Role", "Sherry_Style_Scion_Role", "Madeira_Style_Scion_Role", "Muscat_Fortified_Scion_Role"]
  },
  "Port_Style_Scion_Role": {
    "parent": "Fortified_Wine_Scion_Role",
    "children": []
  },
  "Sherry_Style_Scion_Role": {
    "parent": "Fortified_Wine_Scion_Role",
    "children": []
  },
  "Madeira_Style_Scion_Role": {
    "parent": "Fortified_Wine_Scion_Role",
    "children": []
  },
  "Muscat_Fortified_Scion_Role": {
    "parent": "Fortified_Wine_Scion_Role",
    "children": []
  },
  "Dessert_Wine_Scion_Role": {
    "parent": "Wine_Production_Scion_Role",
    "children": ["Late_Harvest_Scion_Role", "Noble_Rot_Scion_Role", "Ice_Wine_Scion_Role", "Passito_Style_Scion_Role"]
  },
  "Late_Harvest_Scion_Role": {
    "parent": "Dessert_Wine_Scion_Role",
    "children": []
  },
  "Noble_Rot_Scion_Role": {
    "parent": "Dessert_Wine_Scion_Role",
    "children": []
  },
  "Ice_Wine_Scion_Role": {
    "parent": "Dessert_Wine_Scion_Role",
    "children": []
  },
  "Passito_Style_Scion_Role": {
    "parent": "Dessert_Wine_Scion_Role",
    "children": []
  },
  "Orange_Wine_Scion_Role": {
    "parent": "Wine_Production_Scion_Role",
    "children": []
  },
  "Table_Grape_Scion_Role": {
    "parent": "Scion_Role",
    "children": ["Fresh_Consumption_Table_Grape_Role", "Seedless_Table_Grape_Scion_Role", "Seeded_Table_Grape_Scion_Role", "Early_Season_Table_Grape_Role", "Mid_Season_Table_Grape_Role", "Late_Season_Table_Grape_Role", "Long_Storage_Table_Grape_Role", "Export_Table_Grape_Role"]
  },
  "Fresh_Consumption_Table_Grape_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": ["Red_Table_Grape_Scion_Role", "White_Table_Grape_Scion_Role", "Black_Table_Grape_Scion_Role"]
  },
  "Red_Table_Grape_Scion_Role": {
    "parent": "Fresh_Consumption_Table_Grape_Role",
    "children": []
  },
  "White_Table_Grape_Scion_Role": {
    "parent": "Fresh_Consumption_Table_Grape_Role",
    "children": []
  },
  "Black_Table_Grape_Scion_Role": {
    "parent": "Fresh_Consumption_Table_Grape_Role",
    "children": []
  },
  "Seedless_Table_Grape_Scion_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": ["Stenospermocarpic_Table_Grape_Role", "Parthenocarpic_Table_Grape_Role"]
  },
  "Stenospermocarpic_Table_Grape_Role": {
    "parent": "Seedless_Table_Grape_Scion_Role",
    "children": []
  },
  "Parthenocarpic_Table_Grape_Role": {
    "parent": "Seedless_Table_Grape_Scion_Role",
    "children": []
  },
  "Seeded_Table_Grape_Scion_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": []
  },
  "Early_Season_Table_Grape_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": []
  },
  "Mid_Season_Table_Grape_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": []
  },
  "Late_Season_Table_Grape_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": []
  },
  "Long_Storage_Table_Grape_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": []
  },
  "Export_Table_Grape_Role": {
    "parent": "Table_Grape_Scion_Role",
    "children": []
  },
  "Raisin_Production_Scion_Role": {
    "parent": "Scion_Role",
    "children": ["Natural_Raisin_Scion_Role", "Golden_Raisin_Scion_Role", "Currant_Production_Scion_Role", "Sultana_Production_Scion_Role"]
  },
  "Natural_Raisin_Scion_Role": {
    "parent": "Raisin_Production_Scion_Role",
    "children": []
  },
  "Golden_Raisin_Scion_Role": {
    "parent": "Raisin_Production_Scion_Role",
    "children": []
  },
  "Currant_Production_Scion_Role": {
    "parent": "Raisin_Production_Scion_Role",
    "children": []
  },
  "Sultana_Production_Scion_Role": {
    "parent": "Raisin_Production_Scion_Role",
    "children": []
  },
  "Juice_Production_Scion_Role": {
    "parent": "Scion_Role",
    "children": ["Grape_Juice_Scion_Role", "Concentrate_Production_Scion_Role"]
  },
  "Grape_Juice_Scion_Role": {
    "parent": "Juice_Production_Scion_Role",
    "children": []
  },
  "Concentrate_Production_Scion_Role": {
    "parent": "Juice_Production_Scion_Role",
    "children": []
  },
  "Distillation_Scion_Role": {
    "parent": "Scion_Role",
    "children": ["Brandy_Production_Scion_Role", "Cognac_Production_Scion_Role", "Armagnac_Production_Scion_Role", "Pisco_Production_Scion_Role", "Grappa_Base_Scion_Role"]
  },
  "Brandy_Production_Scion_Role": {
    "parent": "Distillation_Scion_Role",
    "children": []
  },
  "Cognac_Production_Scion_Role": {
    "parent": "Distillation_Scion_Role",
    "children": []
  },
  "Armagnac_Production_Scion_Role": {
    "parent": "Distillation_Scion_Role",
    "children": []
  },
  "Pisco_Production_Scion_Role": {
    "parent": "Distillation_Scion_Role",
    "children": []
  },
  "Grappa_Base_Scion_Role": {
    "parent": "Distillation_Scion_Role",
    "children": []
  },
  "Multi_Purpose_Scion_Role": {
    "parent": "Scion_Role",
    "children": ["Wine_And_Table_Dual_Purpose_Role", "Wine_And_Raisin_Dual_Purpose_Role"]
  },
  "Wine_And_Table_Dual_Purpose_Role": {
    "parent": "Multi_Purpose_Scion_Role",
    "children": []
  },
  "Wine_And_Raisin_Dual_Purpose_Role": {
    "parent": "Multi_Purpose_Scion_Role",
    "children": []
  },
  "Propagation_Role": {
    "parent": "Grapevine_Role",
    "children": ["Mother_Plant_Role", "Propagation_Material_Role", "Nursery_Plant_Role"]
  },
  "Mother_Plant_Role": {
    "parent": "Propagation_Role",
    "children": ["Certified_Mother_Plant_Role", "Foundation_Plant_Role", "Nuclear_Stock_Plant_Role", "Virus_Tested_Mother_Plant_Role", "Virus_Free_Mother_Plant_Role", "Heat_Treated_Mother_Plant_Role", "Meristem_Derived_Mother_Plant_Role", "Scion_Mother_Plant_Role", "Rootstock_Mother_Plant_Role"]
  },
  "Certified_Mother_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": ["Pre_Basic_Mother_Plant_Role", "Basic_Mother_Plant_Role", "Certified_Mother_Plant_Category_Role"]
  },
  "Pre_Basic_Mother_Plant_Role": {
    "parent": "Certified_Mother_Plant_Role",
    "children": []
  },
  "Basic_Mother_Plant_Role": {
    "parent": "Certified_Mother_Plant_Role",
    "children": []
  },
  "Certified_Mother_Plant_Category_Role": {
    "parent": "Certified_Mother_Plant_Role",
    "children": []
  },
  "Foundation_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Nuclear_Stock_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Virus_Tested_Mother_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Virus_Free_Mother_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Heat_Treated_Mother_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Meristem_Derived_Mother_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Scion_Mother_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Rootstock_Mother_Plant_Role": {
    "parent": "Mother_Plant_Role",
    "children": []
  },
  "Propagation_Material_Role": {
    "parent": "Propagation_Role",
    "children": ["Cutting_Role", "Rootstock_Cutting_Role", "Scion_Wood_Role", "Bench_Graft_Role", "Field_Graft_Role", "Green_Graft_Role", "Omega_Graft_Role", "Whip_Graft_Role", "Cleft_Graft_Role", "Chip_Bud_Role", "T_Bud_Role"]
  },
  "Cutting_Role": {
    "parent": "Propagation_Material_Role",
    "children": ["Hardwood_Cutting_Role", "Softwood_Cutting_Role", "Semi_Hardwood_Cutting_Role", "Single_Node_Cutting_Role", "Two_Node_Cutting_Role", "Three_Node_Cutting_Role"]
  },
  "Hardwood_Cutting_Role": {
    "parent": "Cutting_Role",
    "children": []
  },
  "Softwood_Cutting_Role": {
    "parent": "Cutting_Role",
    "children": []
  },
  "Semi_Hardwood_Cutting_Role": {
    "parent": "Cutting_Role",
    "children": []
  },
  "Single_Node_Cutting_Role": {
    "parent": "Cutting_Role",
    "children": []
  },
  "Two_Node_Cutting_Role": {
    "parent": "Cutting_Role",
    "children": []
  },
  "Three_Node_Cutting_Role": {
    "parent": "Cutting_Role",
    "children": []
  },
  "Rootstock_Cutting_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Scion_Wood_Role": {
    "parent": "Propagation_Material_Role",
    "children": ["Budwood_Role", "Graftwood_Role"]
  },
  "Budwood_Role": {
    "parent": "Scion_Wood_Role",
    "children": []
  },
  "Graftwood_Role": {
    "parent": "Scion_Wood_Role",
    "children": []
  },
  "Bench_Graft_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Field_Graft_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Green_Graft_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Omega_Graft_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Whip_Graft_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Cleft_Graft_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Chip_Bud_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "T_Bud_Role": {
    "parent": "Propagation_Material_Role",
    "children": []
  },
  "Nursery_Plant_Role": {
    "parent": "Propagation_Role",
    "children": ["Rooted_Cutting_Role", "Grafted_Vine_Role", "Potted_Vine_Role", "Bare_Root_Vine_Role", "Dormant_Vine_Role", "Green_Growing_Vine_Role"]
  },
  "Rooted_Cutting_Role": {
    "parent": "Nursery_Plant_Role",
    "children": []
  },
  "Grafted_Vine_Role": {
    "parent": "Nursery_Plant_Role",
    "children": []
  },
  "Potted_Vine_Role": {
    "parent": "Nursery_Plant_Role",
    "children": []
  },
  "Bare_Root_Vine_Role": {
    "parent": "Nursery_Plant_Role",
    "children": []
  },
  "Dormant_Vine_Role": {
    "parent": "Nursery_Plant_Role",
    "children": []
  },
  "Green_Growing_Vine_Role": {
    "parent": "Nursery_Plant_Role",
    "children": []
  },
  "Clone_Role": {
    "parent": "Grapevine_Role",
    "children": ["Official_Clone_Role", "Selection_Status_Clone_Role", "Performance_Clone_Role", "Heritage_Clone_Role", "Regional_Clone_Role", "Experimental_Clone_Role"]
  },
  "Official_Clone_Role": {
    "parent": "Clone_Role",
    "children": ["Registered_Clone_Role", "Certified_Clone_Role", "Standard_Clone_Role"]
  },
  "Registered_Clone_Role": {
    "parent": "Official_Clone_Role",
    "children": []
  },
  "Certified_Clone_Role": {
    "parent": "Official_Clone_Role",
    "children": []
  },
  "Standard_Clone_Role": {
    "parent": "Official_Clone_Role",
    "children": []
  },
  "Selection_Status_Clone_Role": {
    "parent": "Clone_Role",
    "children": ["Mass_Selection_Clone_Role", "Clonal_Selection_Clone_Role", "Sanitary_Selection_Clone_Role", "Genetic_Selection_Clone_Role"]
  },
  "Mass_Selection_Clone_Role": {
    "parent": "Selection_Status_Clone_Role",
    "children": []
  },
  "Clonal_Selection_Clone_Role": {
    "parent": "Selection_Status_Clone_Role",
    "children": []
  },
  "Sanitary_Selection_Clone_Role": {
    "parent": "Selection_Status_Clone_Role",
    "children": []
  },
  "Genetic_Selection_Clone_Role": {
    "parent": "Selection_Status_Clone_Role",
    "children": []
  },
  "Performance_Clone_Role": {
    "parent": "Clone_Role",
    "children": ["High_Yield_Clone_Role", "Quality_Clone_Role", "Balanced_Clone_Role", "Disease_Resistant_Clone_Role"]
  },
  "High_Yield_Clone_Role": {
    "parent": "Performance_Clone_Role",
    "children": []
  },
  "Quality_Clone_Role": {
    "parent": "Performance_Clone_Role",
    "children": []
  },
  "Balanced_Clone_Role": {
    "parent": "Performance_Clone_Role",
    "children": []
  },
  "Disease_Resistant_Clone_Role": {
    "parent": "Performance_Clone_Role",
    "children": []
  },
  "Heritage_Clone_Role": {
    "parent": "Clone_Role",
    "children": ["Historic_Clone_Role", "Heirloom_Clone_Role", "Pre_Phylloxera_Clone_Role", "Old_Vine_Clone_Role"]
  },
  "Historic_Clone_Role": {
    "parent": "Heritage_Clone_Role",
    "children": []
  },
  "Heirloom_Clone_Role": {
    "parent": "Heritage_Clone_Role",
    "children": []
  },
  "Pre_Phylloxera_Clone_Role": {
    "parent": "Heritage_Clone_Role",
    "children": []
  },
  "Old_Vine_Clone_Role": {
    "parent": "Heritage_Clone_Role",
    "children": []
  },
  "Regional_Clone_Role": {
    "parent": "Clone_Role",
    "children": ["French_Clone_Role", "Italian_Clone_Role", "German_Clone_Role", "Australian_Clone_Role", "American_Clone_Role", "South_African_Clone_Role"]
  },
  "French_Clone_Role": {
    "parent": "Regional_Clone_Role",
    "children": ["ENTAV_INRA_Clone_Role"]
  },
  "ENTAV_INRA_Clone_Role": {
    "parent": "French_Clone_Role",
    "children": []
  },
  "Italian_Clone_Role": {
    "parent": "Regional_Clone_Role",
    "children": ["Rauscedo_Clone_Role"]
  },
  "Rauscedo_Clone_Role": {
    "parent": "Italian_Clone_Role",
    "children": []
  },
  "German_Clone_Role": {
    "parent": "Regional_Clone_Role",
    "children": ["Geisenheim_Clone_Role", "Freiburg_Clone_Role", "Weinsberg_Clone_Role"]
  },
  "Geisenheim_Clone_Role": {
    "parent": "German_Clone_Role",
    "children": []
  },
  "Freiburg_Clone_Role": {
    "parent": "German_Clone_Role",
    "children": []
  },
  "Weinsberg_Clone_Role": {
    "parent": "German_Clone_Role",
    "children": []
  },
  "Australian_Clone_Role": {
    "parent": "Regional_Clone_Role",
    "children": ["CSIRO_Clone_Role"]
  },
  "CSIRO_Clone_Role": {
    "parent": "Australian_Clone_Role",
    "children": []
  },
  "American_Clone_Role": {
    "parent": "Regional_Clone_Role",
    "children": ["FPS_Clone_Role", "FPMS_Clone_Role"]
  },
  "FPS_Clone_Role": {
    "parent": "American_Clone_Role",
    "children": []
  },
  "FPMS_Clone_Role": {
    "parent": "American_Clone_Role",
    "children": []
  },
  "South_African_Clone_Role": {
    "parent": "Regional_Clone_Role",
    "children": []
  },
  "Experimental_Clone_Role": {
    "parent": "Clone_Role",
    "children": ["Breeding_Line_Clone_Role", "Research_Clone_Role"]
  },
  "Breeding_Line_Clone_Role": {
    "parent": "Experimental_Clone_Role",
    "children": []
  },
  "Research_Clone_Role": {
    "parent": "Experimental_Clone_Role",
    "children": []
  },
  "Breeding_Role": {
    "parent": "Grapevine_Role",
    "children": ["Parent_Role", "Hybrid_Role", "Selection_Role", "Mapping_Population_Role", "Genetic_Resource_Role"]
  },
  "Parent_Role": {
    "parent": "Breeding_Role",
    "children": ["Maternal_Parent_Role", "Paternal_Parent_Role", "Recurrent_Parent_Role", "Donor_Parent_Role"]
  },
  "Maternal_Parent_Role": {
    "parent": "Parent_Role",
    "children": ["Seed_Parent_Role"]
  },
  "Seed_Parent_Role": {
    "parent": "Maternal_Parent_Role",
    "children": []
  },
  "Paternal_Parent_Role": {
    "parent": "Parent_Role",
    "children": ["Pollen_Parent_Role"]
  },
  "Pollen_Parent_Role": {
    "parent": "Paternal_Parent_Role",
    "children": []
  },
  "Recurrent_Parent_Role": {
    "parent": "Parent_Role",
    "children": []
  },
  "Donor_Parent_Role": {
    "parent": "Parent_Role",
    "children": ["Resistance_Donor_Role", "Quality_Donor_Role"]
  },
  "Resistance_Donor_Role": {
    "parent": "Donor_Parent_Role",
    "children": []
  },
  "Quality_Donor_Role": {
    "parent": "Donor_Parent_Role",
    "children": []
  },
  "Hybrid_Role": {
    "parent": "Breeding_Role",
    "children": ["Interspecific_Hybrid_Role", "Intraspecific_Hybrid_Role", "F1_Hybrid_Role", "Backcross_Hybrid_Role", "PIWI_Cultivar_Role"]
  },
  "Interspecific_Hybrid_Role": {
    "parent": "Hybrid_Role",
    "children": ["French_American_Hybrid_Role", "American_Hybrid_Role", "Complex_Interspecific_Hybrid_Role"]
  },
  "French_American_Hybrid_Role": {
    "parent": "Interspecific_Hybrid_Role",
    "children": []
  },
  "American_Hybrid_Role": {
    "parent": "Interspecific_Hybrid_Role",
    "children": []
  },
  "Complex_Interspecific_Hybrid_Role": {
    "parent": "Interspecific_Hybrid_Role",
    "children": []
  },
  "Intraspecific_Hybrid_Role": {
    "parent": "Hybrid_Role",
    "children": []
  },
  "F1_Hybrid_Role": {
    "parent": "Hybrid_Role",
    "children": []
  },
  "Backcross_Hybrid_Role": {
    "parent": "Hybrid_Role",
    "children": ["BC1_Role", "BC2_Role", "BC3_Role", "BC4_Role"]
  },
  "BC1_Role": {
    "parent": "Backcross_Hybrid_Role",
    "children": []
  },
  "BC2_Role": {
    "parent": "Backcross_Hybrid_Role",
    "children": []
  },
  "BC3_Role": {
    "parent": "Backcross_Hybrid_Role",
    "children": []
  },
  "BC4_Role": {
    "parent": "Backcross_Hybrid_Role",
    "children": []
  },
  "PIWI_Cultivar_Role": {
    "parent": "Hybrid_Role",
    "children": ["First_Generation_PIWI_Role", "Second_Generation_PIWI_Role", "Third_Generation_PIWI_Role"]
  },
  "First_Generation_PIWI_Role": {
    "parent": "PIWI_Cultivar_Role",
    "children": []
  },
  "Second_Generation_PIWI_Role": {
    "parent": "PIWI_Cultivar_Role",
    "children": []
  },
  "Third_Generation_PIWI_Role": {
    "parent": "PIWI_Cultivar_Role",
    "children": []
  },
  "Selection_Role": {
    "parent": "Breeding_Role",
    "children": ["Seedling_Selection_Role", "Field_Selection_Role", "Progeny_Selection_Role"]
  },
  "Seedling_Selection_Role": {
    "parent": "Selection_Role",
    "children": []
  },
  "Field_Selection_Role": {
    "parent": "Selection_Role",
    "children": []
  },
  "Progeny_Selection_Role": {
    "parent": "Selection_Role",
    "children": []
  },
  "Mapping_Population_Role": {
    "parent": "Breeding_Role",
    "children": ["Mapping_Parent_Role", "Reference_Parent_Role", "Segregating_Population_Member_Role"]
  },
  "Mapping_Parent_Role": {
    "parent": "Mapping_Population_Role",
    "children": []
  },
  "Reference_Parent_Role": {
    "parent": "Mapping_Population_Role",
    "children": []
  },
  "Segregating_Population_Member_Role": {
    "parent": "Mapping_Population_Role",
    "children": []
  },
  "Genetic_Resource_Role": {
    "parent": "Breeding_Role",
    "children": ["Wild_Vitis_Genetic_Resource_Role", "Landrace_Genetic_Resource_Role", "Germplasm_Collection_Member_Role"]
  },
  "Wild_Vitis_Genetic_Resource_Role": {
    "parent": "Genetic_Resource_Role",
    "children": []
  },
  "Landrace_Genetic_Resource_Role": {
    "parent": "Genetic_Resource_Role",
    "children": []
  },
  "Germplasm_Collection_Member_Role": {
    "parent": "Genetic_Resource_Role",
    "children": []
  },
  "Vineyard_Role": {
    "parent": "Grapevine_Role",
    "children": ["Training_System_Role", "Canopy_Position_Role", "Vine_Age_Role", "Vine_Spacing_Role", "Row_Orientation_Role"]
  },
  "Training_System_Role": {
    "parent": "Vineyard_Role",
    "children": ["Head_Trained_Vine_Role", "Cordon_Trained_Vine_Role", "Cane_Pruned_Vine_Role", "Pergola_Trained_Vine_Role", "Lyre_Trained_Vine_Role", "Geneva_Double_Curtain_Role", "Scott_Henry_Trained_Role", "Smart_Dyson_Trained_Role", "Minimal_Pruning_Role", "Mechanically_Pruned_Role"]
  },
  "Head_Trained_Vine_Role": {
    "parent": "Training_System_Role",
    "children": ["Gobelet_Trained_Role", "Bush_Vine_Role"]
  },
  "Gobelet_Trained_Role": {
    "parent": "Head_Trained_Vine_Role",
    "children": []
  },
  "Bush_Vine_Role": {
    "parent": "Head_Trained_Vine_Role",
    "children": []
  },
  "Cordon_Trained_Vine_Role": {
    "parent": "Training_System_Role",
    "children": ["Bilateral_Cordon_Role", "Unilateral_Cordon_Role", "High_Cordon_Role", "Low_Cordon_Role"]
  },
  "Bilateral_Cordon_Role": {
    "parent": "Cordon_Trained_Vine_Role",
    "children": []
  },
  "Unilateral_Cordon_Role": {
    "parent": "Cordon_Trained_Vine_Role",
    "children": []
  },
  "High_Cordon_Role": {
    "parent": "Cordon_Trained_Vine_Role",
    "children": []
  },
  "Low_Cordon_Role": {
    "parent": "Cordon_Trained_Vine_Role",
    "children": []
  },
  "Cane_Pruned_Vine_Role": {
    "parent": "Training_System_Role",
    "children": ["Guyot_Trained_Role", "Double_Guyot_Role", "Single_Guyot_Role"]
  },
  "Guyot_Trained_Role": {
    "parent": "Cane_Pruned_Vine_Role",
    "children": []
  },
  "Double_Guyot_Role": {
    "parent": "Cane_Pruned_Vine_Role",
    "children": []
  },
  "Single_Guyot_Role": {
    "parent": "Cane_Pruned_Vine_Role",
    "children": []
  },
  "Pergola_Trained_Vine_Role": {
    "parent": "Training_System_Role",
    "children": ["Tendone_Role", "Parral_Role"]
  },
  "Tendone_Role": {
    "parent": "Pergola_Trained_Vine_Role",
    "children": []
  },
  "Parral_Role": {
    "parent": "Pergola_Trained_Vine_Role",
    "children": []
  },
  "Lyre_Trained_Vine_Role": {
    "parent": "Training_System_Role",
    "children": []
  },
  "Geneva_Double_Curtain_Role": {
    "parent": "Training_System_Role",
    "children": []
  },
  "Scott_Henry_Trained_Role": {
    "parent": "Training_System_Role",
    "children": []
  },
  "Smart_Dyson_Trained_Role": {
    "parent": "Training_System_Role",
    "children": []
  },
  "Minimal_Pruning_Role": {
    "parent": "Training_System_Role",
    "children": []
  },
  "Mechanically_Pruned_Role": {
    "parent": "Training_System_Role",
    "children": []
  },
  "Canopy_Position_Role": {
    "parent": "Vineyard_Role",
    "children": ["Fruiting_Zone_Role", "Renewal_Zone_Role", "Canopy_Interior_Role", "Canopy_Exterior_Role"]
  },
  "Fruiting_Zone_Role": {
    "parent": "Canopy_Position_Role",
    "children": []
  },
  "Renewal_Zone_Role": {
    "parent": "Canopy_Position_Role",
    "children": []
  },
  "Canopy_Interior_Role": {
    "parent": "Canopy_Position_Role",
    "children": []
  },
  "Canopy_Exterior_Role": {
    "parent": "Canopy_Position_Role",
    "children": []
  },
  "Vine_Age_Role": {
    "parent": "Vineyard_Role",
    "children": ["Young_Vine_Role", "Established_Vine_Role", "Mature_Vine_Role", "Old_Vine_Role"]
  },
  "Young_Vine_Role": {
    "parent": "Vine_Age_Role",
    "children": []
  },
  "Established_Vine_Role": {
    "parent": "Vine_Age_Role",
    "children": []
  },
  "Mature_Vine_Role": {
    "parent": "Vine_Age_Role",
    "children": []
  },
  "Old_Vine_Role": {
    "parent": "Vine_Age_Role",
    "children": ["Vieilles_Vignes_Role", "Centenarian_Vine_Role"]
  },
  "Vieilles_Vignes_Role": {
    "parent": "Old_Vine_Role",
    "children": []
  },
  "Centenarian_Vine_Role": {
    "parent": "Old_Vine_Role",
    "children": []
  },
  "Vine_Spacing_Role": {
    "parent": "Vineyard_Role",
    "children": ["High_Density_Planted_Role", "Medium_Density_Planted_Role", "Low_Density_Planted_Role", "Wide_Spacing_Role"]
  },
  "High_Density_Planted_Role": {
    "parent": "Vine_Spacing_Role",
    "children": []
  },
  "Medium_Density_Planted_Role": {
    "parent": "Vine_Spacing_Role",
    "children": []
  },
  "Low_Density_Planted_Role": {
    "parent": "Vine_Spacing_Role",
    "children": []
  },
  "Wide_Spacing_Role": {
    "parent": "Vine_Spacing_Role",
    "children": []
  },
  "Row_Orientation_Role": {
    "parent": "Vineyard_Role",
    "children": ["North_South_Row_Role", "East_West_Row_Role", "Slope_Aligned_Row_Role"]
  },
  "North_South_Row_Role": {
    "parent": "Row_Orientation_Role",
    "children": []
  },
  "East_West_Row_Role": {
    "parent": "Row_Orientation_Role",
    "children": []
  },
  "Slope_Aligned_Row_Role": {
    "parent": "Row_Orientation_Role",
    "children": []
  },
  "Production_System_Role": {
    "parent": "Grapevine_Role",
    "children": ["Conventional_Production_Role", "Organic_Production_Role", "Biodynamic_Production_Role", "Sustainable_Production_Role", "Regenerative_Production_Role", "Dry_Farmed_Role", "Irrigated_Role"]
  },
  "Conventional_Production_Role": {
    "parent": "Production_System_Role",
    "children": []
  },
  "Organic_Production_Role": {
    "parent": "Production_System_Role",
    "children": ["Certified_Organic_Role", "Transitional_Organic_Role"]
  },
  "Certified_Organic_Role": {
    "parent": "Organic_Production_Role",
    "children": []
  },
  "Transitional_Organic_Role": {
    "parent": "Organic_Production_Role",
    "children": []
  },
  "Biodynamic_Production_Role": {
    "parent": "Production_System_Role",
    "children": ["Demeter_Certified_Role"]
  },
  "Demeter_Certified_Role": {
    "parent": "Biodynamic_Production_Role",
    "children": []
  },
  "Sustainable_Production_Role": {
    "parent": "Production_System_Role",
    "children": ["Integrated_Production_Role", "Low_Input_Production_Role"]
  },
  "Integrated_Production_Role": {
    "parent": "Sustainable_Production_Role",
    "children": []
  },
  "Low_Input_Production_Role": {
    "parent": "Sustainable_Production_Role",
    "children": []
  },
  "Regenerative_Production_Role": {
    "parent": "Production_System_Role",
    "children": []
  },
  "Dry_Farmed_Role": {
    "parent": "Production_System_Role",
    "children": []
  },
  "Irrigated_Role": {
    "parent": "Production_System_Role",
    "children": ["Drip_Irrigated_Role", "Flood_Irrigated_Role", "Deficit_Irrigated_Role"]
  },
  "Drip_Irrigated_Role": {
    "parent": "Irrigated_Role",
    "children": []
  },
  "Flood_Irrigated_Role": {
    "parent": "Irrigated_Role",
    "children": []
  },
  "Deficit_Irrigated_Role": {
    "parent": "Irrigated_Role",
    "children": []
  },
  "Regional_Production_Role": {
    "parent": "Grapevine_Role",
    "children": ["Appellation_Specific_Role", "Traditional_Cultivar_Role", "Introduced_Cultivar_Role"]
  },
  "Appellation_Specific_Role": {
    "parent": "Regional_Production_Role",
    "children": ["Grand_Cru_Role", "Premier_Cru_Role", "Village_Wine_Role", "Regional_Wine_Role"]
  },
  "Grand_Cru_Role": {
    "parent": "Appellation_Specific_Role",
    "children": []
  },
  "Premier_Cru_Role": {
    "parent": "Appellation_Specific_Role",
    "children": []
  },
  "Village_Wine_Role": {
    "parent": "Appellation_Specific_Role",
    "children": []
  },
  "Regional_Wine_Role": {
    "parent": "Appellation_Specific_Role",
    "children": []
  },
  "Traditional_Cultivar_Role": {
    "parent": "Regional_Production_Role",
    "children": ["Indigenous_Cultivar_Role", "Autochthonous_Cultivar_Role", "Heritage_Cultivar_Role"]
  },
  "Indigenous_Cultivar_Role": {
    "parent": "Traditional_Cultivar_Role",
    "children": []
  },
  "Autochthonous_Cultivar_Role": {
    "parent": "Traditional_Cultivar_Role",
    "children": []
  },
  "Heritage_Cultivar_Role": {
    "parent": "Traditional_Cultivar_Role",
    "children": []
  },
  "Introduced_Cultivar_Role": {
    "parent": "Regional_Production_Role",
    "children": ["International_Variety_Role", "Recently_Introduced_Role"]
  },
  "International_Variety_Role": {
    "parent": "Introduced_Cultivar_Role",
    "children": []
  },
  "Recently_Introduced_Role": {
    "parent": "Introduced_Cultivar_Role",
    "children": []
  },
  "Quality_Tier_Role": {
    "parent": "Grapevine_Role",
    "children": ["Icon_Wine_Role", "Premium_Wine_Role", "Super_Premium_Wine_Role", "Ultra_Premium_Wine_Role", "Commercial_Wine_Role", "Entry_Level_Wine_Role", "Bulk_Wine_Role"]
  },
  "Icon_Wine_Role": {
    "parent": "Quality_Tier_Role",
    "children": []
  },
  "Premium_Wine_Role": {
    "parent": "Quality_Tier_Role",
    "children": []
  },
  "Super_Premium_Wine_Role": {
    "parent": "Quality_Tier_Role",
    "children": []
  },
  "Ultra_Premium_Wine_Role": {
    "parent": "Quality_Tier_Role",
    "children": []
  },
  "Commercial_Wine_Role": {
    "parent": "Quality_Tier_Role",
    "children": []
  },
  "Entry_Level_Wine_Role": {
    "parent": "Quality_Tier_Role",
    "children": []
  },
  "Bulk_Wine_Role": {
    "parent": "Quality_Tier_Role",
    "children": []
  },
  "Ecological_Role": {
    "parent": "Grapevine_Role",
    "children": ["Biodiversity_Support_Role", "Cover_Crop_Integration_Role", "Agroforestry_Component_Role", "Carbon_Sequestration_Role", "Soil_Conservation_Role"]
  },
  "Biodiversity_Support_Role": {
    "parent": "Ecological_Role",
    "children": ["Pollinator_Habitat_Role", "Beneficial_Insect_Habitat_Role", "Bird_Habitat_Role"]
  },
  "Pollinator_Habitat_Role": {
    "parent": "Biodiversity_Support_Role",
    "children": []
  },
  "Beneficial_Insect_Habitat_Role": {
    "parent": "Biodiversity_Support_Role",
    "children": []
  },
  "Bird_Habitat_Role": {
    "parent": "Biodiversity_Support_Role",
    "children": []
  },
  "Cover_Crop_Integration_Role": {
    "parent": "Ecological_Role",
    "children": []
  },
  "Agroforestry_Component_Role": {
    "parent": "Ecological_Role",
    "children": []
  },
  "Carbon_Sequestration_Role": {
    "parent": "Ecological_Role",
    "children": []
  },
  "Soil_Conservation_Role": {
    "parent": "Ecological_Role",
    "children": ["Erosion_Control_Role", "Soil_Building_Role"]
  },
  "Erosion_Control_Role": {
    "parent": "Soil_Conservation_Role",
    "children": []
  },
  "Soil_Building_Role": {
    "parent": "Soil_Conservation_Role",
    "children": []
  },
  "Research_And_Education_Role": {
    "parent": "Grapevine_Role",
    "children": ["Reference_Cultivar_Role", "Experimental_Cultivar_Role", "Teaching_Collection_Role", "Ampelographic_Reference_Role", "Genetic_Reference_Role", "Germplasm_Repository_Role"]
  },
  "Reference_Cultivar_Role": {
    "parent": "Research_And_Education_Role",
    "children": ["Type_Specimen_Role", "Standard_Reference_Role"]
  },
  "Type_Specimen_Role": {
    "parent": "Reference_Cultivar_Role",
    "children": []
  },
  "Standard_Reference_Role": {
    "parent": "Reference_Cultivar_Role",
    "children": []
  },
  "Experimental_Cultivar_Role": {
    "parent": "Research_And_Education_Role",
    "children": ["Trial_Cultivar_Role", "Evaluation_Cultivar_Role"]
  },
  "Trial_Cultivar_Role": {
    "parent": "Experimental_Cultivar_Role",
    "children": []
  },
  "Evaluation_Cultivar_Role": {
    "parent": "Experimental_Cultivar_Role",
    "children": []
  },
  "Teaching_Collection_Role": {
    "parent": "Research_And_Education_Role",
    "children": []
  },
  "Ampelographic_Reference_Role": {
    "parent": "Research_And_Education_Role",
    "children": []
  },
  "Genetic_Reference_Role": {
    "parent": "Research_And_Education_Role",
    "children": []
  },
  "Germplasm_Repository_Role": {
    "parent": "Research_And_Education_Role",
    "children": ["National_Collection_Role", "International_Collection_Role", "Regional_Collection_Role"]
  },
  "National_Collection_Role": {
    "parent": "Germplasm_Repository_Role",
    "children": []
  },
  "International_Collection_Role": {
    "parent": "Germplasm_Repository_Role",
    "children": []
  },
  "Regional_Collection_Role": {
    "parent": "Germplasm_Repository_Role",
    "children": []
  },
  "Conservation_Role": {
    "parent": "Grapevine_Role",
    "children": ["Endangered_Cultivar_Role", "Rare_Cultivar_Role", "Conservation_Priority_Role", "Ex_Situ_Conservation_Role", "In_Situ_Conservation_Role", "Recovered_Cultivar_Role"]
  },
  "Endangered_Cultivar_Role": {
    "parent": "Conservation_Role",
    "children": []
  },
  "Rare_Cultivar_Role": {
    "parent": "Conservation_Role",
    "children": []
  },
  "Conservation_Priority_Role": {
    "parent": "Conservation_Role",
    "children": []
  },
  "Ex_Situ_Conservation_Role": {
    "parent": "Conservation_Role",
    "children": []
  },
  "In_Situ_Conservation_Role": {
    "parent": "Conservation_Role",
    "children": []
  },
  "Recovered_Cultivar_Role": {
    "parent": "Conservation_Role",
    "children": []
  },

  /* ── Grapevine Information Entity (BFO_0000031) ── */

  "Grapevine_Information_Entity": {
    "bfo": "BFO_0000031",
    "label": "generically dependent continuant",
    "children": ["Cultivar_Designation", "Phenological_Code", "Geographic_Indication", "Viticultural_Practice_Description", "Genetic_Information", "Ampelographic_Description", "Terroir_Information", "Clonal_Selection_Record", "Quality_Analysis_Data", "Wine_Specification", "Historical_Record", "Regulatory_Information", "Economic_Data"]
  },
  "Cultivar_Designation": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Prime_Name", "Synonym", "Historical_Name", "Regional_Name", "Breeding_Code", "Trade_Name", "Homonym"]
  },
  "Prime_Name": {
    "parent": "Cultivar_Designation",
    "children": ["Official_Prime_Name", "OIV_Registered_Name", "VIVC_Prime_Name"]
  },
  "Official_Prime_Name": {
    "parent": "Prime_Name",
    "children": []
  },
  "OIV_Registered_Name": {
    "parent": "Prime_Name",
    "children": []
  },
  "VIVC_Prime_Name": {
    "parent": "Prime_Name",
    "children": []
  },
  "Synonym": {
    "parent": "Cultivar_Designation",
    "children": ["Historical_Synonym", "Regional_Synonym", "Language_Variant_Synonym", "Spelling_Variant_Synonym", "Erroneous_Synonym", "Commercial_Synonym"]
  },
  "Historical_Synonym": {
    "parent": "Synonym",
    "children": []
  },
  "Regional_Synonym": {
    "parent": "Synonym",
    "children": []
  },
  "Language_Variant_Synonym": {
    "parent": "Synonym",
    "children": []
  },
  "Spelling_Variant_Synonym": {
    "parent": "Synonym",
    "children": []
  },
  "Erroneous_Synonym": {
    "parent": "Synonym",
    "children": []
  },
  "Commercial_Synonym": {
    "parent": "Synonym",
    "children": []
  },
  "Historical_Name": {
    "parent": "Cultivar_Designation",
    "children": ["Ancient_Name", "Medieval_Name", "Pre_Phylloxera_Name"]
  },
  "Ancient_Name": {
    "parent": "Historical_Name",
    "children": []
  },
  "Medieval_Name": {
    "parent": "Historical_Name",
    "children": []
  },
  "Pre_Phylloxera_Name": {
    "parent": "Historical_Name",
    "children": []
  },
  "Regional_Name": {
    "parent": "Cultivar_Designation",
    "children": ["Local_Dialect_Name", "Traditional_Regional_Name", "Marketing_Regional_Name"]
  },
  "Local_Dialect_Name": {
    "parent": "Regional_Name",
    "children": []
  },
  "Traditional_Regional_Name": {
    "parent": "Regional_Name",
    "children": []
  },
  "Marketing_Regional_Name": {
    "parent": "Regional_Name",
    "children": []
  },
  "Breeding_Code": {
    "parent": "Cultivar_Designation",
    "children": ["Experimental_Code", "Selection_Number", "Cross_Number", "Seedling_Number"]
  },
  "Experimental_Code": {
    "parent": "Breeding_Code",
    "children": []
  },
  "Selection_Number": {
    "parent": "Breeding_Code",
    "children": []
  },
  "Cross_Number": {
    "parent": "Breeding_Code",
    "children": []
  },
  "Seedling_Number": {
    "parent": "Breeding_Code",
    "children": []
  },
  "Trade_Name": {
    "parent": "Cultivar_Designation",
    "children": ["Brand_Name", "Marketing_Name", "Protected_Trade_Name"]
  },
  "Brand_Name": {
    "parent": "Trade_Name",
    "children": []
  },
  "Marketing_Name": {
    "parent": "Trade_Name",
    "children": []
  },
  "Protected_Trade_Name": {
    "parent": "Trade_Name",
    "children": []
  },
  "Homonym": {
    "parent": "Cultivar_Designation",
    "children": ["True_Homonym", "False_Homonym"]
  },
  "True_Homonym": {
    "parent": "Homonym",
    "children": []
  },
  "False_Homonym": {
    "parent": "Homonym",
    "children": []
  },
  "Phenological_Code": {
    "parent": "Grapevine_Information_Entity",
    "children": ["BBCH_Code", "Baggiolini_Code", "Eichhorn_Lorenz_Code", "Modified_EL_Code"]
  },
  "BBCH_Code": {
    "parent": "Phenological_Code",
    "children": ["Principal_Growth_Stage_Code", "Secondary_Growth_Stage_Code", "Full_BBCH_Code"]
  },
  "Principal_Growth_Stage_Code": {
    "parent": "BBCH_Code",
    "children": ["BBCH_0_Sprouting_Bud_Development", "BBCH_1_Leaf_Development", "BBCH_5_Inflorescence_Emergence", "BBCH_6_Flowering", "BBCH_7_Fruit_Development", "BBCH_8_Ripening", "BBCH_9_Senescence"]
  },
  "BBCH_0_Sprouting_Bud_Development": {
    "parent": "Principal_Growth_Stage_Code",
    "children": []
  },
  "BBCH_1_Leaf_Development": {
    "parent": "Principal_Growth_Stage_Code",
    "children": []
  },
  "BBCH_5_Inflorescence_Emergence": {
    "parent": "Principal_Growth_Stage_Code",
    "children": []
  },
  "BBCH_6_Flowering": {
    "parent": "Principal_Growth_Stage_Code",
    "children": []
  },
  "BBCH_7_Fruit_Development": {
    "parent": "Principal_Growth_Stage_Code",
    "children": []
  },
  "BBCH_8_Ripening": {
    "parent": "Principal_Growth_Stage_Code",
    "children": []
  },
  "BBCH_9_Senescence": {
    "parent": "Principal_Growth_Stage_Code",
    "children": []
  },
  "Secondary_Growth_Stage_Code": {
    "parent": "BBCH_Code",
    "children": []
  },
  "Full_BBCH_Code": {
    "parent": "BBCH_Code",
    "children": []
  },
  "Baggiolini_Code": {
    "parent": "Phenological_Code",
    "children": ["Baggiolini_A_Winter_Bud", "Baggiolini_B_Bud_Swelling", "Baggiolini_C_Green_Point", "Baggiolini_D_Leaf_Emergence", "Baggiolini_E_Leaves_Unfolded", "Baggiolini_F_Inflorescence_Visible", "Baggiolini_G_Separated_Flowers", "Baggiolini_H_Flowering", "Baggiolini_I_Fruit_Set", "Baggiolini_J_Pea_Size", "Baggiolini_K_Bunch_Closure", "Baggiolini_L_Veraison", "Baggiolini_M_Maturity", "Baggiolini_N_Leaf_Fall"]
  },
  "Baggiolini_A_Winter_Bud": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_B_Bud_Swelling": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_C_Green_Point": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_D_Leaf_Emergence": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_E_Leaves_Unfolded": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_F_Inflorescence_Visible": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_G_Separated_Flowers": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_H_Flowering": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_I_Fruit_Set": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_J_Pea_Size": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_K_Bunch_Closure": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_L_Veraison": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_M_Maturity": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Baggiolini_N_Leaf_Fall": {
    "parent": "Baggiolini_Code",
    "children": []
  },
  "Eichhorn_Lorenz_Code": {
    "parent": "Phenological_Code",
    "children": ["EL_1_Winter_Bud", "EL_4_Budburst", "EL_12_Five_Leaves_Separated", "EL_17_Twelve_Leaves_Separated", "EL_19_Flowering_Begins", "EL_23_Full_Flowering", "EL_27_Fruit_Set", "EL_31_Pea_Size", "EL_35_Veraison", "EL_38_Harvest_Ripe"]
  },
  "EL_1_Winter_Bud": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_4_Budburst": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_12_Five_Leaves_Separated": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_17_Twelve_Leaves_Separated": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_19_Flowering_Begins": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_23_Full_Flowering": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_27_Fruit_Set": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_31_Pea_Size": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_35_Veraison": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "EL_38_Harvest_Ripe": {
    "parent": "Eichhorn_Lorenz_Code",
    "children": []
  },
  "Modified_EL_Code": {
    "parent": "Phenological_Code",
    "children": ["Modified_EL_Australian", "Modified_EL_California"]
  },
  "Modified_EL_Australian": {
    "parent": "Modified_EL_Code",
    "children": []
  },
  "Modified_EL_California": {
    "parent": "Modified_EL_Code",
    "children": []
  },
  "Geographic_Indication": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Appellation_Designation", "Protected_Designation_Of_Origin", "Protected_Geographic_Indication", "Regional_Wine_Designation", "Vineyard_Designation"]
  },
  "Appellation_Designation": {
    "parent": "Geographic_Indication",
    "children": ["Formal_Appellation_Name", "Appellation_Hierarchy_Level", "Sub_Appellation_Designation"]
  },
  "Formal_Appellation_Name": {
    "parent": "Appellation_Designation",
    "children": []
  },
  "Appellation_Hierarchy_Level": {
    "parent": "Appellation_Designation",
    "children": []
  },
  "Sub_Appellation_Designation": {
    "parent": "Appellation_Designation",
    "children": []
  },
  "Protected_Designation_Of_Origin": {
    "parent": "Geographic_Indication",
    "children": ["PDO_Name", "PDO_Registration_Number", "PDO_Specification_Reference"]
  },
  "PDO_Name": {
    "parent": "Protected_Designation_Of_Origin",
    "children": []
  },
  "PDO_Registration_Number": {
    "parent": "Protected_Designation_Of_Origin",
    "children": []
  },
  "PDO_Specification_Reference": {
    "parent": "Protected_Designation_Of_Origin",
    "children": []
  },
  "Protected_Geographic_Indication": {
    "parent": "Geographic_Indication",
    "children": ["PGI_Name", "PGI_Registration_Number", "PGI_Specification_Reference"]
  },
  "PGI_Name": {
    "parent": "Protected_Geographic_Indication",
    "children": []
  },
  "PGI_Registration_Number": {
    "parent": "Protected_Geographic_Indication",
    "children": []
  },
  "PGI_Specification_Reference": {
    "parent": "Protected_Geographic_Indication",
    "children": []
  },
  "Regional_Wine_Designation": {
    "parent": "Geographic_Indication",
    "children": ["Vin_De_Pays_Designation", "Landwein_Designation", "IGT_Designation", "AVA_Designation", "GI_Australia_Designation", "DO_Designation", "DOC_Designation", "DOCG_Designation", "DAC_Designation", "AOC_Designation", "AOP_Designation"]
  },
  "Vin_De_Pays_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "Landwein_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "IGT_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "AVA_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "GI_Australia_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "DO_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "DOC_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "DOCG_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "DAC_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "AOC_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "AOP_Designation": {
    "parent": "Regional_Wine_Designation",
    "children": []
  },
  "Vineyard_Designation": {
    "parent": "Geographic_Indication",
    "children": ["Single_Vineyard_Name", "Lieu_Dit_Name", "Cru_Name", "Lage_Name", "Ried_Name", "Climat_Name", "Contrada_Name", "Pago_Name"]
  },
  "Single_Vineyard_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Lieu_Dit_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Cru_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Lage_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Ried_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Climat_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Contrada_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Pago_Name": {
    "parent": "Vineyard_Designation",
    "children": []
  },
  "Viticultural_Practice_Description": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Training_System_Description", "Pruning_Method_Description", "Irrigation_Protocol_Description", "Canopy_Management_Description", "Harvest_Method_Description", "Soil_Management_Description", "Pest_Management_Description", "Nutrition_Management_Description"]
  },
  "Training_System_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["Training_System_Name", "Training_System_Specification", "Trellis_Design_Description", "Wire_Configuration_Description", "Post_Spacing_Specification", "Canopy_Height_Specification"]
  },
  "Training_System_Name": {
    "parent": "Training_System_Description",
    "children": []
  },
  "Training_System_Specification": {
    "parent": "Training_System_Description",
    "children": []
  },
  "Trellis_Design_Description": {
    "parent": "Training_System_Description",
    "children": []
  },
  "Wire_Configuration_Description": {
    "parent": "Training_System_Description",
    "children": []
  },
  "Post_Spacing_Specification": {
    "parent": "Training_System_Description",
    "children": []
  },
  "Canopy_Height_Specification": {
    "parent": "Training_System_Description",
    "children": []
  },
  "Pruning_Method_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["Pruning_System_Name", "Pruning_Timing_Specification", "Bud_Load_Specification", "Spur_Length_Specification", "Cane_Selection_Criteria", "Pruning_Weight_Target"]
  },
  "Pruning_System_Name": {
    "parent": "Pruning_Method_Description",
    "children": []
  },
  "Pruning_Timing_Specification": {
    "parent": "Pruning_Method_Description",
    "children": []
  },
  "Bud_Load_Specification": {
    "parent": "Pruning_Method_Description",
    "children": []
  },
  "Spur_Length_Specification": {
    "parent": "Pruning_Method_Description",
    "children": []
  },
  "Cane_Selection_Criteria": {
    "parent": "Pruning_Method_Description",
    "children": []
  },
  "Pruning_Weight_Target": {
    "parent": "Pruning_Method_Description",
    "children": []
  },
  "Irrigation_Protocol_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["Irrigation_System_Type", "Irrigation_Scheduling_Protocol", "Deficit_Irrigation_Strategy", "Water_Application_Rate", "Soil_Moisture_Threshold", "Plant_Water_Status_Target"]
  },
  "Irrigation_System_Type": {
    "parent": "Irrigation_Protocol_Description",
    "children": []
  },
  "Irrigation_Scheduling_Protocol": {
    "parent": "Irrigation_Protocol_Description",
    "children": []
  },
  "Deficit_Irrigation_Strategy": {
    "parent": "Irrigation_Protocol_Description",
    "children": []
  },
  "Water_Application_Rate": {
    "parent": "Irrigation_Protocol_Description",
    "children": []
  },
  "Soil_Moisture_Threshold": {
    "parent": "Irrigation_Protocol_Description",
    "children": []
  },
  "Plant_Water_Status_Target": {
    "parent": "Irrigation_Protocol_Description",
    "children": []
  },
  "Canopy_Management_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["Shoot_Positioning_Protocol", "Leaf_Removal_Specification", "Shoot_Thinning_Protocol", "Hedging_Specification", "Cluster_Thinning_Protocol", "Fruit_Zone_Management"]
  },
  "Shoot_Positioning_Protocol": {
    "parent": "Canopy_Management_Description",
    "children": []
  },
  "Leaf_Removal_Specification": {
    "parent": "Canopy_Management_Description",
    "children": []
  },
  "Shoot_Thinning_Protocol": {
    "parent": "Canopy_Management_Description",
    "children": []
  },
  "Hedging_Specification": {
    "parent": "Canopy_Management_Description",
    "children": []
  },
  "Cluster_Thinning_Protocol": {
    "parent": "Canopy_Management_Description",
    "children": []
  },
  "Fruit_Zone_Management": {
    "parent": "Canopy_Management_Description",
    "children": []
  },
  "Harvest_Method_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["Harvest_Timing_Criteria", "Harvest_Method_Type", "Mechanical_Harvest_Specification", "Hand_Harvest_Protocol", "Selective_Harvest_Criteria", "Sorting_Protocol"]
  },
  "Harvest_Timing_Criteria": {
    "parent": "Harvest_Method_Description",
    "children": []
  },
  "Harvest_Method_Type": {
    "parent": "Harvest_Method_Description",
    "children": []
  },
  "Mechanical_Harvest_Specification": {
    "parent": "Harvest_Method_Description",
    "children": []
  },
  "Hand_Harvest_Protocol": {
    "parent": "Harvest_Method_Description",
    "children": []
  },
  "Selective_Harvest_Criteria": {
    "parent": "Harvest_Method_Description",
    "children": []
  },
  "Sorting_Protocol": {
    "parent": "Harvest_Method_Description",
    "children": []
  },
  "Soil_Management_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["Tillage_Protocol", "Cover_Crop_Specification", "Mulching_Protocol", "Compost_Application_Rate", "Soil_Amendment_Specification"]
  },
  "Tillage_Protocol": {
    "parent": "Soil_Management_Description",
    "children": []
  },
  "Cover_Crop_Specification": {
    "parent": "Soil_Management_Description",
    "children": []
  },
  "Mulching_Protocol": {
    "parent": "Soil_Management_Description",
    "children": []
  },
  "Compost_Application_Rate": {
    "parent": "Soil_Management_Description",
    "children": []
  },
  "Soil_Amendment_Specification": {
    "parent": "Soil_Management_Description",
    "children": []
  },
  "Pest_Management_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["IPM_Protocol", "Spray_Program_Specification", "Biological_Control_Protocol", "Monitoring_Protocol", "Threshold_Specification"]
  },
  "IPM_Protocol": {
    "parent": "Pest_Management_Description",
    "children": []
  },
  "Spray_Program_Specification": {
    "parent": "Pest_Management_Description",
    "children": []
  },
  "Biological_Control_Protocol": {
    "parent": "Pest_Management_Description",
    "children": []
  },
  "Monitoring_Protocol": {
    "parent": "Pest_Management_Description",
    "children": []
  },
  "Threshold_Specification": {
    "parent": "Pest_Management_Description",
    "children": []
  },
  "Nutrition_Management_Description": {
    "parent": "Viticultural_Practice_Description",
    "children": ["Fertilization_Program", "Tissue_Analysis_Protocol", "Foliar_Application_Specification", "Fertigation_Program", "Organic_Amendment_Protocol"]
  },
  "Fertilization_Program": {
    "parent": "Nutrition_Management_Description",
    "children": []
  },
  "Tissue_Analysis_Protocol": {
    "parent": "Nutrition_Management_Description",
    "children": []
  },
  "Foliar_Application_Specification": {
    "parent": "Nutrition_Management_Description",
    "children": []
  },
  "Fertigation_Program": {
    "parent": "Nutrition_Management_Description",
    "children": []
  },
  "Organic_Amendment_Protocol": {
    "parent": "Nutrition_Management_Description",
    "children": []
  },
  "Genetic_Information": {
    "parent": "Grapevine_Information_Entity",
    "children": ["DNA_Sequence", "Genotype_Data", "Genetic_Marker_Data", "Parentage_Information", "Ploidy_Information", "Mutation_Information", "Resistance_Gene_Information"]
  },
  "DNA_Sequence": {
    "parent": "Genetic_Information",
    "children": ["Nuclear_DNA_Sequence", "Chloroplast_DNA_Sequence", "Mitochondrial_DNA_Sequence"]
  },
  "Nuclear_DNA_Sequence": {
    "parent": "DNA_Sequence",
    "children": []
  },
  "Chloroplast_DNA_Sequence": {
    "parent": "DNA_Sequence",
    "children": []
  },
  "Mitochondrial_DNA_Sequence": {
    "parent": "DNA_Sequence",
    "children": []
  },
  "Genotype_Data": {
    "parent": "Genetic_Information",
    "children": ["SSR_Genotype", "SNP_Genotype", "Whole_Genome_Sequence", "GBS_Data"]
  },
  "SSR_Genotype": {
    "parent": "Genotype_Data",
    "children": ["SSR_Locus_Data", "SSR_Allele_Size", "SSR_Profile"]
  },
  "SSR_Locus_Data": {
    "parent": "SSR_Genotype",
    "children": []
  },
  "SSR_Allele_Size": {
    "parent": "SSR_Genotype",
    "children": []
  },
  "SSR_Profile": {
    "parent": "SSR_Genotype",
    "children": []
  },
  "SNP_Genotype": {
    "parent": "Genotype_Data",
    "children": ["SNP_Array_Data", "SNP_Genotype_Call", "SNP_Haplotype"]
  },
  "SNP_Array_Data": {
    "parent": "SNP_Genotype",
    "children": []
  },
  "SNP_Genotype_Call": {
    "parent": "SNP_Genotype",
    "children": []
  },
  "SNP_Haplotype": {
    "parent": "SNP_Genotype",
    "children": []
  },
  "Whole_Genome_Sequence": {
    "parent": "Genotype_Data",
    "children": []
  },
  "GBS_Data": {
    "parent": "Genotype_Data",
    "children": []
  },
  "Genetic_Marker_Data": {
    "parent": "Genetic_Information",
    "children": ["Microsatellite_Marker_Data", "SNP_Marker_Data", "AFLP_Marker_Data", "RAPD_Marker_Data", "SSR_Fingerprint", "DNA_Fingerprint"]
  },
  "Microsatellite_Marker_Data": {
    "parent": "Genetic_Marker_Data",
    "children": ["VVMD_Marker_Series", "VVS_Marker_Series", "VrZAG_Marker_Series", "VMC_Marker_Series"]
  },
  "VVMD_Marker_Series": {
    "parent": "Microsatellite_Marker_Data",
    "children": []
  },
  "VVS_Marker_Series": {
    "parent": "Microsatellite_Marker_Data",
    "children": []
  },
  "VrZAG_Marker_Series": {
    "parent": "Microsatellite_Marker_Data",
    "children": []
  },
  "VMC_Marker_Series": {
    "parent": "Microsatellite_Marker_Data",
    "children": []
  },
  "SNP_Marker_Data": {
    "parent": "Genetic_Marker_Data",
    "children": []
  },
  "AFLP_Marker_Data": {
    "parent": "Genetic_Marker_Data",
    "children": []
  },
  "RAPD_Marker_Data": {
    "parent": "Genetic_Marker_Data",
    "children": []
  },
  "SSR_Fingerprint": {
    "parent": "Genetic_Marker_Data",
    "children": []
  },
  "DNA_Fingerprint": {
    "parent": "Genetic_Marker_Data",
    "children": []
  },
  "Parentage_Information": {
    "parent": "Genetic_Information",
    "children": ["Documented_Parentage", "Inferred_Parentage", "Parentage_Analysis_Result", "Pedigree_Record", "Unknown_Parentage_Note"]
  },
  "Documented_Parentage": {
    "parent": "Parentage_Information",
    "children": []
  },
  "Inferred_Parentage": {
    "parent": "Parentage_Information",
    "children": []
  },
  "Parentage_Analysis_Result": {
    "parent": "Parentage_Information",
    "children": []
  },
  "Pedigree_Record": {
    "parent": "Parentage_Information",
    "children": []
  },
  "Unknown_Parentage_Note": {
    "parent": "Parentage_Information",
    "children": []
  },
  "Ploidy_Information": {
    "parent": "Genetic_Information",
    "children": ["Diploid_Status", "Tetraploid_Status", "Aneuploid_Status", "Chimera_Status"]
  },
  "Diploid_Status": {
    "parent": "Ploidy_Information",
    "children": []
  },
  "Tetraploid_Status": {
    "parent": "Ploidy_Information",
    "children": []
  },
  "Aneuploid_Status": {
    "parent": "Ploidy_Information",
    "children": []
  },
  "Chimera_Status": {
    "parent": "Ploidy_Information",
    "children": []
  },
  "Mutation_Information": {
    "parent": "Genetic_Information",
    "children": ["Somatic_Mutation_Record", "Color_Mutation_Data", "Flavor_Mutation_Data", "Growth_Mutation_Data"]
  },
  "Somatic_Mutation_Record": {
    "parent": "Mutation_Information",
    "children": []
  },
  "Color_Mutation_Data": {
    "parent": "Mutation_Information",
    "children": []
  },
  "Flavor_Mutation_Data": {
    "parent": "Mutation_Information",
    "children": []
  },
  "Growth_Mutation_Data": {
    "parent": "Mutation_Information",
    "children": []
  },
  "Resistance_Gene_Information": {
    "parent": "Genetic_Information",
    "children": ["Rpv_Locus_Information", "Run_Locus_Information", "Ren_Locus_Information", "PdR_Locus_Information", "Resistance_Gene_Pyramid_Data"]
  },
  "Rpv_Locus_Information": {
    "parent": "Resistance_Gene_Information",
    "children": ["Rpv1_Presence", "Rpv3_Presence", "Rpv10_Presence", "Rpv12_Presence"]
  },
  "Rpv1_Presence": {
    "parent": "Rpv_Locus_Information",
    "children": []
  },
  "Rpv3_Presence": {
    "parent": "Rpv_Locus_Information",
    "children": []
  },
  "Rpv10_Presence": {
    "parent": "Rpv_Locus_Information",
    "children": []
  },
  "Rpv12_Presence": {
    "parent": "Rpv_Locus_Information",
    "children": []
  },
  "Run_Locus_Information": {
    "parent": "Resistance_Gene_Information",
    "children": ["Run1_Presence", "Run2_Presence"]
  },
  "Run1_Presence": {
    "parent": "Run_Locus_Information",
    "children": []
  },
  "Run2_Presence": {
    "parent": "Run_Locus_Information",
    "children": []
  },
  "Ren_Locus_Information": {
    "parent": "Resistance_Gene_Information",
    "children": ["Ren1_Presence", "Ren3_Presence", "Ren4_Presence"]
  },
  "Ren1_Presence": {
    "parent": "Ren_Locus_Information",
    "children": []
  },
  "Ren3_Presence": {
    "parent": "Ren_Locus_Information",
    "children": []
  },
  "Ren4_Presence": {
    "parent": "Ren_Locus_Information",
    "children": []
  },
  "PdR_Locus_Information": {
    "parent": "Resistance_Gene_Information",
    "children": []
  },
  "Resistance_Gene_Pyramid_Data": {
    "parent": "Resistance_Gene_Information",
    "children": []
  },
  "Ampelographic_Description": {
    "parent": "Grapevine_Information_Entity",
    "children": ["OIV_Descriptor", "Shoot_Tip_Description", "Young_Leaf_Description", "Mature_Leaf_Description", "Petiole_Description", "Shoot_Description", "Cane_Description", "Inflorescence_Description", "Flower_Description", "Cluster_Description", "Berry_Description", "Phenological_Timing_Description", "Growth_Habit_Description"]
  },
  "OIV_Descriptor": {
    "parent": "Ampelographic_Description",
    "children": ["OIV_Code_Number", "OIV_Descriptor_State", "OIV_Priority_Level"]
  },
  "OIV_Code_Number": {
    "parent": "OIV_Descriptor",
    "children": []
  },
  "OIV_Descriptor_State": {
    "parent": "OIV_Descriptor",
    "children": []
  },
  "OIV_Priority_Level": {
    "parent": "OIV_Descriptor",
    "children": []
  },
  "Shoot_Tip_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Young_Shoot_Description", "Shoot_Tip_Color_Description", "Shoot_Tip_Hairiness_Description", "Anthocyanin_Distribution_Description"]
  },
  "Young_Shoot_Description": {
    "parent": "Shoot_Tip_Description",
    "children": []
  },
  "Shoot_Tip_Color_Description": {
    "parent": "Shoot_Tip_Description",
    "children": []
  },
  "Shoot_Tip_Hairiness_Description": {
    "parent": "Shoot_Tip_Description",
    "children": []
  },
  "Anthocyanin_Distribution_Description": {
    "parent": "Shoot_Tip_Description",
    "children": []
  },
  "Young_Leaf_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Young_Leaf_Color", "Young_Leaf_Hairiness", "Bronze_Coloration_Description"]
  },
  "Young_Leaf_Color": {
    "parent": "Young_Leaf_Description",
    "children": []
  },
  "Young_Leaf_Hairiness": {
    "parent": "Young_Leaf_Description",
    "children": []
  },
  "Bronze_Coloration_Description": {
    "parent": "Young_Leaf_Description",
    "children": []
  },
  "Mature_Leaf_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Leaf_Shape_Description", "Leaf_Size_Description", "Leaf_Blade_Description", "Sinus_Description", "Leaf_Margin_Description", "Leaf_Surface_Description", "Leaf_Color_Description"]
  },
  "Leaf_Shape_Description": {
    "parent": "Mature_Leaf_Description",
    "children": []
  },
  "Leaf_Size_Description": {
    "parent": "Mature_Leaf_Description",
    "children": []
  },
  "Leaf_Blade_Description": {
    "parent": "Mature_Leaf_Description",
    "children": ["Blade_Length_Description", "Blade_Width_Description", "Number_Of_Lobes_Description", "Lobe_Depth_Description"]
  },
  "Blade_Length_Description": {
    "parent": "Leaf_Blade_Description",
    "children": []
  },
  "Blade_Width_Description": {
    "parent": "Leaf_Blade_Description",
    "children": []
  },
  "Number_Of_Lobes_Description": {
    "parent": "Leaf_Blade_Description",
    "children": []
  },
  "Lobe_Depth_Description": {
    "parent": "Leaf_Blade_Description",
    "children": []
  },
  "Sinus_Description": {
    "parent": "Mature_Leaf_Description",
    "children": ["Petiolar_Sinus_Shape", "Petiolar_Sinus_Depth", "Upper_Lateral_Sinus_Description", "Lower_Lateral_Sinus_Description"]
  },
  "Petiolar_Sinus_Shape": {
    "parent": "Sinus_Description",
    "children": []
  },
  "Petiolar_Sinus_Depth": {
    "parent": "Sinus_Description",
    "children": []
  },
  "Upper_Lateral_Sinus_Description": {
    "parent": "Sinus_Description",
    "children": []
  },
  "Lower_Lateral_Sinus_Description": {
    "parent": "Sinus_Description",
    "children": []
  },
  "Leaf_Margin_Description": {
    "parent": "Mature_Leaf_Description",
    "children": ["Teeth_Shape_Description", "Teeth_Size_Description"]
  },
  "Teeth_Shape_Description": {
    "parent": "Leaf_Margin_Description",
    "children": []
  },
  "Teeth_Size_Description": {
    "parent": "Leaf_Margin_Description",
    "children": []
  },
  "Leaf_Surface_Description": {
    "parent": "Mature_Leaf_Description",
    "children": ["Upper_Surface_Description", "Lower_Surface_Hairiness"]
  },
  "Upper_Surface_Description": {
    "parent": "Leaf_Surface_Description",
    "children": []
  },
  "Lower_Surface_Hairiness": {
    "parent": "Leaf_Surface_Description",
    "children": []
  },
  "Leaf_Color_Description": {
    "parent": "Mature_Leaf_Description",
    "children": ["Autumn_Color_Description"]
  },
  "Autumn_Color_Description": {
    "parent": "Leaf_Color_Description",
    "children": []
  },
  "Petiole_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Petiole_Length", "Petiole_Color"]
  },
  "Petiole_Length": {
    "parent": "Petiole_Description",
    "children": []
  },
  "Petiole_Color": {
    "parent": "Petiole_Description",
    "children": []
  },
  "Shoot_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Internode_Length_Description", "Internode_Color_Description", "Node_Description", "Tendril_Description"]
  },
  "Internode_Length_Description": {
    "parent": "Shoot_Description",
    "children": []
  },
  "Internode_Color_Description": {
    "parent": "Shoot_Description",
    "children": []
  },
  "Node_Description": {
    "parent": "Shoot_Description",
    "children": []
  },
  "Tendril_Description": {
    "parent": "Shoot_Description",
    "children": ["Tendril_Length", "Tendril_Distribution"]
  },
  "Tendril_Length": {
    "parent": "Tendril_Description",
    "children": []
  },
  "Tendril_Distribution": {
    "parent": "Tendril_Description",
    "children": []
  },
  "Cane_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Cane_Color_Description", "Cane_Surface_Description", "Cane_Cross_Section"]
  },
  "Cane_Color_Description": {
    "parent": "Cane_Description",
    "children": []
  },
  "Cane_Surface_Description": {
    "parent": "Cane_Description",
    "children": []
  },
  "Cane_Cross_Section": {
    "parent": "Cane_Description",
    "children": []
  },
  "Inflorescence_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Inflorescence_Size", "Inflorescence_Number", "Inflorescence_Position"]
  },
  "Inflorescence_Size": {
    "parent": "Inflorescence_Description",
    "children": []
  },
  "Inflorescence_Number": {
    "parent": "Inflorescence_Description",
    "children": []
  },
  "Inflorescence_Position": {
    "parent": "Inflorescence_Description",
    "children": []
  },
  "Flower_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Flower_Type_Description", "Stamen_Description", "Pistil_Description"]
  },
  "Flower_Type_Description": {
    "parent": "Flower_Description",
    "children": []
  },
  "Stamen_Description": {
    "parent": "Flower_Description",
    "children": []
  },
  "Pistil_Description": {
    "parent": "Flower_Description",
    "children": []
  },
  "Cluster_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Cluster_Size_Description", "Cluster_Shape_Description", "Cluster_Density_Description", "Cluster_Compactness_Description", "Peduncle_Description", "Wing_Description", "Shoulder_Description"]
  },
  "Cluster_Size_Description": {
    "parent": "Cluster_Description",
    "children": ["Cluster_Length", "Cluster_Width", "Cluster_Weight"]
  },
  "Cluster_Length": {
    "parent": "Cluster_Size_Description",
    "children": []
  },
  "Cluster_Width": {
    "parent": "Cluster_Size_Description",
    "children": []
  },
  "Cluster_Weight": {
    "parent": "Cluster_Size_Description",
    "children": []
  },
  "Cluster_Shape_Description": {
    "parent": "Cluster_Description",
    "children": []
  },
  "Cluster_Density_Description": {
    "parent": "Cluster_Description",
    "children": []
  },
  "Cluster_Compactness_Description": {
    "parent": "Cluster_Description",
    "children": []
  },
  "Peduncle_Description": {
    "parent": "Cluster_Description",
    "children": []
  },
  "Wing_Description": {
    "parent": "Cluster_Description",
    "children": []
  },
  "Shoulder_Description": {
    "parent": "Cluster_Description",
    "children": []
  },
  "Berry_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Berry_Size_Description", "Berry_Shape_Description", "Berry_Color_Description", "Berry_Skin_Description", "Berry_Flesh_Description", "Seed_Description"]
  },
  "Berry_Size_Description": {
    "parent": "Berry_Description",
    "children": ["Berry_Length", "Berry_Width", "Berry_Weight"]
  },
  "Berry_Length": {
    "parent": "Berry_Size_Description",
    "children": []
  },
  "Berry_Width": {
    "parent": "Berry_Size_Description",
    "children": []
  },
  "Berry_Weight": {
    "parent": "Berry_Size_Description",
    "children": []
  },
  "Berry_Shape_Description": {
    "parent": "Berry_Description",
    "children": []
  },
  "Berry_Color_Description": {
    "parent": "Berry_Description",
    "children": ["Skin_Color_Description", "Flesh_Color_Description"]
  },
  "Skin_Color_Description": {
    "parent": "Berry_Color_Description",
    "children": []
  },
  "Flesh_Color_Description": {
    "parent": "Berry_Color_Description",
    "children": []
  },
  "Berry_Skin_Description": {
    "parent": "Berry_Description",
    "children": ["Skin_Thickness", "Skin_Texture", "Bloom_Description"]
  },
  "Skin_Thickness": {
    "parent": "Berry_Skin_Description",
    "children": []
  },
  "Skin_Texture": {
    "parent": "Berry_Skin_Description",
    "children": []
  },
  "Bloom_Description": {
    "parent": "Berry_Skin_Description",
    "children": []
  },
  "Berry_Flesh_Description": {
    "parent": "Berry_Description",
    "children": ["Flesh_Consistency", "Flesh_Flavor", "Juiciness_Description"]
  },
  "Flesh_Consistency": {
    "parent": "Berry_Flesh_Description",
    "children": []
  },
  "Flesh_Flavor": {
    "parent": "Berry_Flesh_Description",
    "children": []
  },
  "Juiciness_Description": {
    "parent": "Berry_Flesh_Description",
    "children": []
  },
  "Seed_Description": {
    "parent": "Berry_Description",
    "children": ["Seed_Number", "Seed_Size", "Seed_Shape", "Seed_Color"]
  },
  "Seed_Number": {
    "parent": "Seed_Description",
    "children": []
  },
  "Seed_Size": {
    "parent": "Seed_Description",
    "children": []
  },
  "Seed_Shape": {
    "parent": "Seed_Description",
    "children": []
  },
  "Seed_Color": {
    "parent": "Seed_Description",
    "children": []
  },
  "Phenological_Timing_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Budbreak_Timing_Description", "Flowering_Timing_Description", "Veraison_Timing_Description", "Harvest_Timing_Description"]
  },
  "Budbreak_Timing_Description": {
    "parent": "Phenological_Timing_Description",
    "children": []
  },
  "Flowering_Timing_Description": {
    "parent": "Phenological_Timing_Description",
    "children": []
  },
  "Veraison_Timing_Description": {
    "parent": "Phenological_Timing_Description",
    "children": []
  },
  "Harvest_Timing_Description": {
    "parent": "Phenological_Timing_Description",
    "children": []
  },
  "Growth_Habit_Description": {
    "parent": "Ampelographic_Description",
    "children": ["Vigor_Description", "Growth_Type_Description", "Bearing_Habit_Description"]
  },
  "Vigor_Description": {
    "parent": "Growth_Habit_Description",
    "children": []
  },
  "Growth_Type_Description": {
    "parent": "Growth_Habit_Description",
    "children": []
  },
  "Bearing_Habit_Description": {
    "parent": "Growth_Habit_Description",
    "children": []
  },
  "Terroir_Information": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Site_Description", "Soil_Description", "Soil_Chemistry_Data", "Climate_Data", "Microclimate_Characterization"]
  },
  "Site_Description": {
    "parent": "Terroir_Information",
    "children": ["Vineyard_Location_Description", "GPS_Coordinates", "Elevation_Data", "Slope_Description", "Exposure_Description"]
  },
  "Vineyard_Location_Description": {
    "parent": "Site_Description",
    "children": []
  },
  "GPS_Coordinates": {
    "parent": "Site_Description",
    "children": []
  },
  "Elevation_Data": {
    "parent": "Site_Description",
    "children": []
  },
  "Slope_Description": {
    "parent": "Site_Description",
    "children": ["Slope_Angle", "Slope_Aspect", "Slope_Position"]
  },
  "Slope_Angle": {
    "parent": "Slope_Description",
    "children": []
  },
  "Slope_Aspect": {
    "parent": "Slope_Description",
    "children": []
  },
  "Slope_Position": {
    "parent": "Slope_Description",
    "children": []
  },
  "Exposure_Description": {
    "parent": "Site_Description",
    "children": []
  },
  "Soil_Description": {
    "parent": "Terroir_Information",
    "children": ["Soil_Type_Description", "Soil_Texture_Description", "Soil_Structure_Description", "Soil_Depth_Description", "Parent_Material_Description", "Soil_Color_Description", "Drainage_Description"]
  },
  "Soil_Type_Description": {
    "parent": "Soil_Description",
    "children": ["Soil_Classification", "Soil_Series_Name"]
  },
  "Soil_Classification": {
    "parent": "Soil_Type_Description",
    "children": []
  },
  "Soil_Series_Name": {
    "parent": "Soil_Type_Description",
    "children": []
  },
  "Soil_Texture_Description": {
    "parent": "Soil_Description",
    "children": ["Sand_Content", "Silt_Content", "Clay_Content"]
  },
  "Sand_Content": {
    "parent": "Soil_Texture_Description",
    "children": []
  },
  "Silt_Content": {
    "parent": "Soil_Texture_Description",
    "children": []
  },
  "Clay_Content": {
    "parent": "Soil_Texture_Description",
    "children": []
  },
  "Soil_Structure_Description": {
    "parent": "Soil_Description",
    "children": []
  },
  "Soil_Depth_Description": {
    "parent": "Soil_Description",
    "children": []
  },
  "Parent_Material_Description": {
    "parent": "Soil_Description",
    "children": []
  },
  "Soil_Color_Description": {
    "parent": "Soil_Description",
    "children": []
  },
  "Drainage_Description": {
    "parent": "Soil_Description",
    "children": []
  },
  "Soil_Chemistry_Data": {
    "parent": "Terroir_Information",
    "children": ["Soil_pH_Data", "Organic_Matter_Content", "CEC_Data", "Nutrient_Analysis_Data", "Micronutrient_Data", "Salinity_Data", "Lime_Content_Data"]
  },
  "Soil_pH_Data": {
    "parent": "Soil_Chemistry_Data",
    "children": []
  },
  "Organic_Matter_Content": {
    "parent": "Soil_Chemistry_Data",
    "children": []
  },
  "CEC_Data": {
    "parent": "Soil_Chemistry_Data",
    "children": []
  },
  "Nutrient_Analysis_Data": {
    "parent": "Soil_Chemistry_Data",
    "children": ["Nitrogen_Content", "Phosphorus_Content", "Potassium_Content", "Calcium_Content", "Magnesium_Content"]
  },
  "Nitrogen_Content": {
    "parent": "Nutrient_Analysis_Data",
    "children": []
  },
  "Phosphorus_Content": {
    "parent": "Nutrient_Analysis_Data",
    "children": []
  },
  "Potassium_Content": {
    "parent": "Nutrient_Analysis_Data",
    "children": []
  },
  "Calcium_Content": {
    "parent": "Nutrient_Analysis_Data",
    "children": []
  },
  "Magnesium_Content": {
    "parent": "Nutrient_Analysis_Data",
    "children": []
  },
  "Micronutrient_Data": {
    "parent": "Soil_Chemistry_Data",
    "children": []
  },
  "Salinity_Data": {
    "parent": "Soil_Chemistry_Data",
    "children": []
  },
  "Lime_Content_Data": {
    "parent": "Soil_Chemistry_Data",
    "children": []
  },
  "Climate_Data": {
    "parent": "Terroir_Information",
    "children": ["Macroclimate_Description", "Growing_Season_Data", "Temperature_Data", "Precipitation_Data", "Solar_Radiation_Data", "Wind_Data"]
  },
  "Macroclimate_Description": {
    "parent": "Climate_Data",
    "children": ["Climate_Classification", "Climate_Zone"]
  },
  "Climate_Classification": {
    "parent": "Macroclimate_Description",
    "children": []
  },
  "Climate_Zone": {
    "parent": "Macroclimate_Description",
    "children": []
  },
  "Growing_Season_Data": {
    "parent": "Climate_Data",
    "children": ["Growing_Degree_Days", "GDD_Base_10", "GDD_Winkler", "Huglin_Index", "Biologically_Effective_Degree_Days"]
  },
  "Growing_Degree_Days": {
    "parent": "Growing_Season_Data",
    "children": []
  },
  "GDD_Base_10": {
    "parent": "Growing_Season_Data",
    "children": []
  },
  "GDD_Winkler": {
    "parent": "Growing_Season_Data",
    "children": []
  },
  "Huglin_Index": {
    "parent": "Growing_Season_Data",
    "children": []
  },
  "Biologically_Effective_Degree_Days": {
    "parent": "Growing_Season_Data",
    "children": []
  },
  "Temperature_Data": {
    "parent": "Climate_Data",
    "children": ["Mean_Annual_Temperature", "Growing_Season_Temperature", "Diurnal_Range_Data", "Heat_Summation_Data", "Frost_Risk_Data", "Extreme_Temperature_Data"]
  },
  "Mean_Annual_Temperature": {
    "parent": "Temperature_Data",
    "children": []
  },
  "Growing_Season_Temperature": {
    "parent": "Temperature_Data",
    "children": []
  },
  "Diurnal_Range_Data": {
    "parent": "Temperature_Data",
    "children": []
  },
  "Heat_Summation_Data": {
    "parent": "Temperature_Data",
    "children": []
  },
  "Frost_Risk_Data": {
    "parent": "Temperature_Data",
    "children": []
  },
  "Extreme_Temperature_Data": {
    "parent": "Temperature_Data",
    "children": []
  },
  "Precipitation_Data": {
    "parent": "Climate_Data",
    "children": ["Annual_Precipitation", "Growing_Season_Precipitation", "Precipitation_Distribution", "Drought_Index"]
  },
  "Annual_Precipitation": {
    "parent": "Precipitation_Data",
    "children": []
  },
  "Growing_Season_Precipitation": {
    "parent": "Precipitation_Data",
    "children": []
  },
  "Precipitation_Distribution": {
    "parent": "Precipitation_Data",
    "children": []
  },
  "Drought_Index": {
    "parent": "Precipitation_Data",
    "children": []
  },
  "Solar_Radiation_Data": {
    "parent": "Climate_Data",
    "children": ["Total_Radiation", "PAR_Data", "Sunshine_Hours"]
  },
  "Total_Radiation": {
    "parent": "Solar_Radiation_Data",
    "children": []
  },
  "PAR_Data": {
    "parent": "Solar_Radiation_Data",
    "children": []
  },
  "Sunshine_Hours": {
    "parent": "Solar_Radiation_Data",
    "children": []
  },
  "Wind_Data": {
    "parent": "Climate_Data",
    "children": ["Prevailing_Wind_Direction", "Wind_Speed_Data"]
  },
  "Prevailing_Wind_Direction": {
    "parent": "Wind_Data",
    "children": []
  },
  "Wind_Speed_Data": {
    "parent": "Wind_Data",
    "children": []
  },
  "Microclimate_Characterization": {
    "parent": "Terroir_Information",
    "children": ["Canopy_Microclimate_Data", "Cluster_Zone_Microclimate", "Soil_Temperature_Data", "Humidity_Data"]
  },
  "Canopy_Microclimate_Data": {
    "parent": "Microclimate_Characterization",
    "children": []
  },
  "Cluster_Zone_Microclimate": {
    "parent": "Microclimate_Characterization",
    "children": []
  },
  "Soil_Temperature_Data": {
    "parent": "Microclimate_Characterization",
    "children": []
  },
  "Humidity_Data": {
    "parent": "Microclimate_Characterization",
    "children": []
  },
  "Clonal_Selection_Record": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Selection_History", "Performance_Data", "Certification_Status", "Distribution_Record"]
  },
  "Selection_History": {
    "parent": "Clonal_Selection_Record",
    "children": ["Selection_Origin", "Selection_Date", "Selection_Method", "Selection_Criteria", "Selector_Name", "Selection_Location"]
  },
  "Selection_Origin": {
    "parent": "Selection_History",
    "children": []
  },
  "Selection_Date": {
    "parent": "Selection_History",
    "children": []
  },
  "Selection_Method": {
    "parent": "Selection_History",
    "children": []
  },
  "Selection_Criteria": {
    "parent": "Selection_History",
    "children": []
  },
  "Selector_Name": {
    "parent": "Selection_History",
    "children": []
  },
  "Selection_Location": {
    "parent": "Selection_History",
    "children": []
  },
  "Performance_Data": {
    "parent": "Clonal_Selection_Record",
    "children": ["Yield_Performance_Data", "Quality_Performance_Data", "Disease_Performance_Data", "Agronomic_Performance_Data"]
  },
  "Yield_Performance_Data": {
    "parent": "Performance_Data",
    "children": ["Average_Yield", "Yield_Stability", "Yield_Components"]
  },
  "Average_Yield": {
    "parent": "Yield_Performance_Data",
    "children": []
  },
  "Yield_Stability": {
    "parent": "Yield_Performance_Data",
    "children": []
  },
  "Yield_Components": {
    "parent": "Yield_Performance_Data",
    "children": []
  },
  "Quality_Performance_Data": {
    "parent": "Performance_Data",
    "children": ["Sugar_Accumulation_Data", "Color_Intensity_Data", "Aroma_Profile_Data"]
  },
  "Sugar_Accumulation_Data": {
    "parent": "Quality_Performance_Data",
    "children": []
  },
  "Color_Intensity_Data": {
    "parent": "Quality_Performance_Data",
    "children": []
  },
  "Aroma_Profile_Data": {
    "parent": "Quality_Performance_Data",
    "children": []
  },
  "Disease_Performance_Data": {
    "parent": "Performance_Data",
    "children": ["Virus_Status", "Disease_Incidence_Data"]
  },
  "Virus_Status": {
    "parent": "Disease_Performance_Data",
    "children": []
  },
  "Disease_Incidence_Data": {
    "parent": "Disease_Performance_Data",
    "children": []
  },
  "Agronomic_Performance_Data": {
    "parent": "Performance_Data",
    "children": ["Vigor_Data", "Fertility_Data", "Ripening_Data"]
  },
  "Vigor_Data": {
    "parent": "Agronomic_Performance_Data",
    "children": []
  },
  "Fertility_Data": {
    "parent": "Agronomic_Performance_Data",
    "children": []
  },
  "Ripening_Data": {
    "parent": "Agronomic_Performance_Data",
    "children": []
  },
  "Certification_Status": {
    "parent": "Clonal_Selection_Record",
    "children": ["Certification_Level", "Certification_Authority", "Certification_Date", "Certification_Number", "Virus_Testing_Status", "Health_Status_Declaration"]
  },
  "Certification_Level": {
    "parent": "Certification_Status",
    "children": []
  },
  "Certification_Authority": {
    "parent": "Certification_Status",
    "children": []
  },
  "Certification_Date": {
    "parent": "Certification_Status",
    "children": []
  },
  "Certification_Number": {
    "parent": "Certification_Status",
    "children": []
  },
  "Virus_Testing_Status": {
    "parent": "Certification_Status",
    "children": ["ELISA_Test_Result", "PCR_Test_Result", "Indexing_Result"]
  },
  "ELISA_Test_Result": {
    "parent": "Virus_Testing_Status",
    "children": []
  },
  "PCR_Test_Result": {
    "parent": "Virus_Testing_Status",
    "children": []
  },
  "Indexing_Result": {
    "parent": "Virus_Testing_Status",
    "children": []
  },
  "Health_Status_Declaration": {
    "parent": "Certification_Status",
    "children": []
  },
  "Distribution_Record": {
    "parent": "Clonal_Selection_Record",
    "children": ["Nursery_Distribution", "Propagation_Rights", "Plant_Material_Availability", "Geographic_Distribution"]
  },
  "Nursery_Distribution": {
    "parent": "Distribution_Record",
    "children": []
  },
  "Propagation_Rights": {
    "parent": "Distribution_Record",
    "children": []
  },
  "Plant_Material_Availability": {
    "parent": "Distribution_Record",
    "children": []
  },
  "Geographic_Distribution": {
    "parent": "Distribution_Record",
    "children": []
  },
  "Quality_Analysis_Data": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Must_Analysis_Data", "Berry_Composition_Data", "Aromatic_Analysis_Data"]
  },
  "Must_Analysis_Data": {
    "parent": "Quality_Analysis_Data",
    "children": ["Sugar_Content_Data", "Acidity_Data", "Nitrogen_Data", "Phenolic_Data"]
  },
  "Sugar_Content_Data": {
    "parent": "Must_Analysis_Data",
    "children": ["Brix_Measurement", "Baume_Measurement", "Oechsle_Measurement", "KMW_Measurement", "Potential_Alcohol"]
  },
  "Brix_Measurement": {
    "parent": "Sugar_Content_Data",
    "children": []
  },
  "Baume_Measurement": {
    "parent": "Sugar_Content_Data",
    "children": []
  },
  "Oechsle_Measurement": {
    "parent": "Sugar_Content_Data",
    "children": []
  },
  "KMW_Measurement": {
    "parent": "Sugar_Content_Data",
    "children": []
  },
  "Potential_Alcohol": {
    "parent": "Sugar_Content_Data",
    "children": []
  },
  "Acidity_Data": {
    "parent": "Must_Analysis_Data",
    "children": ["Total_Acidity", "Tartaric_Acid_Content", "Malic_Acid_Content", "Citric_Acid_Content", "pH_Measurement"]
  },
  "Total_Acidity": {
    "parent": "Acidity_Data",
    "children": []
  },
  "Tartaric_Acid_Content": {
    "parent": "Acidity_Data",
    "children": []
  },
  "Malic_Acid_Content": {
    "parent": "Acidity_Data",
    "children": []
  },
  "Citric_Acid_Content": {
    "parent": "Acidity_Data",
    "children": []
  },
  "pH_Measurement": {
    "parent": "Acidity_Data",
    "children": []
  },
  "Nitrogen_Data": {
    "parent": "Must_Analysis_Data",
    "children": ["YAN_Data", "Primary_Amino_Nitrogen", "Ammonium_Content"]
  },
  "YAN_Data": {
    "parent": "Nitrogen_Data",
    "children": []
  },
  "Primary_Amino_Nitrogen": {
    "parent": "Nitrogen_Data",
    "children": []
  },
  "Ammonium_Content": {
    "parent": "Nitrogen_Data",
    "children": []
  },
  "Phenolic_Data": {
    "parent": "Must_Analysis_Data",
    "children": ["Total_Phenolics", "Anthocyanin_Content", "Tannin_Content", "Color_Intensity"]
  },
  "Total_Phenolics": {
    "parent": "Phenolic_Data",
    "children": []
  },
  "Anthocyanin_Content": {
    "parent": "Phenolic_Data",
    "children": []
  },
  "Tannin_Content": {
    "parent": "Phenolic_Data",
    "children": []
  },
  "Color_Intensity": {
    "parent": "Phenolic_Data",
    "children": []
  },
  "Berry_Composition_Data": {
    "parent": "Quality_Analysis_Data",
    "children": ["Berry_Weight_Data", "Skin_Weight_Data", "Seed_Weight_Data", "Pulp_Weight_Data", "Skin_To_Pulp_Ratio"]
  },
  "Berry_Weight_Data": {
    "parent": "Berry_Composition_Data",
    "children": []
  },
  "Skin_Weight_Data": {
    "parent": "Berry_Composition_Data",
    "children": []
  },
  "Seed_Weight_Data": {
    "parent": "Berry_Composition_Data",
    "children": []
  },
  "Pulp_Weight_Data": {
    "parent": "Berry_Composition_Data",
    "children": []
  },
  "Skin_To_Pulp_Ratio": {
    "parent": "Berry_Composition_Data",
    "children": []
  },
  "Aromatic_Analysis_Data": {
    "parent": "Quality_Analysis_Data",
    "children": ["Terpene_Profile", "Norisoprenoid_Data", "Methoxypyrazine_Data", "Thiol_Precursor_Data", "Volatile_Compound_Profile"]
  },
  "Terpene_Profile": {
    "parent": "Aromatic_Analysis_Data",
    "children": []
  },
  "Norisoprenoid_Data": {
    "parent": "Aromatic_Analysis_Data",
    "children": []
  },
  "Methoxypyrazine_Data": {
    "parent": "Aromatic_Analysis_Data",
    "children": []
  },
  "Thiol_Precursor_Data": {
    "parent": "Aromatic_Analysis_Data",
    "children": []
  },
  "Volatile_Compound_Profile": {
    "parent": "Aromatic_Analysis_Data",
    "children": []
  },
  "Wine_Specification": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Wine_Style_Description", "Winemaking_Protocol", "Wine_Analysis_Data", "Sensory_Description"]
  },
  "Wine_Style_Description": {
    "parent": "Wine_Specification",
    "children": ["Still_Wine_Specification", "Sparkling_Wine_Specification", "Fortified_Wine_Specification", "Sweet_Wine_Specification"]
  },
  "Still_Wine_Specification": {
    "parent": "Wine_Style_Description",
    "children": []
  },
  "Sparkling_Wine_Specification": {
    "parent": "Wine_Style_Description",
    "children": []
  },
  "Fortified_Wine_Specification": {
    "parent": "Wine_Style_Description",
    "children": []
  },
  "Sweet_Wine_Specification": {
    "parent": "Wine_Style_Description",
    "children": []
  },
  "Winemaking_Protocol": {
    "parent": "Wine_Specification",
    "children": ["Fermentation_Protocol", "Maceration_Protocol", "Aging_Protocol", "Blending_Specification"]
  },
  "Fermentation_Protocol": {
    "parent": "Winemaking_Protocol",
    "children": []
  },
  "Maceration_Protocol": {
    "parent": "Winemaking_Protocol",
    "children": []
  },
  "Aging_Protocol": {
    "parent": "Winemaking_Protocol",
    "children": []
  },
  "Blending_Specification": {
    "parent": "Winemaking_Protocol",
    "children": []
  },
  "Wine_Analysis_Data": {
    "parent": "Wine_Specification",
    "children": ["Alcohol_Content", "Residual_Sugar", "Volatile_Acidity", "Free_SO2", "Total_SO2", "Wine_pH"]
  },
  "Alcohol_Content": {
    "parent": "Wine_Analysis_Data",
    "children": []
  },
  "Residual_Sugar": {
    "parent": "Wine_Analysis_Data",
    "children": []
  },
  "Volatile_Acidity": {
    "parent": "Wine_Analysis_Data",
    "children": []
  },
  "Free_SO2": {
    "parent": "Wine_Analysis_Data",
    "children": []
  },
  "Total_SO2": {
    "parent": "Wine_Analysis_Data",
    "children": []
  },
  "Wine_pH": {
    "parent": "Wine_Analysis_Data",
    "children": []
  },
  "Sensory_Description": {
    "parent": "Wine_Specification",
    "children": ["Visual_Description", "Aroma_Description", "Taste_Description", "Overall_Assessment"]
  },
  "Visual_Description": {
    "parent": "Sensory_Description",
    "children": ["Color_Description", "Clarity_Description", "Viscosity_Description"]
  },
  "Color_Description": {
    "parent": "Visual_Description",
    "children": []
  },
  "Clarity_Description": {
    "parent": "Visual_Description",
    "children": []
  },
  "Viscosity_Description": {
    "parent": "Visual_Description",
    "children": []
  },
  "Aroma_Description": {
    "parent": "Sensory_Description",
    "children": ["Primary_Aroma_Description", "Secondary_Aroma_Description", "Tertiary_Aroma_Description", "Aroma_Intensity", "Aroma_Complexity"]
  },
  "Primary_Aroma_Description": {
    "parent": "Aroma_Description",
    "children": []
  },
  "Secondary_Aroma_Description": {
    "parent": "Aroma_Description",
    "children": []
  },
  "Tertiary_Aroma_Description": {
    "parent": "Aroma_Description",
    "children": []
  },
  "Aroma_Intensity": {
    "parent": "Aroma_Description",
    "children": []
  },
  "Aroma_Complexity": {
    "parent": "Aroma_Description",
    "children": []
  },
  "Taste_Description": {
    "parent": "Sensory_Description",
    "children": ["Sweetness_Description", "Acidity_Perception", "Tannin_Description", "Body_Description", "Finish_Description"]
  },
  "Sweetness_Description": {
    "parent": "Taste_Description",
    "children": []
  },
  "Acidity_Perception": {
    "parent": "Taste_Description",
    "children": []
  },
  "Tannin_Description": {
    "parent": "Taste_Description",
    "children": []
  },
  "Body_Description": {
    "parent": "Taste_Description",
    "children": []
  },
  "Finish_Description": {
    "parent": "Taste_Description",
    "children": []
  },
  "Overall_Assessment": {
    "parent": "Sensory_Description",
    "children": ["Balance_Assessment", "Typicity_Assessment", "Quality_Rating", "Aging_Potential"]
  },
  "Balance_Assessment": {
    "parent": "Overall_Assessment",
    "children": []
  },
  "Typicity_Assessment": {
    "parent": "Overall_Assessment",
    "children": []
  },
  "Quality_Rating": {
    "parent": "Overall_Assessment",
    "children": []
  },
  "Aging_Potential": {
    "parent": "Overall_Assessment",
    "children": []
  },
  "Historical_Record": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Origin_Record", "Spread_History", "Historical_Importance", "Documentation_Source"]
  },
  "Origin_Record": {
    "parent": "Historical_Record",
    "children": ["Geographic_Origin", "Historical_First_Mention", "Etymology_Record"]
  },
  "Geographic_Origin": {
    "parent": "Origin_Record",
    "children": []
  },
  "Historical_First_Mention": {
    "parent": "Origin_Record",
    "children": []
  },
  "Etymology_Record": {
    "parent": "Origin_Record",
    "children": []
  },
  "Spread_History": {
    "parent": "Historical_Record",
    "children": ["Introduction_Record", "Migration_Path", "Establishment_Date"]
  },
  "Introduction_Record": {
    "parent": "Spread_History",
    "children": []
  },
  "Migration_Path": {
    "parent": "Spread_History",
    "children": []
  },
  "Establishment_Date": {
    "parent": "Spread_History",
    "children": []
  },
  "Historical_Importance": {
    "parent": "Historical_Record",
    "children": ["Historical_Acreage_Data", "Historical_Wine_Record", "Famous_Wine_Association"]
  },
  "Historical_Acreage_Data": {
    "parent": "Historical_Importance",
    "children": []
  },
  "Historical_Wine_Record": {
    "parent": "Historical_Importance",
    "children": []
  },
  "Famous_Wine_Association": {
    "parent": "Historical_Importance",
    "children": []
  },
  "Documentation_Source": {
    "parent": "Historical_Record",
    "children": ["Historical_Document_Reference", "Ampelographic_Source", "Scientific_Publication_Reference"]
  },
  "Historical_Document_Reference": {
    "parent": "Documentation_Source",
    "children": []
  },
  "Ampelographic_Source": {
    "parent": "Documentation_Source",
    "children": []
  },
  "Scientific_Publication_Reference": {
    "parent": "Documentation_Source",
    "children": []
  },
  "Regulatory_Information": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Varietal_Authorization", "Label_Regulation", "Classification_Status", "Trade_Regulation"]
  },
  "Varietal_Authorization": {
    "parent": "Regulatory_Information",
    "children": ["Authorized_Region", "Authorization_Date", "Authorization_Category", "Planting_Rights"]
  },
  "Authorized_Region": {
    "parent": "Varietal_Authorization",
    "children": []
  },
  "Authorization_Date": {
    "parent": "Varietal_Authorization",
    "children": []
  },
  "Authorization_Category": {
    "parent": "Varietal_Authorization",
    "children": []
  },
  "Planting_Rights": {
    "parent": "Varietal_Authorization",
    "children": []
  },
  "Label_Regulation": {
    "parent": "Regulatory_Information",
    "children": ["Varietal_Labeling_Rule", "Appellation_Requirement", "Vintage_Declaration_Rule"]
  },
  "Varietal_Labeling_Rule": {
    "parent": "Label_Regulation",
    "children": []
  },
  "Appellation_Requirement": {
    "parent": "Label_Regulation",
    "children": []
  },
  "Vintage_Declaration_Rule": {
    "parent": "Label_Regulation",
    "children": []
  },
  "Classification_Status": {
    "parent": "Regulatory_Information",
    "children": ["Recommended_Variety_Status", "Authorized_Variety_Status", "Provisional_Status", "Heritage_Status"]
  },
  "Recommended_Variety_Status": {
    "parent": "Classification_Status",
    "children": []
  },
  "Authorized_Variety_Status": {
    "parent": "Classification_Status",
    "children": []
  },
  "Provisional_Status": {
    "parent": "Classification_Status",
    "children": []
  },
  "Heritage_Status": {
    "parent": "Classification_Status",
    "children": []
  },
  "Trade_Regulation": {
    "parent": "Regulatory_Information",
    "children": ["Export_Certification", "Import_Requirement", "Quarantine_Status"]
  },
  "Export_Certification": {
    "parent": "Trade_Regulation",
    "children": []
  },
  "Import_Requirement": {
    "parent": "Trade_Regulation",
    "children": []
  },
  "Quarantine_Status": {
    "parent": "Trade_Regulation",
    "children": []
  },
  "Economic_Data": {
    "parent": "Grapevine_Information_Entity",
    "children": ["Production_Statistics", "Market_Data", "Cost_Of_Production"]
  },
  "Production_Statistics": {
    "parent": "Economic_Data",
    "children": ["Global_Acreage", "Regional_Acreage", "Production_Volume", "Production_Trend"]
  },
  "Global_Acreage": {
    "parent": "Production_Statistics",
    "children": []
  },
  "Regional_Acreage": {
    "parent": "Production_Statistics",
    "children": []
  },
  "Production_Volume": {
    "parent": "Production_Statistics",
    "children": []
  },
  "Production_Trend": {
    "parent": "Production_Statistics",
    "children": []
  },
  "Market_Data": {
    "parent": "Economic_Data",
    "children": ["Grape_Price_Data", "Wine_Price_Data", "Market_Demand_Data"]
  },
  "Grape_Price_Data": {
    "parent": "Market_Data",
    "children": []
  },
  "Wine_Price_Data": {
    "parent": "Market_Data",
    "children": []
  },
  "Market_Demand_Data": {
    "parent": "Market_Data",
    "children": []
  },
  "Cost_Of_Production": {
    "parent": "Economic_Data",
    "children": ["Establishment_Cost", "Annual_Production_Cost", "Harvest_Cost"]
  },
  "Establishment_Cost": {
    "parent": "Cost_Of_Production",
    "children": []
  },
  "Annual_Production_Cost": {
    "parent": "Cost_Of_Production",
    "children": []
  },
  "Harvest_Cost": {
    "parent": "Cost_Of_Production",
    "children": []
  }
};

/*
  end of vvo_tree.js
 */
