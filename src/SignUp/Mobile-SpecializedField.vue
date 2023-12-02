<template>
    <IonSelect class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Classification" v-model="prefferedClassification"
        @ion-change="chosenSpecial()" :multiple="true" mode="md" required><div slot="label">Preffered Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Accounting"> Accounting </IonSelectOption>
        <IonSelectOption value="Administration & Office Support">
            Administration & Office Support
        </IonSelectOption>
        <IonSelectOption value="Advertising, Arts & Media">
            Advertising, Arts & Media
        </IonSelectOption>
        <IonSelectOption value="Banking & Financial Services">
            Banking & Financial Services
        </IonSelectOption>
        <IonSelectOption value="Call Centre & Customer Services">
            Call Centre & Customer Services
        </IonSelectOption>
        <IonSelectOption value="CEO & General Management">CEO & General Management
        </IonSelectOption>
        <IonSelectOption value="Community Services and Development">Community Services and Development
        </IonSelectOption>
        <IonSelectOption value="Construction">Construction </IonSelectOption>
        <IonSelectOption value="Consulting & Strategy">Consulting & Strategy
        </IonSelectOption>
        <IonSelectOption value="Design & Architecture">Design & Architecture
        </IonSelectOption>
        <IonSelectOption value="Education & Training">Education & Training
        </IonSelectOption>
        <IonSelectOption value="Engineering">Engineering</IonSelectOption>
        <IonSelectOption value="Farming, Animals & Conservation">Farming, Animals & Conservation</IonSelectOption>
        <IonSelectOption value="Government & Defence">Government & Defence</IonSelectOption>
        <IonSelectOption value="Healthcare & Medical">Healthcare & Medical</IonSelectOption>
        <IonSelectOption value="Hospitality & Tourism">Hospitality & Tourism</IonSelectOption>
        <IonSelectOption value="Human Resources & Recruitment">Human Resources & Recruitment</IonSelectOption>
        <IonSelectOption value="Information & Communication Technology">Information & Communication Technology
        </IonSelectOption>
        <IonSelectOption value="Insurance & Superannuation">Insurance & Superannuation</IonSelectOption>
        <IonSelectOption value="Legal">Legal</IonSelectOption>
        <IonSelectOption value="Manufacturing, Transport & Logistics">Manufacturing, Transport & Logistics</IonSelectOption>
        <IonSelectOption value="Marketing & Communication">Marketing & Communication</IonSelectOption>
        <IonSelectOption value="Mining, Resources & Energy">Mining, Resources & Energy</IonSelectOption>
        <IonSelectOption value="Real Estate & Property">Real Estate & Property</IonSelectOption>
        <IonSelectOption value="Retail & Consumer Products">Retail & Consumer Products</IonSelectOption>
        <IonSelectOption value="Sales">Sales</IonSelectOption>
        <IonSelectOption value="Science & Technology">Science & Technology</IonSelectOption>
        <IonSelectOption value="Self Employment">Self Employment</IonSelectOption>
        <IonSelectOption value="Sport & Recreation">Sport & Recreation</IonSelectOption>
        <IonSelectOption value="Trades & Services">Trades & Services</IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px;" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :disabled="true" v-if="!prefferedClassification"
        mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Accounts Officers/Clerks">
            Accounts Officers/Clerks
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px;" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-if="prefferedClassification.includes('Accounting')"
        v-model="subAccounting" @ion-change="chosenSubspecial()" mode="md"><div slot="label">Accounting Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Accounts Officers/Clerks">
            Accounts Officers/Clerks
        </IonSelectOption>
        <IonSelectOption value="Accounts Payable">
            Accounts Payable
        </IonSelectOption>
        <IonSelectOption value="Accounts Receivable/Credit Control">
            Accounts Receivable/Credit Control
        </IonSelectOption>
        <IonSelectOption value="Analysis & Reporting">
            Analysis & Reporting
        </IonSelectOption>
        <IonSelectOption value="Assistant Accountants">
            Assistant Accountants
        </IonSelectOption>
        <IonSelectOption value="Audit - External">
            Audit - External
        </IonSelectOption>
        <IonSelectOption value="Audit - Internal">
            Audit - Internal
        </IonSelectOption>
        <IonSelectOption value="Bookkeeping & Small Practice Accounting">
            Bookkeeping & Small Practice Accounting
        </IonSelectOption>
        <IonSelectOption value="Business Services & Corporate Advisory">
            Business Services & Corporate Advisory
        </IonSelectOption>
        <IonSelectOption value="Company Secretaries">
            Company Secretaries
        </IonSelectOption>
        <IonSelectOption value="Compliance & Risk">
            Compliance & Risk
        </IonSelectOption>
        <IonSelectOption value="Cost Accounting"> Cost Accounting </IonSelectOption>
        <IonSelectOption value="Financial Accounting & Reporting">
            Financial Accounting & Reporting
        </IonSelectOption>
        <IonSelectOption value="Financial Managers & Controllers">
            Financial Managers & Controllers
        </IonSelectOption>
        <IonSelectOption value="Forensic Accounting & Investigation">
            Forensic Accounting & Investigation
        </IonSelectOption>
        <IonSelectOption value="Insolvency & Corporate Recovery">
            Insolvency & Corporate Recovery
        </IonSelectOption>
        <IonSelectOption value="Inventory & Fixed Assets">
            Inventory & Fixed Assets
        </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Management Accounting & Budgeting">
            Management Accounting & Budgeting
        </IonSelectOption>
        <IonSelectOption value="Payroll"> Payroll </IonSelectOption>
        <IonSelectOption value="Strategy & Planning">
            Strategy & Planning
        </IonSelectOption>
        <IonSelectOption value="Systems Accounting & IT Audit">
            Systems Accounting & IT Audit
        </IonSelectOption>
        <IonSelectOption value="Taxation"> Taxation </IonSelectOption>
        <IonSelectOption value="Treasury"> Treasury </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px;" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subAdmin" v-if="prefferedClassification.includes('Administration & Office Support')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Sub Classification Administrative Assistants<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Administrative Assistants">
            Administrative Assistants
        </IonSelectOption>
        <IonSelectOption value="Client & Sales Administration">
            Client & Sales Administration
        </IonSelectOption>
        <IonSelectOption value="Contracts Administration">
            Contracts Administration
        </IonSelectOption>
        <IonSelectOption value="Data Entry & Word Processing">
            Data Entry & Word Processing
        </IonSelectOption>
        <IonSelectOption value="Office Management">
            Office Management
        </IonSelectOption>
        <IonSelectOption value="PA, EA & Secretarial">
            PA, EA & Secretarial
        </IonSelectOption>
        <IonSelectOption value="Receptionist"> Receptionist </IonSelectOption>
        <IonSelectOption value="Record Management & Document Control">
            Record Management & Document Control
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Advertising, Arts & Media')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Advertising, Arts & Media Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Agency Account Management">
            Agency Account Management
        </IonSelectOption>
        <IonSelectOption value="Art Direction"> Art Direction </IonSelectOption>
        <IonSelectOption value="Editing & Publishing">
            Editing & Publishing
        </IonSelectOption>
        <IonSelectOption value="Event Management">
            Event Management
        </IonSelectOption>
        <IonSelectOption value="Journalism & Writing">
            Journalism & Writing
        </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Media Strategy, Planning & Buying">
            Media Strategy, Planning & Buying
        </IonSelectOption>
        <IonSelectOption value="Performing Arts"> Performing Arts </IonSelectOption>
        <IonSelectOption value="Photography"> Photography </IonSelectOption>
        <IonSelectOption value="Programming & Production">
            Programming & Production
        </IonSelectOption>
        <IonSelectOption value="Promotions"> Promotions </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Banking & Financial Services')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Account & Relationship Management">
            Account & Relationship Management
        </IonSelectOption>
        <IonSelectOption value="Analysis & Reporting">
            Analysis & Reporting
        </IonSelectOption>
        <IonSelectOption value="Banking - Business">
            Banking - Business
        </IonSelectOption>
        <IonSelectOption value="Banking - Corporate & Institutional">
            Banking - Corporate & Institutional
        </IonSelectOption>
        <IonSelectOption value="Banking - Retail/Branch">
            Banking - Retail/Branch
        </IonSelectOption>
        <IonSelectOption value="Client Services"> Client Services </IonSelectOption>
        <IonSelectOption value="Compliance & Risk">
            Compliance & Risk
        </IonSelectOption>
        <IonSelectOption value="Corporate Finace & Invesment Banking">
            Corporate Finace & Invesment Banking
        </IonSelectOption>
        <IonSelectOption value="Credit"> Credit </IonSelectOption>
        <IonSelectOption value="Financial Planning">
            Financial Planning
        </IonSelectOption>
        <IonSelectOption value="Funds Management">
            Funds Management
        </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Mortgages"> Mortgages </IonSelectOption>
        <IonSelectOption value="Settlements"> Settlements </IonSelectOption>
        <IonSelectOption value="Stockbroking & Trading">
            Stockbroking & Trading
        </IonSelectOption>
        <IonSelectOption value="Treasury"> Treasury </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Call Centre & Customer Services')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Collections"> Collections </IonSelectOption>
        <IonSelectOption value="Customer Service - Call Centre">
            Customer Service - Call Centre
        </IonSelectOption>
        <IonSelectOption value="Customer Service - Customer Facing">
            Customer Service - Customer Facing
        </IonSelectOption>
        <IonSelectOption value="Management & Support">
            Management & Support
        </IonSelectOption>
        <IonSelectOption value="Sales - Inbound"> Sales - Inbound </IonSelectOption>
        <IonSelectOption value="Sales - Outbound">
            Sales - Outbound
        </IonSelectOption>
        <IonSelectOption value="Supervisor/Team Leaders">
            Supervisor/Team Leaders
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('CEO & General Management')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Board Appointments">
            Board Appointments
        </IonSelectOption>
        <IonSelectOption value="CEO"> CEO </IonSelectOption>
        <IonSelectOption value="COO & MD"> COO & MD </IonSelectOption>
        <IonSelectOption value="General/Business Unit Manager">
            General/Business Unit Manager
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Community Services and Development')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Board Appointments">
            Aged & Disability Support
        </IonSelectOption>
        <IonSelectOption value="Child Welfare, Youth & Family Services">
            Child Welfare, Youth & Family Services
        </IonSelectOption>
        <IonSelectOption value="Community Development">
            Community Development
        </IonSelectOption>
        <IonSelectOption value="Employment Services">
            Employment Services
        </IonSelectOption>
        <IonSelectOption value="Fundraising"> Fundraising </IonSelectOption>
        <IonSelectOption value="Housing & Homelessness Services">
            Housing & Homelessness Services
        </IonSelectOption>
        <IonSelectOption value="Indigenous & Multicultural Services">
            Indigenous & Multicultural Services
        </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Volunteer Coordination & Support">
            Volunteer Coordination & Support
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Construction')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Contracts Management">
            Contracts Management
        </IonSelectOption>
        <IonSelectOption value="Estimating"> Estimating </IonSelectOption>
        <IonSelectOption value="Foreperson/Supervisors">
            Foreperson/Supervisors
        </IonSelectOption>
        <IonSelectOption value="Health, Safety & Environment">
            Health, Safety & Environment
        </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Planning & Scheduling">
            Planning & Scheduling
        </IonSelectOption>
        <IonSelectOption value="Plant & Machinery Operators">
            Plant & Machinery Operators
        </IonSelectOption>
        <IonSelectOption value="Project Management">
            Project Management
        </IonSelectOption>
        <IonSelectOption value="Quality Assurance & Control">
            Quality Assurance & Control
        </IonSelectOption>
        <IonSelectOption value="Surverying"> Surverying</IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Consulting & Strategy')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Analysts"> Analysts </IonSelectOption>
        <IonSelectOption value="Corporate Developement">
            Corporate Developement
        </IonSelectOption>
        <IonSelectOption value="Environment & Sustainability Consulting">
            Environment & Sustainability Consulting
        </IonSelectOption>
        <IonSelectOption value="Management & Change Consulting">
            Management & Change Consulting
        </IonSelectOption>
        <IonSelectOption value="Policy"> Policy </IonSelectOption>
        <IonSelectOption value="Strategy & Planning">
            Strategy & Planning
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Design & Architecture')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Architectural Drafting">
            Architectural Drafting
        </IonSelectOption>
        <IonSelectOption value="Architecture"> Architecture </IonSelectOption>
        <IonSelectOption value="Fashion & Textile Design">
            Fashion & Textile Design
        </IonSelectOption>
        <IonSelectOption value="Graphic Design"> Graphic Design </IonSelectOption>
        <IonSelectOption value="Illustration & Animation">
            Illustration & Animation
        </IonSelectOption>
        <IonSelectOption value="Industrial Design">
            Industrial Design
        </IonSelectOption>
        <IonSelectOption value="Landscape Architecture">
            Landscape Architecture
        </IonSelectOption>
        <IonSelectOption value="Urban Design & Planning">
            Urban Design & Planning
        </IonSelectOption>
        <IonSelectOption value="Web & Interaction Design">
            Web & Interaction Design
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Education & Training')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Childcare & Outside School Hours Care">
            Childcare & Outside School Hours Care
        </IonSelectOption>
        <IonSelectOption value="Library Services & Information Management">
            Library Services & Information Management
        </IonSelectOption>
        <IonSelectOption value="Management - Schools">
            Management - Schools
        </IonSelectOption>
        <IonSelectOption value="Management - Universities">
            Management - Universities
        </IonSelectOption>
        <IonSelectOption value="Management - Vocational">
            Management - Vocational
        </IonSelectOption>
        <IonSelectOption value="Research & Fellowships">
            Research & Fellowships
        </IonSelectOption>
        <IonSelectOption value="Teaching - Early Childhood">
            Teaching - Early Childhood
        </IonSelectOption>
        <IonSelectOption value="Teaching - Primary">
            Teaching - Primary
        </IonSelectOption>
        <IonSelectOption value="Teaching - Secondary">
            Teaching - Secondary
        </IonSelectOption>
        <IonSelectOption value="Teaching - Tertiary">
            Teaching - Tertiary
        </IonSelectOption>
        <IonSelectOption value="Teaching - Vocational">
            Teaching - Vocational
        </IonSelectOption>
        <IonSelectOption value="Teaching Aides & Special Needs">
            Teaching Aides & Special Needs
        </IonSelectOption>
        <IonSelectOption value="Tutoring"> Tutoring </IonSelectOption>
        <IonSelectOption value="Workplace Training & Assessment">
            Workplace Training & Assessment
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Engineering')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Aerospace Engineering">
            Aerospace Engineering
        </IonSelectOption>
        <IonSelectOption value="Automotive Engineering">
            Automotive Engineering
        </IonSelectOption>
        <IonSelectOption value="Building Services Engineering">
            Building Services Engineering
        </IonSelectOption>
        <IonSelectOption value="Chemical Engineering">
            Chemical Engineering
        </IonSelectOption>
        <IonSelectOption value="Civil/Structural Engineering">
            Civil/Structural Engineering
        </IonSelectOption>
        <IonSelectOption value="Engineering Drafting">
            Engineering Drafting
        </IonSelectOption>
        <IonSelectOption value="Environmental Engineering">
            Environmental Engineering
        </IonSelectOption>
        <IonSelectOption value="Field Engineering">
            Field Engineering
        </IonSelectOption>
        <IonSelectOption value="Industrial Engineering">
            Industrial Engineering
        </IonSelectOption>
        <IonSelectOption value="Maintenance"> Maintenance </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Materials Handling Engineering">
            Materials Handling Engineering
        </IonSelectOption>
        <IonSelectOption value="Mechanical Engineering">
            Mechanical Engineering
        </IonSelectOption>
        <IonSelectOption value="Process Engineering">
            Process Engineering
        </IonSelectOption>
        <IonSelectOption value="Project Management">
            Project Management
        </IonSelectOption>
        <IonSelectOption value="Supervisors"> Supervisors </IonSelectOption>
        <IonSelectOption value="System Engineering">
            System Engineering
        </IonSelectOption>
        <IonSelectOption value="Water & Waste Engineering">
            Water & Waste Engineering
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Farming, Animals & Conservation')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Agronomy & Farm Services">
            Agronomy & Farm Services
        </IonSelectOption>
        <IonSelectOption value="Conservation, Parks & Wildlife">
            Conservation, Parks & Wildlife
        </IonSelectOption>
        <IonSelectOption value="Farm Labour"> Farm Labour </IonSelectOption>
        <IonSelectOption value="Farm Management"> Farm Management </IonSelectOption>
        <IonSelectOption value="Fishing & Aquaculture">
            Fishing & Aquaculture
        </IonSelectOption>
        <IonSelectOption value="Horticulture"> Horticulture </IonSelectOption>
        <IonSelectOption value="Veterinary Services & Animal Welfare">
            Veterinary Services & Animal Welfare
        </IonSelectOption>
        <IonSelectOption value="Winery & Viticulture">
            Winery & Viticulture
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Government & Defence')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Air Force"> Air Force </IonSelectOption>
        <IonSelectOption value="Army"> Army </IonSelectOption>
        <IonSelectOption value="Emergency Services">
            Emergency Services
        </IonSelectOption>
        <IonSelectOption value="Government - Federal">
            Government - Federal
        </IonSelectOption>
        <IonSelectOption value="Government - Local">
            Government - Local
        </IonSelectOption>
        <IonSelectOption value="Government - State">
            Government - State
        </IonSelectOption>
        <IonSelectOption value="Navy"> Navy </IonSelectOption>
        <IonSelectOption value="Police & Corrections">
            Police & Corrections
        </IonSelectOption>
        <IonSelectOption value="Policy, Planning & Regulation">
            Policy, Planning & Regulation
        </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Healthcare & Medical')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Ambulance/Paramedics">
            Ambulance/Paramedics
        </IonSelectOption>
        <IonSelectOption value="Chiropractic & Osteopathic">
            Chiropractic & Osteopathic
        </IonSelectOption>
        <IonSelectOption value="Dental"> Dental </IonSelectOption>
        <IonSelectOption value="Dieticians"> Dieticians </IonSelectOption>
        <IonSelectOption value="Environment Services">
            Environment Services
        </IonSelectOption>
        <IonSelectOption value="General Practioners">
            General Practioners
        </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Medical Administration">
            Medical Administration
        </IonSelectOption>
        <IonSelectOption value="Medical Imaging"> Medical Imaging </IonSelectOption>
        <IonSelectOption value="Medical Specialists">
            Medical Specialists
        </IonSelectOption>
        <IonSelectOption value="Natural Theraphies & Alternative Medicine">
            Natural Theraphies & Alternative Medicine
        </IonSelectOption>
        <IonSelectOption value="Nursing - A&E, Critical Care & ICU">
            Nursing - A&E, Critical Care & ICU
        </IonSelectOption>
        <IonSelectOption value="Nursing - Aged Care">
            Nursing - Aged Care
        </IonSelectOption>
        <IonSelectOption value="Nursing - Aged Care">
            Nursing - Aged Care
        </IonSelectOption>
        <IonSelectOption value="Nursing - Community Maternal & Child Health">
            Nursing - Community Maternal & Child Health
        </IonSelectOption>
        <IonSelectOption value="Nursing - Educators & Facilitators">
            Nursing - Educators & Facilitators
        </IonSelectOption>
        <IonSelectOption value="Nursing - General Medical & Surgical">
            Nursing - General Medical & Surgical
        </IonSelectOption>
        <IonSelectOption value="Nursing - High Acuity">
            Nursing - High Acuity
        </IonSelectOption>
        <IonSelectOption value="Nursing - Management">
            Nursing - Management
        </IonSelectOption>
        <IonSelectOption value="Nursing - Midwifery, Neo-Natal, SCN & NICU">
            Nursing - Midwifery, Neo-Natal, SCN & NICU
        </IonSelectOption>
        <IonSelectOption value="Nursing - Paediatric & PICU">
            Nursing - Paediatric & PICU
        </IonSelectOption>
        <IonSelectOption value="Nursing - Psych, Forensic & Correctional Health">
            Nursing - Psych, Forensic & Correctional Health
        </IonSelectOption>
        <IonSelectOption value="Nursing - Theatre & Recovery">
            Nursing - Theatre & Recovery
        </IonSelectOption>
        <IonSelectOption value="Optical"> Optical </IonSelectOption>
        <IonSelectOption value="Pathology"> Pathology </IonSelectOption>
        <IonSelectOption value="Pharmaceuticals & Medical Devices">
            Pharmaceuticals & Medical Devices
        </IonSelectOption>
        <IonSelectOption value="Pharmacy"> Pharmacy </IonSelectOption>
        <IonSelectOption value="Physiotherapy, OT & Rehabilation">
            Physiotherapy, OT & Rehabilation
        </IonSelectOption>
        <IonSelectOption value="Phychology, Counseling & Social Work">
            Phychology, Counseling & Social Work
        </IonSelectOption>
        <IonSelectOption value="Residents & Registrars">
            Residents & Registrars
        </IonSelectOption>
        <IonSelectOption value="Sales"> Sales </IonSelectOption>
        <IonSelectOption value="Speech Theraphy"> Speech Theraphy </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Hospitality & Tourism')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Airlines"> Airlines </IonSelectOption>
        <IonSelectOption value="Bar & Beverage Staff"> Bar & Beverage Staff </IonSelectOption>
        <IonSelectOption value="Chef/Cooks"> Chef/Cooks </IonSelectOption>
        <IonSelectOption value="Front Office & Guest Services"> Front Office & Guest Services </IonSelectOption>
        <IonSelectOption value="Gaming"> Gaming </IonSelectOption>
        <IonSelectOption value="Housekeeping"> Housekeeping </IonSelectOption>
        <IonSelectOption value="Kitchen & Sandwich Hands"> Kitchen & Sandwich Hands </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Reservations"> Reservations </IonSelectOption>
        <IonSelectOption value="Tour Guides"> Tour Guides </IonSelectOption>
        <IonSelectOption value="Travel Agents/Consultants"> Travel Agents/Consultants </IonSelectOption>
        <IonSelectOption value="Waiting Staff"> Waiting Staff </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Human Resources & Recruitment')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Consulting & Generalist HR"> Consulting & Generalist HR </IonSelectOption>
        <IonSelectOption value="Industrial & Employee Relations"> Industrial & Employee Relations </IonSelectOption>
        <IonSelectOption value="Management - Agency"> Management - Agency </IonSelectOption>
        <IonSelectOption value="Management - Internal"> Management - Internal </IonSelectOption>
        <IonSelectOption value="Occupational Health & Safety"> Occupational Health & Safety </IonSelectOption>
        <IonSelectOption value="Organisational Development"> Organisational Development </IonSelectOption>
        <IonSelectOption value="Recruitment - Agency"> Recruitment - Agency </IonSelectOption>
        <IonSelectOption value="Recruitment - Internal"> Recruitment - Internal </IonSelectOption>
        <IonSelectOption value="Remuneration & Benefits"> Remuneration & Benefits </IonSelectOption>
        <IonSelectOption value="Training & Developement"> Training & Developement </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Information & Communication Technology')"
        @ion-change="chosenSubspecial()"
        mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Architects"> Architects </IonSelectOption>
        <IonSelectOption value="Business/System Analysts"> Business/System Analysts </IonSelectOption>
        <IonSelectOption value="Consultants"> Consultants </IonSelectOption>
        <IonSelectOption value="Database Development & Administration"> Database Development & Administration
        </IonSelectOption>
        <IonSelectOption value="Developers/Programmers"> Developers/Programmers </IonSelectOption>
        <IonSelectOption value="Engineering - Hardware"> Engineering - Hardware </IonSelectOption>
        <IonSelectOption value="Engineering - Network"> Engineering - Network </IonSelectOption>
        <IonSelectOption value="Engineering - Software"> Engineering - Software </IonSelectOption>
        <IonSelectOption value="Help Desk & IT Support"> Help Desk & IT Support </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Networks & Systems Administration"> Networks & Systems Administration </IonSelectOption>
        <IonSelectOption value="Product Management & Development"> Product Management & Development </IonSelectOption>
        <IonSelectOption value="Sales - Pre & Post"> Sales - Pre & Post </IonSelectOption>
        <IonSelectOption value="Security"> Security </IonSelectOption>
        <IonSelectOption value="Team Leaders"> Team Leaders </IonSelectOption>
        <IonSelectOption value="Technical Leaders"> Technical Leaders </IonSelectOption>
        <IonSelectOption value="Technical Writing"> Technical Writing </IonSelectOption>
        <IonSelectOption value="Telecommunications"> Telecommunications </IonSelectOption>
        <IonSelectOption value="Testing & Quality Assurance"> Testing & Quality Assurance </IonSelectOption>
        <IonSelectOption value="Web Development & Production"> Web Development & Production </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Insurance & Superannuation')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Actuarial"> Actuarial </IonSelectOption>
        <IonSelectOption value="Assessment"> Assessment </IonSelectOption>
        <IonSelectOption value="Brokerage"> Brokerage </IonSelectOption>
        <IonSelectOption value="Claims"> Claims </IonSelectOption>
        <IonSelectOption value="Fund Administration"> Fund Administration </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Risk Consulting"> Risk Consulting </IonSelectOption>
        <IonSelectOption value="Superannuation"> Superannuation </IonSelectOption>
        <IonSelectOption value="Underwriting"> Underwriting </IonSelectOption>
        <IonSelectOption value="Workers' Compensation"> Workers' Compensation </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Legal')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Banking & Finace Law"> Banking & Finace Law </IonSelectOption>
        <IonSelectOption value="Construction Law"> Construction Law </IonSelectOption>
        <IonSelectOption value="Corporate & Commercial Law"> Corporate & Commercial Law </IonSelectOption>
        <IonSelectOption value="Criminal & Civil Law"> Criminal & Civil Law </IonSelectOption>
        <IonSelectOption value="Environment & Planning Law"> Environment & Planning Law </IonSelectOption>
        <IonSelectOption value="Family Law"> Family Law </IonSelectOption>
        <IonSelectOption value="Generalist - In-house"> Generalist - In-house </IonSelectOption>
        <IonSelectOption value="Generalist - Law-Firm"> Generalist - Law-Firm </IonSelectOption>
        <IonSelectOption value="Industrial Relations & Employment Law"> Industrial Relations & Employment Law
        </IonSelectOption>
        <IonSelectOption value="Insurance & Superannuation Law"> Insurance & Superannuation Law </IonSelectOption>
        <IonSelectOption value="Intellectual Property Law"> Intellectual Property Law </IonSelectOption>
        <IonSelectOption value="Law Clerks & Paralegals"> Law Clerks & Paralegals </IonSelectOption>
        <IonSelectOption value="Legal Practice Management"> Legal Practice Management </IonSelectOption>
        <IonSelectOption value="Legal Secretaries"> Legal Secretaries </IonSelectOption>
        <IonSelectOption value="Litigation & Dispute Resolution"> Litigation & Dispute Resolution </IonSelectOption>
        <IonSelectOption value="Personal Injury Law"> Personal Injury Law </IonSelectOption>
        <IonSelectOption value="Property Law"> Property Law </IonSelectOption>
        <IonSelectOption value="Tax Law"> Tax Law </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Manufacturing, Transport & Logistics')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Analysis & Reporting"> Analysis & Reporting </IonSelectOption>
        <IonSelectOption value="Assembly & Process Work"> Assembly & Process Work </IonSelectOption>
        <IonSelectOption value="Aviation Services"> Aviation Services </IonSelectOption>
        <IonSelectOption value="Couriers, Drivers & Postal Services"> Couriers, Drivers & Postal Services </IonSelectOption>
        <IonSelectOption value="Fleet Management"> Fleet Management </IonSelectOption>
        <IonSelectOption value="Freight/Cargo Forwarding"> Freight/Cargo Forwarding </IonSelectOption>
        <IonSelectOption value="Import/Export & Customs"> Import/Export & Customs </IonSelectOption>
        <IonSelectOption value="Machine Operators"> Machine Operators </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Pattern Makers & Garment Technicians"> Pattern Makers & Garment Technicians
        </IonSelectOption>
        <IonSelectOption value="Pickers & Packers"> Pickers & Packers </IonSelectOption>
        <IonSelectOption value="Production, Planning, & Scheduling"> Production, Planning, & Scheduling </IonSelectOption>
        <IonSelectOption value="Public Transport & Taxi Services"> Public Transport & Taxi Services </IonSelectOption>
        <IonSelectOption value="Purchasing, Procurement & Inventory"> Purchasing, Procurement & Inventory </IonSelectOption>
        <IonSelectOption value="Quality Assurance & Control"> Quality Assurance & Control </IonSelectOption>
        <IonSelectOption value="Rail & Maritime Transport"> Rail & Maritime Transport </IonSelectOption>
        <IonSelectOption value="Road Transport"> Road Transport </IonSelectOption>
        <IonSelectOption value="Team Leaders/Supervisors"> Team Leaders/Supervisors </IonSelectOption>
        <IonSelectOption value="Warehousing, Storage & Distribution"> Warehousing, Storage & Distribution </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Marketing & Communication')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Brand Management"> Brand Management </IonSelectOption>
        <IonSelectOption value="Digital & Search Marketing"> Digital & Search Marketing </IonSelectOption>
        <IonSelectOption value="Direct Marketing & CRM"> Direct Marketing & CRM </IonSelectOption>
        <IonSelectOption value="Event Management"> Event Management </IonSelectOption>
        <IonSelectOption value="Internal Communication"> Internal Communication </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Market Research & Analysis"> Market Research & Analysis </IonSelectOption>
        <IonSelectOption value="Marketing Assistans/Coordinators"> Marketing Assistans/Coordinators </IonSelectOption>
        <IonSelectOption value="Marketing Communications"> Marketing Communications </IonSelectOption>
        <IonSelectOption value="Product Management & Development"> Product Management & Development </IonSelectOption>
        <IonSelectOption value="Public Relations & Corporate Affairs"> Public Relations & Corporate Affairs
        </IonSelectOption>
        <IonSelectOption value="Trade Marketing"> Trade Marketing </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Mining, Resources & Energy')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Analysis & Reporting"> Analysis & Reporting </IonSelectOption>
        <IonSelectOption value="Health, Safety & Environment"> Health, Safety & Environment </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="Mining - Drill & Blast"> Mining - Drill & Blast </IonSelectOption>
        <IonSelectOption value="Mining - Engineering & Maintenance"> Mining - Engineering & Maintenance </IonSelectOption>
        <IonSelectOption value="Mining - Exploration & Geoscience"> Mining - Exploration & Geoscience </IonSelectOption>
        <IonSelectOption value="Mining - Operations"> Mining - Operations </IonSelectOption>
        <IonSelectOption value="Mining - Processing"> Mining - Processing </IonSelectOption>
        <IonSelectOption value="Natural Resources & Water"> Natural Resources & Water </IonSelectOption>
        <IonSelectOption value="Oil & Gas - Drilling"> Oil & Gas - Drilling </IonSelectOption>
        <IonSelectOption value="Oil & Gas - Engineering & Maintenance"> Oil & Gas - Engineering & Maintenance
        </IonSelectOption>
        <IonSelectOption value="Oil & Gas - Explorations & Geoscience"> Oil & Gas - Explorations & Geoscience
        </IonSelectOption>
        <IonSelectOption value="Oil & Gas - Operations"> Oil & Gas - Operations </IonSelectOption>
        <IonSelectOption value="Oil & Gas - Production & Refinement"> Oil & Gas - Production & Refinement </IonSelectOption>
        <IonSelectOption value="Power Generation & Distribution"> Power Generation & Distribution </IonSelectOption>
        <IonSelectOption value="Surveying"> Surveying </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Real Estate & Property')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Administration"> Administration </IonSelectOption>
        <IonSelectOption value="Analyst"> Analyst </IonSelectOption>
        <IonSelectOption value="Body Corporate & Facilities Management"> Body Corporate & Facilities Management
        </IonSelectOption>
        <IonSelectOption value="Commercial Sales, Leasing & Property Mgmt"> Commercial Sales, Leasing & Property Mgmt
        </IonSelectOption>
        <IonSelectOption value="Residential Leasing & Property Management"> Residential Leasing & Property Management
        </IonSelectOption>
        <IonSelectOption value="Residential Sales"> Residential Sales </IonSelectOption>
        <IonSelectOption value="Retail & Property Development"> Retail & Property Development </IonSelectOption>
        <IonSelectOption value="Valuation"> Valuation </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Retail & Consumer Products')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Buying"> Buying </IonSelectOption>
        <IonSelectOption value="Management - Area/Multi-site"> Management - Area/Multi-site </IonSelectOption>
        <IonSelectOption value="Management - Department/Assistant"> Management - Department/Assistant </IonSelectOption>
        <IonSelectOption value="Management - Store"> Management - Store </IonSelectOption>
        <IonSelectOption value="Merchandisers"> Merchandisers </IonSelectOption>
        <IonSelectOption value="Planning"> Planning </IonSelectOption>
        <IonSelectOption value="Retail Assistants"> Retail Assistants </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Sales')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Account & Relationship Management"> Account & Relationship Management </IonSelectOption>
        <IonSelectOption value="Analysis & Reporting"> Analysis & Reporting </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
        <IonSelectOption value="New Business Development"> New Business Development </IonSelectOption>
        <IonSelectOption value="Sales Coordinators"> Sales Coordinators </IonSelectOption>
        <IonSelectOption value="Sales Representatives/Consultants"> Sales Representatives/Consultants </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Science & Technology')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Biological & Biomedical Sciences"> Biological & Biomedical Sciences </IonSelectOption>
        <IonSelectOption value="Biotechnology & Genetics"> Biotechnology & Genetics </IonSelectOption>
        <IonSelectOption value="Chemistry & Physics"> Chemistry & Physics </IonSelectOption>
        <IonSelectOption value="Environmental, Earth & Geosciences"> Environmental, Earth & Geosciences </IonSelectOption>
        <IonSelectOption value="Food Technology & Safety"> Food Technology & Safety </IonSelectOption>
        <IonSelectOption value="Laboratory & Technical Services"> Laboratory & Technical Services </IonSelectOption>
        <IonSelectOption value="Materials Sciences"> Materials Sciences </IonSelectOption>
        <IonSelectOption value="Mathematics, Statistics & Information Science"> Mathematics, Statistics & Information
            Science </IonSelectOption>
        <IonSelectOption value="Modelling & Simulation"> Modelling & Simulation </IonSelectOption>
        <IonSelectOption value="Quality Assurance & Control"> Quality Assurance & Control </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Self Employment')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value=""> Self Employment </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Sport & Recreation')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Coaching & Instruction"> Coaching & Instruction </IonSelectOption>
        <IonSelectOption value="Fitness & Personal Training"> Fitness & Personal Training </IonSelectOption>
        <IonSelectOption value="Management"> Management </IonSelectOption>
    </IonSelect>

    <IonSelect style="margin-top: 10px" class="signup-inputs-mobile" label-placement="stacked" interface="popover" fill="outline"
        placeholder="Select Sub Classification" :multiple="true" v-model="subclassificationClassification" v-if="prefferedClassification.includes('Trades & Services')"
        @ion-change="chosenSubspecial()" mode="md"><div slot="label">Preffered Sub Classification<ion-text color="danger">*</ion-text></div>
        <IonSelectOption value="Air Conditioning & Refrigeration"> Air Conditioning & Refrigeration </IonSelectOption>
        <IonSelectOption value="Automotive Trades"> Automotive Trades </IonSelectOption>
        <IonSelectOption value="Bakers & Pastry Chefs"> Bakers & Pastry Chefs </IonSelectOption>
        <IonSelectOption value="Building Trades"> Building Trades </IonSelectOption>
        <IonSelectOption value="Butchers"> Butchers </IonSelectOption>
        <IonSelectOption value="Carpentry & Cabinet Making"> Carpentry & Cabinet Making </IonSelectOption>
        <IonSelectOption value="Cleaning Services"> Cleaning Services </IonSelectOption>
        <IonSelectOption value="Electricians"> Electricians </IonSelectOption>
        <IonSelectOption value="Fitters, Tunners & Machinists"> Fitters, Tunners & Machinists </IonSelectOption>
        <IonSelectOption value="Floristry"> Floristry </IonSelectOption>
        <IonSelectOption value="Gardening & Landscaping"> Gardening & Landscaping </IonSelectOption>
        <IonSelectOption value="Hair & Beauty"> Hair & Beauty </IonSelectOption>
        <IonSelectOption value="Labourers"> Labourers </IonSelectOption>
        <IonSelectOption value="Locksmiths"> Locksmiths </IonSelectOption>
        <IonSelectOption value="Maintenance & Handyperson Services"> Maintenance & Handyperson Services </IonSelectOption>
        <IonSelectOption value="Nannies & Babysitters"> Nannies & Babysitters </IonSelectOption>
        <IonSelectOption value="Painters & Sign Writers"> Painters & Sign Writers </IonSelectOption>
        <IonSelectOption value="Plumbers"> Plumbers </IonSelectOption>
        <IonSelectOption value=""> Printing & Publishing Services </IonSelectOption>
        <IonSelectOption value="Printing & Publishing Services"> Security Services </IonSelectOption>
        <IonSelectOption value="Tailor & Dressmakers"> Tailor & Dressmakers </IonSelectOption>
        <IonSelectOption value="Technicians"> Technicians </IonSelectOption>
        <IonSelectOption value="Welders & Boilermakers"> Welders & Boilermakers </IonSelectOption>
    </IonSelect>
</template>
<script lang="ts">
import { IonSelectOption, IonSelect, IonPage, IonContent, IonText } from "@ionic/vue";
import './SignUp.css'

export default {
    components: { IonSelectOption, IonSelect, IonPage, IonContent, IonText, },
    data() {
        return {
            prefferedClassification: [],
            subclassificationClassification: [],
            subAccounting: [],
            subAdmin: [],
        };
    },
    props: {
        parentPreffered: {
            type: String,
        },
        parentSubpreffered: {
            type: String,
        }
    },
    emits: ['chosen-special', 'chosen-subspecial'],
    methods: {
        chosenSpecial() {
            this.$emit("chosen-special", this.prefferedClassification);
        },
        chosenSubspecial() {
            this.$emit("chosen-subspecial", this.subclassificationClassification);
        },
    },
    mounted() {
        this.prefferedClassification = this.parentPreffered,
        this.subclassificationClassification = this.parentSubpreffered
    }
};
</script>
<style lang=""></style>
    