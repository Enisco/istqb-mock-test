import { Question } from "@/types";

/// These are questions from the past exams, but they have been edited
// to be more concise and to better match the syllabus learning outcomes.
// The explanations have also been added or improved to provide more clarity on the correct answers.
// These questions are intended to be more representative of the style and content of the actual exam questions,
// while still covering the key concepts from the syllabus.
export const ALL_QUESTIONS: Question[] = [
  {
    id: 1,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question: "Which of the following is a typical test objective?",
    options: [
      "Validating that documented requirements are met",
      "Causing failures and identifying defects",
      "Initiating errors and identifying root causes",
      "Verifying the test object meets user expectations",
    ],
    correctIndex: 1,
    explanation:
      "A typical objective of testing is to reveal failures so that defects in the software can be identified.",
  },

  {
    id: 2,
    chapter: 1,
    section: "1.1",
    klevel: "K2",
    question:
      "Which statement BEST describes the difference between testing and debugging?",
    options: [
      "Testing causes failures while debugging fixes failures",
      "Testing is a negative activity while debugging is a positive activity",
      "Testing determines that defects exist while debugging removes defects",
      "Testing finds the cause of defects while debugging fixes the cause",
    ],
    correctIndex: 2,
    explanation:
      "Testing identifies defects, while debugging is the activity used by developers to find the cause and fix the defect.",
  },

  {
    id: 3,
    chapter: 1,
    section: "1.3",
    klevel: "K2",
    question:
      "The absence-of-defects fallacy is one of the testing principles. Which example BEST illustrates this?",
    options: [
      "Explaining that testing cannot prove the absence of defects",
      "Supporting end users to perform acceptance testing",
      "Ensuring the delivered system meets user needs rather than only being defect-free",
      "Modifying tests that cause no failures",
    ],
    correctIndex: 2,
    explanation:
      "Even if no defects are found, the product may still fail if it does not meet user needs or expectations.",
  },

  {
    id: 4,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "Which test activities are MOST likely to involve boundary value analysis and equivalence partitioning?",
    options: [
      "Test implementation",
      "Test design",
      "Test execution",
      "Test monitoring",
      "Test analysis",
    ],
    correctIndex: 1,
    explanation:
      "Test design involves creating test cases using techniques such as boundary value analysis and equivalence partitioning.",
  },

  {
    id: 5,
    chapter: 1,
    section: "1.4",
    klevel: "K2",
    question:
      "Which mapping correctly links testware to the activity that produces it?",
    options: [
      "1B, 2D, 3C, 4A",
      "1B, 2D, 3A, 4C",
      "1D, 2C, 3A, 4B",
      "1D, 2C, 3B, 4A",
    ],
    correctIndex: 0,
    explanation:
      "Coverage items are created during test design, change requests during test completion, execution schedules during implementation, and prioritized test conditions during analysis.",
  },

  {
    id: 6,
    chapter: 1,
    section: "1.4",
    klevel: "K1",
    question: "Which statement about testing roles is MOST correct?",
    options: [
      "In Agile development testing is mainly performed by an external individual",
      "Testing roles mainly perform monitoring while management handles planning",
      "In Agile development some test management activities are handled by the team while cross-team management may be handled by a test manager",
      "Test management performs test analysis and design while testers execute tests",
    ],
    correctIndex: 2,
    explanation:
      "In Agile environments the team shares many responsibilities, but broader coordination across teams may still be handled by a test manager.",
  },

  {
    id: 7,
    chapter: 1,
    section: "1.5",
    klevel: "K1",
    question:
      "Which of the following is an advantage of the whole-team testing approach?",
    options: [
      "Teams with no testers",
      "Improved team dynamics",
      "Specialist team members",
      "Larger teams",
    ],
    correctIndex: 1,
    explanation:
      "Whole-team testing improves collaboration and shared responsibility for quality.",
  },

  {
    id: 8,
    chapter: 1,
    section: "1.5",
    klevel: "K2",
    question: "Which statement about independence of testing is correct?",
    options: [
      "Independent testers may find defects due to different perspectives but this independence may create adversarial relationships",
      "Developers rarely find defects in their own code but testers will always find them",
      "Independent testing requires testers from outside the organization",
      "Internal testers are always blamed for release delays",
    ],
    correctIndex: 0,
    explanation:
      "Independent testers bring different perspectives which can help find defects but may introduce communication challenges.",
  },

  {
    id: 9,
    chapter: 2,
    section: "2.1",
    klevel: "K1",
    question:
      "Which of the following is considered a good testing practice across all SDLC models?",
    options: [
      "Testing only after development is complete",
      "Testing begins early in the development lifecycle",
      "Testing only by independent teams",
      "Testing only after integration",
    ],
    correctIndex: 1,
    explanation:
      "Early testing helps detect defects sooner and reduces the cost of fixing them.",
  },

  {
    id: 10,
    chapter: 2,
    section: "2.2",
    klevel: "K1",
    question:
      "Which test level focuses on verifying interactions between integrated components?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing",
    ],
    correctIndex: 1,
    explanation:
      "Integration testing verifies the interactions and interfaces between integrated components.",
  },
  {
    id: 11,
    chapter: 2,
    section: "2.2",
    klevel: "K2",
    question: "Which statement BEST describes system testing?",
    options: [
      "Testing individual components in isolation",
      "Testing interactions between integrated components",
      "Testing the complete integrated system against requirements",
      "Testing by end users",
    ],
    correctIndex: 2,
    explanation:
      "System testing verifies the complete integrated system against specified requirements.",
  },

  {
    id: 12,
    chapter: 2,
    section: "2.2",
    klevel: "K2",
    question:
      "Which test level focuses mainly on business requirements and user needs?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing",
    ],
    correctIndex: 3,
    explanation:
      "Acceptance testing evaluates whether the system satisfies user needs and business requirements.",
  },

  {
    id: 13,
    chapter: 2,
    section: "2.3",
    klevel: "K1",
    question: "Maintenance testing is typically performed when:",
    options: [
      "Software is first developed",
      "Software is modified or updated",
      "Developers write code",
      "Users request documentation",
    ],
    correctIndex: 1,
    explanation:
      "Maintenance testing is performed after changes such as fixes, upgrades, or enhancements.",
  },

  {
    id: 14,
    chapter: 3,
    section: "3.1",
    klevel: "K1",
    question: "Which of the following is an example of static testing?",
    options: [
      "Executing automated tests",
      "Running unit tests",
      "Reviewing requirements documents",
      "Running performance tests",
    ],
    correctIndex: 2,
    explanation:
      "Static testing includes activities such as reviews and static analysis without executing the code.",
  },

  {
    id: 15,
    chapter: 3,
    section: "3.1",
    klevel: "K2",
    question: "What is a key benefit of static testing?",
    options: [
      "It replaces dynamic testing",
      "It finds defects earlier in the lifecycle",
      "It eliminates the need for reviews",
      "It guarantees defect-free software",
    ],
    correctIndex: 1,
    explanation:
      "Static testing detects defects early which reduces the cost of fixing them.",
  },

  {
    id: 16,
    chapter: 3,
    section: "3.2",
    klevel: "K1",
    question: "Which review type is the most formal?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection",
    ],
    correctIndex: 3,
    explanation:
      "Inspection is the most formal review type with defined roles, rules, and procedures.",
  },

  {
    id: 17,
    chapter: 3,
    section: "3.2",
    klevel: "K2",
    question:
      "Which role in a review process is responsible for leading the review meeting?",
    options: ["Author", "Moderator", "Recorder", "Reviewer"],
    correctIndex: 1,
    explanation: "The moderator organizes and leads the review meeting.",
  },

  {
    id: 18,
    chapter: 4,
    section: "4.1",
    klevel: "K1",
    question:
      "Which category of test techniques uses knowledge of internal code structure?",
    options: [
      "Black-box techniques",
      "White-box techniques",
      "Experience-based techniques",
      "Exploratory techniques",
    ],
    correctIndex: 1,
    explanation:
      "White-box testing uses internal structure and implementation details of the system.",
  },

  {
    id: 19,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "Which technique divides input data into groups expected to behave similarly?",
    options: [
      "Equivalence partitioning",
      "Decision table testing",
      "State transition testing",
      "Statement coverage",
    ],
    correctIndex: 0,
    explanation:
      "Equivalence partitioning divides input data into partitions that should produce similar behavior.",
  },

  {
    id: 20,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "Which technique focuses on testing values at the edges of partitions?",
    options: [
      "Boundary value analysis",
      "Decision table testing",
      "Error guessing",
      "State transition testing",
    ],
    correctIndex: 0,
    explanation:
      "Boundary value analysis tests values at the edges of equivalence partitions.",
  },

  {
    id: 21,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "Which technique is best suited for testing complex business rules?",
    options: [
      "Equivalence partitioning",
      "Decision table testing",
      "State transition testing",
      "Statement coverage",
    ],
    correctIndex: 1,
    explanation:
      "Decision tables model combinations of conditions and actions.",
  },

  {
    id: 22,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question: "State transition testing is most useful when:",
    options: [
      "Input combinations determine behavior",
      "The system behavior depends on previous states",
      "Testing performance",
      "Testing internal structure",
    ],
    correctIndex: 1,
    explanation:
      "State transition testing verifies behavior changes based on system states.",
  },

  {
    id: 23,
    chapter: 4,
    section: "4.3",
    klevel: "K1",
    question: "Statement coverage measures:",
    options: [
      "Execution of every possible path",
      "Execution of every statement in the code",
      "Execution of all combinations of inputs",
      "Execution of all states",
    ],
    correctIndex: 1,
    explanation:
      "Statement coverage ensures every executable statement is run.",
  },

  {
    id: 24,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question:
      "Which coverage criterion ensures both decision outcomes are tested?",
    options: [
      "Statement coverage",
      "Branch coverage",
      "Path coverage",
      "Condition coverage",
    ],
    correctIndex: 1,
    explanation:
      "Branch coverage ensures both true and false outcomes of decisions are tested.",
  },

  {
    id: 25,
    chapter: 4,
    section: "4.4",
    klevel: "K1",
    question: "Which testing technique relies heavily on tester experience?",
    options: [
      "Error guessing",
      "Decision tables",
      "Boundary value analysis",
      "Branch testing",
    ],
    correctIndex: 0,
    explanation:
      "Error guessing is based on tester intuition and past experience.",
  },

  {
    id: 26,
    chapter: 4,
    section: "4.4",
    klevel: "K2",
    question: "Exploratory testing combines:",
    options: [
      "Test planning and monitoring",
      "Learning, test design, and execution simultaneously",
      "Automation and scripting",
      "Static analysis and reviews",
    ],
    correctIndex: 1,
    explanation:
      "Exploratory testing involves learning, designing, and executing tests simultaneously.",
  },

  {
    id: 27,
    chapter: 5,
    section: "5.1",
    klevel: "K1",
    question: "What is the main purpose of a test plan?",
    options: [
      "Fixing defects",
      "Describing testing scope, approach, and resources",
      "Recording test results",
      "Executing tests",
    ],
    correctIndex: 1,
    explanation:
      "A test plan defines scope, objectives, strategy, and resources for testing.",
  },

  {
    id: 28,
    chapter: 5,
    section: "5.1",
    klevel: "K2",
    question: "Which factor most influences testing effort?",
    options: [
      "Office location",
      "Product risk and complexity",
      "Team lunch schedule",
      "Developer salary",
    ],
    correctIndex: 1,
    explanation:
      "Testing effort depends largely on product risk, complexity, and criticality.",
  },

  {
    id: 29,
    chapter: 5,
    section: "5.2",
    klevel: "K1",
    question: "Product risk refers to:",
    options: [
      "Risk of project delays",
      "Risk that software may fail to meet requirements",
      "Risk of team conflicts",
      "Risk of missing meetings",
    ],
    correctIndex: 1,
    explanation:
      "Product risk relates to potential failures of the software product.",
  },

  {
    id: 30,
    chapter: 5,
    section: "5.2",
    klevel: "K2",
    question: "Risk-based testing prioritizes tests based on:",
    options: [
      "Feature popularity",
      "Risk level",
      "Developer preference",
      "Team size",
    ],
    correctIndex: 1,
    explanation:
      "Risk-based testing focuses testing on the highest-risk areas first.",
  },

  {
    id: 31,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which activity tracks progress against the test plan?",
    options: [
      "Test monitoring",
      "Test analysis",
      "Test implementation",
      "Test design",
    ],
    correctIndex: 0,
    explanation:
      "Test monitoring compares actual progress with planned progress.",
  },

  {
    id: 32,
    chapter: 5,
    section: "5.3",
    klevel: "K2",
    question: "What is the purpose of test control?",
    options: [
      "Adjust testing activities based on monitoring results",
      "Write test cases",
      "Execute tests",
      "Fix defects",
    ],
    correctIndex: 0,
    explanation:
      "Test control involves corrective actions to keep testing aligned with the plan.",
  },

  {
    id: 33,
    chapter: 5,
    section: "5.4",
    klevel: "K1",
    question: "Configuration management ensures:",
    options: [
      "Only developers manage versions",
      "Artifacts are uniquely identified and controlled",
      "Developers fix defects faster",
      "Testers design better tests",
    ],
    correctIndex: 1,
    explanation:
      "Configuration management maintains integrity and traceability of artifacts.",
  },

  {
    id: 34,
    chapter: 5,
    section: "5.5",
    klevel: "K1",
    question: "The purpose of a defect report is to:",
    options: [
      "Assign blame",
      "Record information needed to investigate defects",
      "Schedule releases",
      "Create requirements",
    ],
    correctIndex: 1,
    explanation:
      "Defect reports provide the information needed to reproduce and resolve defects.",
  },

  {
    id: 35,
    chapter: 6,
    section: "6.1",
    klevel: "K1",
    question: "Which type of tool supports test execution?",
    options: [
      "Configuration management tools",
      "Test execution tools",
      "Requirements tools",
      "IDE tools",
    ],
    correctIndex: 1,
    explanation: "Test execution tools automate the running of test cases.",
  },

  {
    id: 36,
    chapter: 6,
    section: "6.1",
    klevel: "K2",
    question: "Which tool helps manage and track defects?",
    options: [
      "Static analysis tool",
      "Defect management tool",
      "Performance testing tool",
      "Coverage tool",
    ],
    correctIndex: 1,
    explanation:
      "Defect management tools track defects through their lifecycle.",
  },

  {
    id: 37,
    chapter: 6,
    section: "6.2",
    klevel: "K1",
    question: "Which is a benefit of test automation?",
    options: [
      "Eliminates need for testers",
      "Improves repeatability of tests",
      "Removes need for planning",
      "Guarantees defect-free software",
    ],
    correctIndex: 1,
    explanation:
      "Automation allows tests to be executed repeatedly with consistent results.",
  },

  {
    id: 38,
    chapter: 6,
    section: "6.2",
    klevel: "K2",
    question: "Which is a potential risk of using test tools?",
    options: [
      "Reduced test coverage",
      "Over-reliance on automation",
      "Improved collaboration",
      "Faster feedback",
    ],
    correctIndex: 1,
    explanation:
      "Teams may rely too heavily on automation and miss exploratory testing.",
  },

  {
    id: 39,
    chapter: 6,
    section: "6.2",
    klevel: "K1",
    question: "Which activity is required when introducing a new test tool?",
    options: [
      "Training the team",
      "Removing manual testing",
      "Stopping test planning",
      "Eliminating testers",
    ],
    correctIndex: 0,
    explanation: "Proper training is essential when introducing new tools.",
  },

  {
    id: 40,
    chapter: 6,
    section: "6.2",
    klevel: "K2",
    question: "Which factor should be considered before selecting a test tool?",
    options: [
      "Team preferences only",
      "Tool compatibility with existing processes",
      "Color of the interface",
      "Marketing popularity",
    ],
    correctIndex: 1,
    explanation:
      "Tool selection should consider compatibility with existing processes, skills, and infrastructure.",
  },
  {
    id: 41,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question: "Which of the following is a typical test objective?",
    options: [
      "Finding and fixing defects in the test object",
      "Maintaining effective communications with developers",
      "Validating that legal requirements have been met",
      "Building confidence in the quality of the test object",
    ],
    correctIndex: 3,
    explanation:
      "A key test objective is to build confidence in the level of quality.",
  },

  {
    id: 42,
    chapter: 1,
    section: "1.2",
    klevel: "K2",
    question:
      "Which statement BEST describes the difference between testing and debugging?",
    options: [
      "Testing fixes defects while debugging identifies them",
      "Testing improves quality while debugging reduces risk",
      "Testing shows failures caused by defects while debugging finds and fixes causes",
      "Testing and debugging are identical activities",
    ],
    correctIndex: 2,
    explanation:
      "Testing reveals failures; debugging identifies root causes and fixes defects.",
  },

  {
    id: 43,
    chapter: 1,
    section: "1.3",
    klevel: "K2",
    question:
      "Which statement BEST illustrates the absence-of-defects fallacy?",
    options: [
      "A system may be defect-free but still not meet user needs",
      "Testing proves absence of defects",
      "More testing guarantees quality",
      "All defects must be fixed before release",
    ],
    correctIndex: 0,
    explanation:
      "Even defect-free software can fail if it does not meet user needs.",
  },

  {
    id: 44,
    chapter: 1,
    section: "1.4",
    klevel: "K2",
    question: "Which BEST matches tasks with test activities?",
    options: [
      "1B, 2A, 3D, 4C",
      "1B, 2D, 3C, 4A",
      "1C, 2A, 3B, 4D",
      "1C, 2D, 3A, 4B",
    ],
    correctIndex: 1,
    explanation:
      "Correct mapping per syllabus definitions of analysis, design, implementation, completion.",
  },

  {
    id: 45,
    chapter: 1,
    section: "1.4",
    klevel: "K2",
    question: "Which testware is produced during test implementation?",
    options: ["ii, iv", "iii, v", "i, ii, v", "i, iii, iv"],
    correctIndex: 0,
    explanation:
      "Test data and execution sequences are produced during implementation.",
  },

  {
    id: 46,
    chapter: 1,
    section: "1.4",
    klevel: "K2",
    question: "Which task is MOST likely performed by test management?",
    options: [
      "Evaluate test basis",
      "Define test environment requirements",
      "Assess testability",
      "Create test completion report",
    ],
    correctIndex: 3,
    explanation: "Test managers create the test completion report.",
  },

  {
    id: 47,
    chapter: 1,
    section: "1.5",
    klevel: "K1",
    question: "Which is an advantage of the whole-team approach?",
    options: [
      "Improved communication between team members",
      "Decreased individual accountability",
      "Faster deployment automatically",
      "Reduced collaboration with business users",
    ],
    correctIndex: 0,
    explanation:
      "Whole-team approach improves collaboration and communication.",
  },

  {
    id: 48,
    chapter: 1,
    section: "1.5",
    klevel: "K2",
    question: "Which are benefits of independence of testing?",
    options: ["i, iv", "ii, v", "i, iii, iv", "ii, iii, v"],
    correctIndex: 1,
    explanation: "Questioning assumptions and different biases are benefits.",
  },

  {
    id: 49,
    chapter: 2,
    section: "2.1",
    klevel: "K1",
    question: "Which is a good practice across all SDLCs?",
    options: [
      "Each test level has specific objectives",
      "Testing only after coding",
      "Testers start after system testing",
      "Every dynamic test has static equivalent",
    ],
    correctIndex: 0,
    explanation: "Each test level has defined objectives.",
  },

  {
    id: 50,
    chapter: 2,
    section: "2.1",
    klevel: "K1",
    question: "Which is an example of test-first development?",
    options: [
      "Behavior-Driven Development",
      "Test Level Driven Development",
      "Function-Driven Development",
      "Performance-Driven Development",
    ],
    correctIndex: 0,
    explanation: "BDD is a test-first approach.",
  },

  {
    id: 51,
    chapter: 2,
    section: "2.1",
    klevel: "K2",
    question: "Which statement about DevOps is correct?",
    options: [
      "Testing is separate",
      "Testing only after deployment",
      "Continuous testing supports CI/CD",
      "No automation allowed",
    ],
    correctIndex: 3 - 3,
    explanation: "Continuous testing integrates with CI/CD pipeline.",
  },

  {
    id: 52,
    chapter: 2,
    section: "2.1",
    klevel: "K2",
    question: "Which statement about DevOps is correct?",
    options: [
      "Testing is a separate phase",
      "Testing happens only after deployment",
      "Continuous testing supports CI/CD",
      "DevOps eliminates need for testing",
    ],
    correctIndex: 2,
    explanation: "Continuous testing is integrated in CI/CD.",
  },

  {
    id: 53,
    chapter: 2,
    section: "2.1",
    klevel: "K2",
    question: "Which describes shift-left testing?",
    options: [
      "Testing later in lifecycle",
      "Testing earlier in lifecycle",
      "Removing system testing",
      "Only automation",
    ],
    correctIndex: 1,
    explanation: "Shift-left moves testing earlier.",
  },

  {
    id: 54,
    chapter: 2,
    section: "2.2",
    klevel: "K2",
    question: "Which test level focuses on business processes?",
    options: ["Component", "Integration", "System", "Acceptance"],
    correctIndex: 3,
    explanation: "Acceptance testing validates business requirements.",
  },

  {
    id: 55,
    chapter: 2,
    section: "2.3",
    klevel: "K2",
    question: "Which maintenance trigger applies?",
    options: [
      "Perfective change",
      "Adaptive change",
      "Corrective change",
      "Preventive change",
    ],
    correctIndex: 1,
    explanation: "Adaptive maintenance adapts to environment changes.",
  },

  {
    id: 56,
    chapter: 3,
    section: "3.1",
    klevel: "K1",
    question: "Which cannot be examined by static testing?",
    options: ["Contract", "Test plan", "Encrypted code", "Test charter"],
    correctIndex: 2,
    explanation: "Encrypted code cannot be reviewed.",
  },

  {
    id: 57,
    chapter: 3,
    section: "3.1",
    klevel: "K2",
    question: "Which statement about static testing is correct?",
    options: [
      "Defect types differ completely",
      "Dynamic finds all static defects",
      "Dynamic finds some but not all static defects",
      "Static finds all dynamic defects",
    ],
    correctIndex: 2,
    explanation: "Some defect types are unique to static testing.",
  },

  {
    id: 58,
    chapter: 3,
    section: "3.2",
    klevel: "K2",
    question: "Correct sequence in review process?",
    options: ["4–3–5–2–1", "4–5–3–1–2", "5–4–1–3–2", "5–4–3–2–1"],
    correctIndex: 1,
    explanation:
      "Planning → Initiation → Individual review → Communication → Fixing.",
  },

  {
    id: 59,
    chapter: 3,
    section: "3.2",
    klevel: "K1",
    question: "Who ensures review meetings run effectively?",
    options: ["Manager", "Moderator", "Chairperson", "Review Leader"],
    correctIndex: 1,
    explanation: "Moderator facilitates meetings.",
  },

  {
    id: 60,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "Which techniques help design test cases for discount requirement?",
    options: ["White-box", "Black-box", "Experience-based", "Risk-based"],
    correctIndex: 1,
    explanation: "Requirement-based testing uses black-box techniques.",
  },

  {
    id: 61,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question:
      "Which TWO test data sets achieve full valid equivalence partition coverage?",
    options: ["a, e", "b, d", "c, e", "d, e"],
    correctIndex: 3,
    explanation: "Partitions missing are student and pensioner.",
  },

  {
    id: 62,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question: "Which set provides highest boundary value coverage?",
    options: ["–1, 3", "0, 2", "–1, 0, 2, 3", "–2, 0, 2, 4"],
    correctIndex: 2,
    explanation: "Covers all boundaries: –1, 0, 2, 3.",
  },

  {
    id: 63,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question: "Which additional test increases decision table coverage?",
    options: [
      "66-year-old, unregistered, no experience",
      "55-year-old, unregistered, 2 years",
      "19-year-old, registered, 5 years",
      "None",
    ],
    correctIndex: 0,
    explanation: "Covers previously uncovered rule.",
  },

  {
    id: 64,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question: "Which sequence achieves highest valid transitions coverage?",
    options: ["a", "b", "c", "d"],
    correctIndex: 1,
    explanation: "Option b covers 5 distinct valid transitions.",
  },

  {
    id: 65,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question: "Which statement about 100% statement coverage is correct?",
    options: [
      "All failures detected",
      "100% branch coverage",
      "All executable statements ran at least once",
      "Removing one test keeps 100%",
    ],
    correctIndex: 2,
    explanation: "Statement coverage means each statement executed.",
  },

  {
    id: 66,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question: "Why does white-box testing help with vague specifications?",
    options: [
      "Based on structure",
      "Coverage measurable",
      "Finds requirement omissions",
      "Works in static",
    ],
    correctIndex: 0,
    explanation: "White-box uses internal structure.",
  },

  {
    id: 67,
    chapter: 4,
    section: "4.4",
    klevel: "K2",
    question: "Which is NOT anticipated during error guessing?",
    options: [
      "Misunderstood formula",
      "Incorrect exponent placement",
      "Missed seminar",
      "Insufficient precision",
    ],
    correctIndex: 2,
    explanation: "Seminar attendance not related to defect behavior.",
  },

  {
    id: 68,
    chapter: 4,
    section: "4.4",
    klevel: "K2",
    question: "Which is true about exploratory testing?",
    options: [
      "Test cases designed before session",
      "Execution only",
      "Predicts defect count",
      "May use black-box techniques",
    ],
    correctIndex: 3,
    explanation: "Exploratory testers may apply techniques dynamically.",
  },

  {
    id: 69,
    chapter: 4,
    section: "4.5",
    klevel: "K2",
    question: "Which collaborative practice builds shared understanding?",
    options: [
      "Planning poker",
      "Reviews",
      "Iteration planning",
      "Conversation",
    ],
    correctIndex: 3,
    explanation: "Conversation builds collective understanding.",
  },

  {
    id: 70,
    chapter: 4,
    section: "4.5",
    klevel: "K3",
    question: "BEST test case for price filter user story?",
    options: [
      "Set range 90–100, then 110",
      "Check default prices and add product",
      "Change currency",
      "Cross-browser layout",
    ],
    correctIndex: 0,
    explanation: "Directly validates acceptance criteria behavior.",
  },

  {
    id: 71,
    chapter: 5,
    section: "5.1",
    klevel: "K2",
    question: "Which BEST define exit criteria?",
    options: [
      "Budget approved",
      "Budget runs out",
      "Test basis available",
      "80% coverage achieved",
      "All analysts certified",
    ],
    correctIndex: -1,
    explanation: "Correct answers are b and d (multiple selection).",
  },

  {
    id: 72,
    chapter: 5,
    section: "5.1",
    klevel: "K3",
    question: "Three-point estimate for 4 test cases?",
    options: ["14 hours", "3.5 hours", "16 hours", "12 hours"],
    correctIndex: 0,
    explanation: "PERT: (1+4*3+8)/6=3.5 per case → 14 total.",
  },

  {
    id: 73,
    chapter: 5,
    section: "5.1",
    klevel: "K3",
    question:
      "Which test case should be executed last (additional coverage prioritization)?",
    options: ["TC1", "TC2", "TC3", "TC4"],
    correctIndex: 1,
    explanation: "TC2 contributes least additional coverage last.",
  },

  {
    id: 74,
    chapter: 5,
    section: "5.1",
    klevel: "K2",
    question: "How are testing quadrants beneficial?",
    options: [
      "Divide test levels",
      "Assess coverage metrics",
      "Help stakeholders understand test types",
      "Classify psychology",
    ],
    correctIndex: 2,
    explanation: "They help explain test types to stakeholders.",
  },

  {
    id: 75,
    chapter: 5,
    section: "5.2",
    klevel: "K1",
    question: "Risk impact if level=$1000 and likelihood=50%?",
    options: ["$500", "$2000", "$50000", "$200"],
    correctIndex: 1,
    explanation: "Impact = risk level / likelihood = 2000.",
  },

  {
    id: 76,
    chapter: 5,
    section: "5.2",
    klevel: "K2",
    question: "Which are product risks?",
    options: [
      "Scope creep",
      "Poor architecture",
      "Cost-cutting",
      "Poor tool support",
      "Too long response time",
    ],
    correctIndex: -1,
    explanation: "Correct answers: b and e.",
  },

  {
    id: 77,
    chapter: 5,
    section: "5.3",
    klevel: "K2",
    question: "Which is NOT valid purpose for test report?",
    options: [
      "Track progress",
      "Provide executed results",
      "Provide steps to reproduce each defect",
      "Provide future test planning",
    ],
    correctIndex: 2,
    explanation: "Detailed defect reproduction belongs in defect report.",
  },

  {
    id: 78,
    chapter: 6,
    section: "6.1",
    klevel: "K1",
    question: "What enabled reconstruction of release files?",
    options: [
      "Risk management",
      "Test monitoring",
      "Whole team approach",
      "Configuration management",
    ],
    correctIndex: 3,
    explanation: "Configuration management tracks versions.",
  },

  {
    id: 79,
    chapter: 6,
    section: "6.1",
    klevel: "K2",
    question: "What is missing in defect report?",
    options: ["Severity", "Priority", "Expected result", "Environment"],
    correctIndex: 1,
    explanation: "Priority field missing.",
  },

  {
    id: 80,
    chapter: 6,
    section: "6.1",
    klevel: "K2",
    question: "Which tool categories facilitate test execution?",
    options: ["i & iii", "ii & iv", "i & v", "iii & v"],
    correctIndex: 1,
    explanation: "DevOps and non-functional tools support execution.",
  },

  {
    id: 81,
    chapter: 1,
    section: "1.1",
    klevel: "K2",
    question: "Which statement best describes a typical objective of testing?",
    options: [
      "Demonstrating that the system works without defects",
      "Causing failures in order to identify defects",
      "Proving that all defects are fixed",
      "Ensuring the system is error-free",
    ],
    correctIndex: 1,
    explanation:
      "Testing aims to reveal failures so that defects can be identified and corrected.",
  },

  {
    id: 82,
    chapter: 1,
    section: "1.1",
    klevel: "K2",
    question:
      "Which statement best describes the difference between testing and debugging?",
    options: [
      "Testing fixes defects while debugging identifies failures",
      "Testing finds failures while debugging finds and fixes the causes",
      "Testing prevents failures while debugging removes defects",
      "Testing verifies quality while debugging documents defects",
    ],
    correctIndex: 1,
    explanation:
      "Testing reveals failures while debugging identifies and fixes their root causes.",
  },

  {
    id: 83,
    chapter: 1,
    section: "1.3",
    klevel: "K2",
    question: "Which example illustrates the absence-of-defects fallacy?",
    options: [
      "Testing proves that no defects exist",
      "Testing guarantees high quality",
      "A defect-free system that still fails to meet user needs",
      "Testing that covers all requirements",
    ],
    correctIndex: 2,
    explanation:
      "A system can be defect-free but still unusable if it does not meet user needs.",
  },

  {
    id: 84,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "Which activity most commonly uses equivalence partitioning and boundary value analysis?",
    options: [
      "Test monitoring",
      "Test design",
      "Test execution",
      "Test completion",
    ],
    correctIndex: 1,
    explanation:
      "Test design applies techniques such as equivalence partitioning and boundary analysis.",
  },

  {
    id: 85,
    chapter: 1,
    section: "1.4",
    klevel: "K1",
    question:
      "Which document is typically produced during test implementation?",
    options: [
      "Test conditions",
      "Execution schedule",
      "Test summary report",
      "Test plan",
    ],
    correctIndex: 1,
    explanation: "Execution schedules are created during test implementation.",
  },

  {
    id: 86,
    chapter: 1,
    section: "1.4",
    klevel: "K1",
    question: "Which statement about testing roles is most accurate?",
    options: [
      "Testing is performed only by developers",
      "Testing is only done after coding",
      "Testing responsibilities may be shared across the team",
      "Testing must be done by external teams",
    ],
    correctIndex: 2,
    explanation:
      "In modern development teams, testing activities are often shared.",
  },

  {
    id: 87,
    chapter: 1,
    section: "1.5",
    klevel: "K1",
    question: "What is a key advantage of whole-team testing?",
    options: [
      "Smaller teams",
      "Improved collaboration and shared responsibility",
      "Elimination of testers",
      "Faster coding",
    ],
    correctIndex: 1,
    explanation: "Whole-team testing improves communication and collaboration.",
  },

  {
    id: 88,
    chapter: 1,
    section: "1.5",
    klevel: "K2",
    question: "Which statement about independent testing is correct?",
    options: [
      "Independent testers always find more defects",
      "Independent testers bring a different perspective",
      "Developers never find defects in their code",
      "Independent testers must be external consultants",
    ],
    correctIndex: 1,
    explanation:
      "Independent testers provide a different viewpoint that may reveal defects.",
  },

  {
    id: 89,
    chapter: 2,
    section: "2.1",
    klevel: "K1",
    question: "Which testing practice applies across all SDLC models?",
    options: [
      "Testing only after development",
      "Early testing in the lifecycle",
      "Testing only by external testers",
      "Testing after integration only",
    ],
    correctIndex: 1,
    explanation: "Early testing helps detect defects sooner and reduces cost.",
  },

  {
    id: 90,
    chapter: 2,
    section: "2.2",
    klevel: "K1",
    question:
      "Which level verifies interactions between integrated components?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing",
    ],
    correctIndex: 1,
    explanation:
      "Integration testing focuses on interfaces between components.",
  },

  {
    id: 91,
    chapter: 2,
    section: "2.3",
    klevel: "K1",
    question: "Which level validates the complete system against requirements?",
    options: [
      "Integration testing",
      "System testing",
      "Component testing",
      "Unit testing",
    ],
    correctIndex: 1,
    explanation:
      "System testing evaluates the whole system against requirements.",
  },

  {
    id: 92,
    chapter: 2,
    section: "2.3",
    klevel: "K1",
    question: "Which testing level focuses on user needs and acceptance?",
    options: [
      "Integration testing",
      "Component testing",
      "Acceptance testing",
      "Unit testing",
    ],
    correctIndex: 2,
    explanation:
      "Acceptance testing confirms the system meets user requirements.",
  },

  {
    id: 93,
    chapter: 3,
    section: "3.1",
    klevel: "K1",
    question: "What is the main purpose of static testing?",
    options: [
      "Executing code",
      "Detecting defects without executing code",
      "Generating test data",
      "Validating performance",
    ],
    correctIndex: 1,
    explanation:
      "Static testing detects defects through reviews or analysis without execution.",
  },

  {
    id: 94,
    chapter: 3,
    section: "3.2",
    klevel: "K2",
    question: "Which activity is part of a review process?",
    options: [
      "Debugging",
      "Code execution",
      "Defect logging",
      "Test automation",
    ],
    correctIndex: 2,
    explanation: "Reviews identify and log defects in work products.",
  },

  {
    id: 95,
    chapter: 4,
    section: "4.1",
    klevel: "K1",
    question: "Which test technique category uses system structure?",
    options: ["Black-box", "White-box", "Experience-based", "Ad hoc"],
    correctIndex: 1,
    explanation:
      "White-box techniques use the internal structure of the system.",
  },

  {
    id: 96,
    chapter: 4,
    section: "4.1",
    klevel: "K1",
    question: "Which technique derives tests from requirements?",
    options: ["White-box", "Black-box", "Structural testing", "Path testing"],
    correctIndex: 1,
    explanation: "Black-box techniques derive tests from specifications.",
  },

  {
    id: 97,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question: "What does equivalence partitioning divide inputs into?",
    options: [
      "Random groups",
      "Valid and invalid partitions",
      "Test scripts",
      "Execution blocks",
    ],
    correctIndex: 1,
    explanation:
      "Inputs are divided into valid and invalid partitions expected to behave similarly.",
  },

  {
    id: 98,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question: "Boundary value analysis focuses on:",
    options: [
      "Middle values",
      "Edge values of partitions",
      "Random inputs",
      "Error messages",
    ],
    correctIndex: 1,
    explanation: "Boundary value analysis tests edge values of input ranges.",
  },

  {
    id: 99,
    chapter: 4,
    section: "4.4",
    klevel: "K1",
    question: "Which technique uses tester experience?",
    options: [
      "Error guessing",
      "Equivalence partitioning",
      "Decision table testing",
      "State transition testing",
    ],
    correctIndex: 0,
    explanation: "Error guessing relies on tester experience.",
  },

  {
    id: 100,
    chapter: 4,
    section: "4.5",
    klevel: "K2",
    question: "Decision table testing is best used when:",
    options: [
      "Complex business rules exist",
      "Testing performance",
      "Testing hardware",
      "Testing UI layout",
    ],
    correctIndex: 0,
    explanation: "Decision tables are useful for complex rules and conditions.",
  },

  {
    id: 101,
    chapter: 5,
    section: "5.1",
    klevel: "K1",
    question: "What is the purpose of a test plan?",
    options: [
      "Describe testing strategy and scope",
      "Execute test cases",
      "Debug software",
      "Deploy applications",
    ],
    correctIndex: 0,
    explanation: "A test plan defines the scope, strategy, and schedule.",
  },

  {
    id: 102,
    chapter: 5,
    section: "5.2",
    klevel: "K1",
    question: "Test monitoring primarily involves:",
    options: [
      "Writing test cases",
      "Tracking test progress",
      "Executing tests",
      "Fixing defects",
    ],
    correctIndex: 1,
    explanation: "Monitoring tracks testing progress against plans.",
  },

  {
    id: 103,
    chapter: 5,
    section: "5.3",
    klevel: "K2",
    question: "A test completion report typically includes:",
    options: [
      "Source code",
      "Test results and metrics",
      "User manuals",
      "Configuration files",
    ],
    correctIndex: 1,
    explanation: "Completion reports summarize test results and metrics.",
  },

  {
    id: 104,
    chapter: 5,
    section: "5.4",
    klevel: "K1",
    question: "Which metric helps measure test progress?",
    options: [
      "Code length",
      "Test execution status",
      "Memory usage",
      "CPU cycles",
    ],
    correctIndex: 1,
    explanation: "Execution metrics track test progress.",
  },

  {
    id: 105,
    chapter: 5,
    section: "5.5",
    klevel: "K1",
    question: "Risk-based testing prioritizes tests based on:",
    options: [
      "Developer preferences",
      "Risk level",
      "Test script length",
      "Team size",
    ],
    correctIndex: 1,
    explanation: "Testing effort is prioritized according to risk.",
  },

  {
    id: 106,
    chapter: 5,
    section: "5.5",
    klevel: "K2",
    question: "Which factor influences risk level?",
    options: [
      "Impact of failure",
      "Code indentation",
      "Team lunch schedule",
      "Screen resolution",
    ],
    correctIndex: 0,
    explanation: "Risk combines likelihood of failure and impact.",
  },

  {
    id: 107,
    chapter: 6,
    section: "6.1",
    klevel: "K1",
    question: "Which tool supports test management?",
    options: [
      "Test case repository",
      "Compiler",
      "Debugger",
      "Spreadsheet calculator",
    ],
    correctIndex: 0,
    explanation: "Test management tools organize test artifacts.",
  },

  {
    id: 108,
    chapter: 6,
    section: "6.1",
    klevel: "K1",
    question: "Test automation tools help:",
    options: [
      "Replace testers",
      "Execute tests automatically",
      "Write code faster",
      "Remove requirements",
    ],
    correctIndex: 1,
    explanation: "Automation tools execute test scripts automatically.",
  },

  {
    id: 109,
    chapter: 6,
    section: "6.2",
    klevel: "K1",
    question: "Static analysis tools detect:",
    options: [
      "Runtime crashes",
      "Code quality issues",
      "User interface bugs",
      "Network failures",
    ],
    correctIndex: 1,
    explanation:
      "Static analysis tools detect issues in code without executing it.",
  },

  {
    id: 110,
    chapter: 6,
    section: "6.2",
    klevel: "K1",
    question: "A benefit of test automation is:",
    options: [
      "Reduced execution time",
      "Elimination of testing",
      "Removal of developers",
      "Guaranteed defect removal",
    ],
    correctIndex: 0,
    explanation: "Automation speeds up repetitive test execution.",
  },

  {
    id: 111,
    chapter: 6,
    section: "6.3",
    klevel: "K1",
    question: "Which tool supports defect tracking?",
    options: ["Issue tracker", "Text editor", "Spreadsheet", "Browser"],
    correctIndex: 0,
    explanation: "Issue trackers manage defect reporting and tracking.",
  },

  {
    id: 112,
    chapter: 6,
    section: "6.3",
    klevel: "K1",
    question: "CI tools support:",
    options: [
      "Continuous integration builds",
      "Hardware assembly",
      "User documentation",
      "Network monitoring",
    ],
    correctIndex: 0,
    explanation: "CI tools automate builds and tests.",
  },

  {
    id: 113,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question: "State transition testing is useful when:",
    options: [
      "System behavior depends on previous states",
      "Testing memory usage",
      "Testing graphics",
      "Testing hardware",
    ],
    correctIndex: 0,
    explanation: "State testing evaluates behavior across system states.",
  },

  {
    id: 114,
    chapter: 4,
    section: "4.5",
    klevel: "K2",
    question: "Which technique ensures all branches are tested?",
    options: [
      "Branch coverage",
      "Boundary testing",
      "Error guessing",
      "Usability testing",
    ],
    correctIndex: 0,
    explanation: "Branch coverage measures decision outcomes.",
  },

  {
    id: 115,
    chapter: 5,
    section: "5.2",
    klevel: "K1",
    question: "Test control involves:",
    options: [
      "Adjusting testing activities",
      "Writing code",
      "Fixing defects",
      "Deploying software",
    ],
    correctIndex: 0,
    explanation: "Control adjusts activities based on monitoring results.",
  },

  {
    id: 116,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Exit criteria define:",
    options: [
      "When testing stops",
      "Who writes code",
      "Who deploys systems",
      "How users login",
    ],
    correctIndex: 0,
    explanation: "Exit criteria determine when testing can be completed.",
  },

  {
    id: 117,
    chapter: 4,
    section: "4.4",
    klevel: "K1",
    question: "Exploratory testing combines:",
    options: [
      "Design and execution",
      "Coding and debugging",
      "Planning and deployment",
      "Review and documentation",
    ],
    correctIndex: 0,
    explanation: "Exploratory testing integrates test design and execution.",
  },

  {
    id: 118,
    chapter: 2,
    section: "2.2",
    klevel: "K1",
    question: "Component testing is usually performed by:",
    options: ["Developers", "Customers", "Managers", "Users"],
    correctIndex: 0,
    explanation: "Developers commonly perform component testing.",
  },

  {
    id: 119,
    chapter: 2,
    section: "2.3",
    klevel: "K1",
    question: "System testing verifies:",
    options: [
      "Integrated system behavior",
      "Individual functions",
      "Source code formatting",
      "Compiler warnings",
    ],
    correctIndex: 0,
    explanation: "System testing validates the entire integrated system.",
  },

  {
    id: 120,
    chapter: 5,
    section: "5.1",
    klevel: "K1",
    question: "Which artifact documents the testing approach?",
    options: ["Test plan", "Test log", "Test script", "Bug report"],
    correctIndex: 0,
    explanation: "The test plan documents scope, approach, and resources.",
  },

  {
    id: 121,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which of the following statements describe a valid test objective?",
    options: [
      "To prove that there are no unfixed defects in the system under test",
      "To prove that there will be no failures after the implementation of the system into production",
      "To reduce the risk level of the test object and to build confidence in the quality level",
      "To verify that there are no untested combinations of inputs",
    ],
    correctIndex: 2,
    explanation: "",
  },
  {
    id: 122,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which of the following options shows an example of test activities that contribute to success?",
    options: [
      "Having testers involved during various SDLC activities",
      "Testers try not to disturb developers while coding",
      "Testers collaborating with end users improve defect reports",
      "Certified testers design better test cases than non-certified testers",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 123,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which testing principle explains why testing the same tests repeatedly becomes less effective?",
    options: [
      "Tests wear out",
      "Absence-of-defects fallacy",
      "Defects cluster together",
      "Exhaustive testing is impossible",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 124,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question: "Which of the following is an example of a test activity?",
    options: [
      "Estimating test effort",
      "Developing the software feature",
      "Fixing a defect",
      "Writing production code",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 125,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which factors have a significant influence on the test approach?",
    options: [
      "Requirements and risk levels",
      "Developer preferences only",
      "Programming language only",
      "Hardware specifications only",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 126,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which TWO of the following tasks belong mainly to a testing role?",
    options: [
      "Configure test environments",
      "Maintain the product backlog",
      "Design solutions to new requirements",
      "Create the test plan",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 127,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question: "Which of the following skills are most important for a tester?",
    options: [
      "Attention to detail",
      "Strong communication skills",
      "Ability to code production features",
      "Database administration",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 128,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "How does the whole team approach work between testers and business representatives?",
    options: [
      "Business representatives decide automation tools",
      "Testers define the business strategy",
      "Business representatives are excluded from testing",
      "Testers help business representatives create acceptance tests",
    ],
    correctIndex: 3,
    explanation: "",
  },
  {
    id: 129,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "For every SDLC activity there is a corresponding testing activity. In which development models does this apply?",
    options: [
      "Only sequential models",
      "Only iterative models",
      "Only incremental models",
      "Sequential, incremental and iterative models",
    ],
    correctIndex: 3,
    explanation: "",
  },
  {
    id: 130,
    chapter: 2,
    section: "2.1",
    klevel: "K1",
    question: "Which statement about testing in the SDLC is correct?",
    options: [
      "Testing should begin early in the development lifecycle",
      "Testing should only start after coding is finished",
      "Testing is only performed by developers",
      "Testing replaces quality assurance",
    ],
    correctIndex: 0,
    explanation: "",
  },

  {
    id: 131,
    chapter: 2,
    section: "2.2",
    klevel: "K1",
    question:
      "Which test level focuses on verifying interactions between integrated components?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing",
    ],
    correctIndex: 1,
    explanation: "",
  },
  {
    id: 132,
    chapter: 2,
    section: "2.2",
    klevel: "K1",
    question:
      "Which test level verifies that the entire system works as expected?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Unit testing",
    ],
    correctIndex: 2,
    explanation: "",
  },
  {
    id: 133,
    chapter: 2,
    section: "2.3",
    klevel: "K1",
    question:
      "Which type of testing focuses on confirming that defects have been fixed?",
    options: [
      "Regression testing",
      "Confirmation testing",
      "Exploratory testing",
      "Usability testing",
    ],
    correctIndex: 1,
    explanation: "",
  },
  {
    id: 134,
    chapter: 2,
    section: "2.3",
    klevel: "K1",
    question:
      "Which type of testing ensures that previously working functionality still works after changes?",
    options: [
      "Confirmation testing",
      "Regression testing",
      "Component testing",
      "System testing",
    ],
    correctIndex: 1,
    explanation: "",
  },
  {
    id: 135,
    chapter: 3,
    section: "3.1",
    klevel: "K2",
    question: "Which of the following is a benefit of static testing?",
    options: [
      "Early detection of defects",
      "Execution of code",
      "Automated regression",
      "Performance measurement",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 136,
    chapter: 3,
    section: "3.2",
    klevel: "K1",
    question: "Which review type is the most formal?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection",
    ],
    correctIndex: 3,
    explanation: "",
  },
  {
    id: 137,
    chapter: 3,
    section: "3.2",
    klevel: "K2",
    question: "Which role is responsible for leading the review process?",
    options: ["Moderator", "Author", "Manager", "Developer"],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 138,
    chapter: 3,
    section: "3.2",
    klevel: "K1",
    question: "Which artifact can be produced as an outcome of a review?",
    options: [
      "Test script",
      "Review report",
      "Executable code",
      "Deployment package",
    ],
    correctIndex: 1,
    explanation: "",
  },
  {
    id: 139,
    chapter: 4,
    section: "4.1",
    klevel: "K1",
    question: "Which black-box technique uses input partitions?",
    options: [
      "Equivalence partitioning",
      "Statement coverage",
      "Decision coverage",
      "Path testing",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 140,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "Which technique focuses on values at the edges of input domains?",
    options: [
      "Decision table testing",
      "Boundary value analysis",
      "State transition testing",
      "Error guessing",
    ],
    correctIndex: 1,
    explanation: "",
  },

  {
    id: 141,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question:
      "Which technique models system behavior with states and transitions?",
    options: [
      "Boundary value analysis",
      "Decision table testing",
      "State transition testing",
      "Statement testing",
    ],
    correctIndex: 2,
    explanation: "",
  },
  {
    id: 142,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question: "Which technique uses rules and conditions?",
    options: [
      "Decision table testing",
      "Equivalence partitioning",
      "Boundary value analysis",
      "Statement coverage",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 143,
    chapter: 4,
    section: "4.4",
    klevel: "K1",
    question: "Which technique is considered experience-based?",
    options: [
      "Error guessing",
      "Decision table testing",
      "Boundary value analysis",
      "Equivalence partitioning",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 144,
    chapter: 4,
    section: "4.4",
    klevel: "K1",
    question: "Exploratory testing combines which activities?",
    options: [
      "Design, execution and learning",
      "Planning and coding",
      "Automation and debugging",
      "Deployment and release",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 145,
    chapter: 5,
    section: "5.1",
    klevel: "K1",
    question: "Which artifact defines the scope and objectives of testing?",
    options: ["Test plan", "Test case", "Defect report", "Test log"],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 146,
    chapter: 5,
    section: "5.1",
    klevel: "K1",
    question: "Which activity involves monitoring test progress?",
    options: [
      "Test monitoring and control",
      "Test design",
      "Test implementation",
      "Test execution",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 147,
    chapter: 5,
    section: "5.2",
    klevel: "K1",
    question: "Which metric measures test coverage?",
    options: [
      "Requirements coverage",
      "Budget usage",
      "Developer productivity",
      "Release frequency",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 148,
    chapter: 5,
    section: "5.2",
    klevel: "K1",
    question: "Which document records test execution results?",
    options: ["Test log", "Test strategy", "Test plan", "Test charter"],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 149,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which tool category supports test execution?",
    options: [
      "Test execution tools",
      "Requirement tools",
      "Version control tools",
      "Design tools",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 150,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which tool helps manage defects?",
    options: [
      "Defect management tool",
      "Build automation tool",
      "IDE",
      "Database tool",
    ],
    correctIndex: 0,
    explanation: "",
  },

  {
    id: 151,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which benefit can tools provide to testing?",
    options: [
      "Improved efficiency and repeatability",
      "Replacement of testers",
      "Elimination of all defects",
      "Removal of the need for test design",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 152,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "What is a risk of test automation?",
    options: [
      "High initial cost",
      "Too many testers",
      "Too few test cases",
      "Too little documentation",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 153,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which factor should be considered when selecting a test tool?",
    options: [
      "Compatibility with existing tools",
      "Developer salary",
      "Programming language popularity",
      "Office location",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 154,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which role typically manages testing activities?",
    options: ["Test manager", "Business analyst", "Developer", "UX designer"],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 155,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which artifact documents identified defects?",
    options: ["Defect report", "Test case", "Test plan", "Test log"],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 156,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which activity involves fixing the cause of a failure?",
    options: ["Debugging", "Testing", "Test monitoring", "Test planning"],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 157,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which activity confirms that a defect has been fixed?",
    options: [
      "Confirmation testing",
      "Regression testing",
      "System testing",
      "Exploratory testing",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 158,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which test artifact defines inputs and expected results?",
    options: ["Test case", "Test plan", "Test log", "Defect report"],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 159,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which practice helps improve test effectiveness?",
    options: [
      "Early testing",
      "Late testing",
      "No documentation",
      "No collaboration",
    ],
    correctIndex: 0,
    explanation: "",
  },
  {
    id: 160,
    chapter: 5,
    section: "5.3",
    klevel: "K1",
    question: "Which goal is achieved by testing?",
    options: [
      "Reducing risk and increasing confidence in quality",
      "Guaranteeing defect-free software",
      "Eliminating all failures",
      "Replacing development",
    ],
    correctIndex: 0,
    explanation: "",
  },

  {
    id: 161,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which of the following statements describes a valid test objective?",
    options: [
      "To prove that there are no unfixed defects in the system under test",
      "To prove that there will be no failures after the implementation of the system into production",
      "To reduce the risk level of the test object and to build confidence in the quality level",
      "To verify that there are no untested combinations of inputs",
    ],
    correctIndex: 2,
    explanation:
      "A valid test objective is to reduce risk and build confidence in quality. Testing cannot prove absence of defects or guarantee no future failures.",
  },
  {
    id: 162,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which of the following options shows an example of test activities that contribute to success?",
    options: [
      "Having testers involved during various SDLC activities",
      "Testers try not to disturb developers while coding",
      "Testers collaborating with end users to improve defect reports",
      "Certified testers design better test cases than non-certified testers",
    ],
    correctIndex: 0,
    explanation:
      "Testers involved across SDLC activities contribute to early defect detection and overall product quality.",
  },
  {
    id: 163,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which testing principle explains why running the same tests repeatedly becomes less effective over time?",
    options: [
      "Tests wear out (pesticide paradox)",
      "Absence-of-defects fallacy",
      "Defects cluster together",
      "Exhaustive testing is impossible",
    ],
    correctIndex: 0,
    explanation:
      "The pesticide paradox (tests wear out) principle states that if the same tests are run repeatedly, they stop finding new defects. Tests must be reviewed and updated regularly.",
  },
  {
    id: 164,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which of the following factors have a significant influence on the test approach for a project?",
    options: [
      "Requirements complexity and risk levels",
      "Developer preferences only",
      "Programming language only",
      "Hardware specifications only",
    ],
    correctIndex: 0,
    explanation:
      "The test approach is influenced by multiple factors including product complexity, risk levels, SDLC model, available resources, and stakeholder expectations.",
  },
  {
    id: 165,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which TWO of the following tasks belong mainly to a testing role?",
    options: [
      "Configure test environments and create the test plan",
      "Maintain the product backlog and design solutions to new requirements",
      "Write production code and deploy to production",
      "Manage project budget and hire developers",
    ],
    correctIndex: 0,
    explanation:
      "Configuring test environments and creating the test plan are core testing role responsibilities. Backlog management and solution design are typically developer or product owner responsibilities.",
  },
  {
    id: 166,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "Which of the following skills are most important for a tester to possess?",
    options: [
      "Attention to detail and strong communication skills",
      "Ability to code production features",
      "Database administration expertise",
      "Proficiency in graphic design",
    ],
    correctIndex: 0,
    explanation:
      "Testers need attention to detail to identify subtle defects and strong communication skills to report findings clearly and work effectively with teams.",
  },
  {
    id: 167,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "How does the whole team approach define the relationship between testers and business representatives?",
    options: [
      "Business representatives decide which automation tools to use",
      "Testers define the overall business strategy",
      "Business representatives are excluded from testing activities",
      "Testers help business representatives create acceptance tests",
    ],
    correctIndex: 3,
    explanation:
      "In the whole team approach, testers collaborate with business representatives to define and create acceptance tests, ensuring the product meets business needs.",
  },
  {
    id: 168,
    chapter: 1,
    section: "1.1",
    klevel: "K1",
    question:
      "The principle that for every SDLC activity there is a corresponding testing activity — in which development models does this apply?",
    options: [
      "Only sequential models like Waterfall",
      "Only iterative models like Scrum",
      "Only incremental models",
      "Sequential, incremental, and iterative models",
    ],
    correctIndex: 3,
    explanation:
      "This good testing practice applies across all SDLC models — sequential, incremental, and iterative — not just one specific model.",
  },
  {
    id: 169,
    chapter: 2,
    section: "2.1",
    klevel: "K1",
    question:
      "Which of the following is an example of a test-first development approach?",
    options: [
      "Behavior-Driven Development (BDD)",
      "Test Level Driven Development",
      "Function-Driven Development",
      "Performance-Driven Development",
    ],
    correctIndex: 0,
    explanation:
      "BDD is a test-first approach where tests (scenarios) are written before the code, driving the development based on expected behaviors.",
  },
  {
    id: 170,
    chapter: 2,
    section: "2.3",
    klevel: "K1",
    question:
      "Which type of maintenance change involves adapting software to a new operating environment or platform?",
    options: [
      "Perfective change",
      "Adaptive change",
      "Corrective change",
      "Preventive change",
    ],
    correctIndex: 1,
    explanation:
      "Adaptive maintenance involves modifying the software to work correctly in a changed or new environment, such as a new OS, hardware, or infrastructure.",
  },
  {
    id: 171,
    chapter: 3,
    section: "3.1",
    klevel: "K1",
    question:
      "Which of the following work products CANNOT be effectively examined by static testing?",
    options: [
      "A contract document",
      "A test plan",
      "Encrypted source code",
      "A test charter",
    ],
    correctIndex: 2,
    explanation:
      "Encrypted code cannot be reviewed by static testing because its content is not readable or understandable in its encrypted form.",
  },
  {
    id: 172,
    chapter: 3,
    section: "3.1",
    klevel: "K2",
    question:
      "Which statement CORRECTLY describes the relationship between static and dynamic testing?",
    options: [
      "The defect types found by static and dynamic testing are completely different with no overlap",
      "Dynamic testing finds all the same defects that static testing finds",
      "Dynamic testing finds some but not all of the defect types that static testing can find",
      "Static testing finds all the defects that dynamic testing finds",
    ],
    correctIndex: 2,
    explanation:
      "Some defect types (e.g., missing requirements, inconsistencies in design documents) can only be found by static testing and not by executing the software.",
  },
  {
    id: 173,
    chapter: 3,
    section: "3.2",
    klevel: "K2",
    question:
      "What is the correct sequence of activities in a formal review process?",
    options: [
      "Planning → Individual review → Initiation → Communication → Fixing",
      "Planning → Initiation → Individual review → Communication → Fixing",
      "Initiation → Planning → Individual review → Fixing → Communication",
      "Initiation → Planning → Communication → Individual review → Fixing",
    ],
    correctIndex: 1,
    explanation:
      "The formal review process follows: Planning → Review initiation → Individual review → Communication and analysis (review meeting) → Fixing and reporting.",
  },
  {
    id: 174,
    chapter: 3,
    section: "3.2",
    klevel: "K1",
    question:
      "Which artifact is typically produced as a documented outcome of a formal review?",
    options: [
      "A test script",
      "A review report listing defects and decisions",
      "Executable production code",
      "A deployment package",
    ],
    correctIndex: 1,
    explanation:
      "A formal review produces a review report that documents defects found, decisions made, and the status of the review. It is a key testware output of the review process.",
  },
  {
    id: 175,
    chapter: 4,
    section: "4.2",
    klevel: "K2",
    question:
      "A product gives discounts based on customer type. Which test technique is MOST appropriate to design test cases directly from this requirement?",
    options: [
      "White-box / statement coverage",
      "Black-box techniques such as equivalence partitioning",
      "Experience-based error guessing only",
      "Risk-based prioritisation",
    ],
    correctIndex: 1,
    explanation:
      "Requirements-based test design uses black-box techniques like equivalence partitioning and decision table testing, as they derive test cases from specifications without needing internal code knowledge.",
  },
  {
    id: 176,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question:
      "A discount system has partitions for: regular customer, student, and pensioner. Which TWO test data sets are needed to achieve full VALID equivalence partition coverage?",
    options: [
      "One regular customer and one student",
      "One student and one pensioner",
      "One regular customer and one pensioner",
      "One from each of the student and pensioner partitions (d and e)",
    ],
    correctIndex: 3,
    explanation:
      "To achieve full valid partition coverage, you need one representative value from each valid partition. If some partitions are already covered, only the missing ones (student and pensioner) need to be added.",
  },
  {
    id: 177,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question:
      "A numeric input accepts values from 0 to 2 inclusive. Which set of test values provides the HIGHEST boundary value analysis coverage?",
    options: [
      "–1 and 3 only",
      "0 and 2 only",
      "–1, 0, 2, and 3",
      "–2, 0, 2, and 4",
    ],
    correctIndex: 2,
    explanation:
      "Full 2-value BVA coverage for range 0–2 requires: –1 (just below min), 0 (min), 2 (max), 3 (just above max). This covers all four boundary points.",
  },
  {
    id: 178,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question:
      "A decision table for an insurance system already has three rules covered. Which additional test case would increase decision table coverage by covering a previously untested rule?",
    options: [
      "66-year-old, unregistered, no prior experience",
      "55-year-old, unregistered, 2 years experience",
      "19-year-old, registered, 5 years experience",
      "No additional test case is needed",
    ],
    correctIndex: 0,
    explanation:
      "The rule for an over-65, unregistered applicant with no experience was not yet covered by the existing tests. Adding this test case covers the previously untested rule.",
  },
  {
    id: 179,
    chapter: 4,
    section: "4.2",
    klevel: "K3",
    question:
      "For a state machine with 5 valid transitions, which test sequence achieves the highest valid transitions coverage?",
    options: [
      "Sequence a — covers 3 transitions",
      "Sequence b — covers 5 distinct valid transitions",
      "Sequence c — covers 4 transitions",
      "Sequence d — covers 2 transitions",
    ],
    correctIndex: 1,
    explanation:
      "Sequence b covers all 5 distinct valid transitions, giving the highest valid transition coverage of the available options.",
  },
  {
    id: 180,
    chapter: 4,
    section: "4.3",
    klevel: "K2",
    question:
      "Why is white-box testing particularly useful when specifications are vague or incomplete?",
    options: [
      "It is based on the internal code structure, so it does not rely on specifications",
      "Coverage is measurable and provides objective evidence of thoroughness",
      "It can find requirement omissions that black-box testing misses",
      "It can be performed during static analysis phases",
    ],
    correctIndex: 0,
    explanation:
      "White-box testing derives tests from the internal code structure, making it independent of the quality of the specification and useful when documentation is lacking.",
  },
  {
    id: 181,
    chapter: 4,
    section: "4.4",
    klevel: "K2",
    question:
      "During error guessing, which of the following types of defect would a tester NOT typically anticipate?",
    options: [
      "A misunderstood mathematical formula",
      "Incorrect exponent placement in a calculation",
      "A developer missing a training seminar",
      "Insufficient numerical precision in a result",
    ],
    correctIndex: 2,
    explanation:
      "Error guessing anticipates technical defect types such as logic errors, calculation mistakes, and precision issues. A developer missing a seminar is an organisational event unrelated to defect prediction.",
  },
  {
    id: 182,
    chapter: 4,
    section: "4.4",
    klevel: "K2",
    question:
      "Which of the following statements about exploratory testing is TRUE?",
    options: [
      "All test cases are designed and documented before the session begins",
      "Exploratory testing is limited to test execution only",
      "Exploratory testing predicts the exact defect count in advance",
      "Exploratory testing may use black-box techniques dynamically during execution",
    ],
    correctIndex: 3,
    explanation:
      "During exploratory testing, testers learn about the system and may apply techniques like equivalence partitioning or boundary value analysis dynamically as they explore.",
  },
  {
    id: 183,
    chapter: 4,
    section: "4.5",
    klevel: "K2",
    question:
      "Which collaborative practice in ATDD/BDD BEST helps teams build a shared understanding of requirements before development?",
    options: [
      "Planning poker estimation",
      "Peer code reviews",
      "Iteration planning meetings only",
      "Three-amigo conversations between business, developers, and testers",
    ],
    correctIndex: 3,
    explanation:
      "Three-amigo conversations (business, developer, tester) build shared understanding by discussing and clarifying requirements through conversation before any code is written.",
  },
  {
    id: 184,
    chapter: 4,
    section: "4.5",
    klevel: "K3",
    question:
      "A user story states: 'As a shopper, I want to filter products by price range so I can find products within my budget.' Which test case BEST validates the acceptance criteria?",
    options: [
      "Set price range to 90–100 and then enter a product priced at 110 to verify it is excluded",
      "Check the default product listing and add a product to the cart",
      "Change the currency from USD to EUR and verify the display",
      "Test the filter on different browsers for layout consistency",
    ],
    correctIndex: 0,
    explanation:
      "The test that sets a price range and then verifies a product outside that range is excluded directly validates the acceptance criteria of the price filter user story.",
  },
  {
    id: 185,
    chapter: 5,
    section: "5.1",
    klevel: "K3",
    question:
      "Using the three-point (PERT) estimation technique with an optimistic estimate of 1 hour, most likely of 3 hours, and pessimistic of 8 hours per test case — what is the total estimate for 4 test cases?",
    options: ["14 hours", "3.5 hours", "16 hours", "12 hours"],
    correctIndex: 0,
    explanation:
      "PERT per test case = (1 + 4×3 + 8) / 6 = 21/6 = 3.5 hours. For 4 test cases: 3.5 × 4 = 14 hours.",
  },
  {
    id: 186,
    chapter: 5,
    section: "5.1",
    klevel: "K3",
    question:
      "When prioritising test cases by additional coverage contribution, which test case should be executed LAST?",
    options: [
      "TC1 — covers 5 new requirements",
      "TC2 — covers only requirements already covered by TC1 and TC3",
      "TC3 — covers 4 new requirements",
      "TC4 — covers 3 new requirements",
    ],
    correctIndex: 1,
    explanation:
      "TC2 contributes the least additional coverage once TC1, TC3, and TC4 have been executed. Test cases are sequenced by descending additional coverage contribution.",
  },
  {
    id: 187,
    chapter: 5,
    section: "5.1",
    klevel: "K2",
    question:
      "How do testing quadrants (Agile Testing Quadrants) benefit a project team?",
    options: [
      "They divide testing activities into test levels",
      "They provide a formula to assess coverage metrics",
      "They help stakeholders and the team understand the different types and purposes of testing",
      "They classify the psychology of testing",
    ],
    correctIndex: 2,
    explanation:
      "Agile Testing Quadrants provide a framework that helps teams and stakeholders understand different test types (business-facing vs technology-facing, supporting the team vs critiquing the product).",
  },
  {
    id: 188,
    chapter: 5,
    section: "5.2",
    klevel: "K1",
    question:
      "If the risk level is $1,000 and the likelihood of failure is 50%, what is the calculated risk impact (exposure)?",
    options: ["$500", "$2,000", "$50,000", "$200"],
    correctIndex: 1,
    explanation:
      "Risk exposure = risk level / likelihood = $1,000 / 0.5 = $2,000. This represents the potential financial impact if the risk materialises.",
  },
  {
    id: 189,
    chapter: 5,
    section: "5.2",
    klevel: "K2",
    question:
      "Which of the following are examples of PRODUCT risks (as opposed to project risks)?",
    options: [
      "Scope creep and cost-cutting",
      "Poor software architecture and excessively long response times",
      "Poor tool support and team conflicts",
      "Missing deadlines and budget overruns",
    ],
    correctIndex: 1,
    explanation:
      "Product risks relate to the quality of the software itself — e.g., poor architecture (structural defect risk) and excessive response times (performance failure risk). Scope creep and budget issues are project risks.",
  },
  {
    id: 190,
    chapter: 5,
    section: "5.3",
    klevel: "K2",
    question:
      "Which of the following is NOT a valid purpose of a test progress report?",
    options: [
      "To track testing progress against the plan",
      "To provide a summary of test execution results",
      "To provide step-by-step instructions to reproduce each specific defect",
      "To provide information for future test planning improvements",
    ],
    correctIndex: 2,
    explanation:
      "Step-by-step reproduction instructions for individual defects belong in defect reports, not in a test progress or summary report. The test report focuses on overall progress and metrics.",
  },
  {
    id: 191,
    chapter: 6,
    section: "6.1",
    klevel: "K1",
    question:
      "After a major incident, the team needed to reconstruct the exact set of files included in a previous software release. Which practice made this possible?",
    options: [
      "Risk management planning",
      "Test monitoring and control",
      "Whole team approach",
      "Configuration management",
    ],
    correctIndex: 3,
    explanation:
      "Configuration management tracks and controls versions of all artifacts, enabling teams to reconstruct any previous release by identifying the exact versions of files included.",
  },
  {
    id: 192,
    chapter: 6,
    section: "6.1",
    klevel: "K2",
    question:
      "A defect report is reviewed and found to be missing a critical field. Which field is most likely absent that affects fix prioritisation?",
    options: [
      "Severity rating",
      "Priority rating",
      "Expected result description",
      "Test environment details",
    ],
    correctIndex: 1,
    explanation:
      "Priority indicates the urgency of fixing the defect from a business perspective and is essential for scheduling. Without it, the development team cannot correctly sequence the fix.",
  },
  {
    id: 193,
    chapter: 6,
    section: "6.1",
    klevel: "K2",
    question:
      "Which tool categories BEST facilitate automated test execution in a CI/CD pipeline?",
    options: [
      "Test management tools and static analysis tools",
      "DevOps tooling and non-functional test execution tools",
      "Requirements management tools and defect trackers",
      "Static analysis tools and defect management tools",
    ],
    correctIndex: 1,
    explanation:
      "DevOps tooling (CI/CD automation, build pipelines) and non-functional test execution tools (performance, security) are the categories that best support automated execution in a pipeline.",
  },
  {
    id: 194,
    chapter: 6,
    section: "6.2",
    klevel: "K1",
    question:
      "Which of the following is a recognised RISK of introducing test automation into a project?",
    options: [
      "It will find more defects than manual testing",
      "It provides overly complex metrics",
      "Incompatibility of the tool with the development platform or environment",
      "Reduced test execution time",
    ],
    correctIndex: 2,
    explanation:
      "A significant risk when introducing automation is that the chosen tool may be incompatible with the development platform, language, or CI/CD infrastructure, preventing effective integration.",
  },
  {
    id: 195,
    chapter: 1,
    section: "1.2",
    klevel: "K2",
    question:
      "Which of the following BEST explains the relationship between errors, defects, and failures in software testing?",
    options: [
      "An error causes a failure which then causes a defect",
      "A defect is the same thing as a failure",
      "A human error introduces a defect into the code; when that defect is executed it may cause a failure",
      "Failures are always caused by external factors rather than defects",
    ],
    correctIndex: 2,
    explanation:
      "The chain is: a human makes an error → this introduces a defect (bug) into the work product → when the defective code is executed, it may cause a failure (observable deviation from expected behavior).",
  },
  {
    id: 196,
    chapter: 1,
    section: "1.4",
    klevel: "K2",
    question:
      "Which of the following BEST describes the task performed during the test analysis activity?",
    options: [
      "Creating test scripts and setting up the test environment",
      "Analysing the test basis to identify testable features and define test conditions",
      "Executing test cases and logging actual results",
      "Producing the test completion report and archiving testware",
    ],
    correctIndex: 1,
    explanation:
      "Test analysis involves examining the test basis (requirements, designs, code) to identify what needs to be tested and to define test conditions — answering 'what to test?'.",
  },
  {
    id: 197,
    chapter: 2,
    section: "2.1",
    klevel: "K2",
    question:
      "In a DevOps environment, which testing practice is MOST essential to support rapid and frequent software releases?",
    options: [
      "Manual regression testing performed after every commit",
      "A fixed testing phase at the end of each quarter",
      "Continuous automated testing integrated into the CI/CD pipeline",
      "Acceptance testing performed only by end users before deployment",
    ],
    correctIndex: 2,
    explanation:
      "In DevOps, continuous automated testing integrated into CI/CD enables rapid feedback on every commit, allowing teams to release frequently with confidence.",
  },
  {
    id: 198,
    chapter: 3,
    section: "3.2",
    klevel: "K2",
    question:
      "In a formal review, a colleague reviews the document independently using a checklist before the review meeting. What activity is this?",
    options: [
      "Review planning",
      "Review initiation",
      "Individual review (preparation)",
      "Communication and analysis",
    ],
    correctIndex: 2,
    explanation:
      "Individual review (preparation) is the activity where reviewers independently examine the work product — often using checklists — before the group review meeting takes place.",
  },
  {
    id: 199,
    chapter: 4,
    section: "4.1",
    klevel: "K1",
    question:
      "Which of the following statements CORRECTLY distinguishes black-box from white-box test techniques?",
    options: [
      "Black-box techniques require knowledge of the internal code; white-box techniques do not",
      "Black-box techniques derive tests from the specification; white-box techniques derive tests from the internal structure",
      "White-box techniques are only used at component level; black-box at system level",
      "Black-box and white-box techniques are interchangeable terms",
    ],
    correctIndex: 1,
    explanation:
      "Black-box techniques derive test cases from external specifications without code knowledge. White-box techniques derive test cases from the internal code structure and logic.",
  },
  {
    id: 200,
    chapter: 5,
    section: "5.1",
    klevel: "K2",
    question:
      "Which of the following BEST defines valid exit criteria for a testing phase?",
    options: [
      "The project budget has been approved by stakeholders",
      "The budget has been fully spent and time has run out",
      "The test basis documentation has been made available to testers",
      "80% statement coverage has been achieved and no critical defects remain open",
    ],
    correctIndex: 3,
    explanation:
      "Exit criteria should be measurable quality conditions such as achieving a coverage target and having no open critical defects — not resource exhaustion or administrative approvals.",
  },
];
