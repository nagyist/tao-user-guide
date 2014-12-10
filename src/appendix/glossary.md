# Glossary

>The following are specialized terms that users of TAO may frequently run into while using the program to author tests, administrate them, or generate assessment reports.

**A**

**Adaptive Item:** An Item that changes either its interaction, its scoring, or both following unsatisfactory attempts by the test-taker to provide an correct response. The adaptivity usually is used to adapt assessment questions into learning experiences for the candidate, guiding that person through the item while scoring performance. Advanced.

**Adaptive Test:** A Test that varies presentation of Items based on Test-taker response. Generally achieved through the use of pre-conditions and branching. Advanced.

**Assessment Variable:** Technical term for the final score assigned to a Test-taker's performance in an Item Session or a Test Session.

**Attempt:** A singular candidate interaction with an Item that possibly assigns values to or updates an associated Response Variable.

**Authoring System:** A system used by authors to create and edit Items and Tests. TAO is an example of an authoring system.

**B**

**Base-type:** A predefined data type used to define a value set from which Item Variables are drawn.

**Basic Item:** An Item that contains one and only one Interaction.

**C**

**Candidate Session:** The time during which the candidate is interacting with an Assessment Item as part of an Attempt. An attempt may extend across more than one candidate session (such as when a test-taker terminates one candidate session to move on from a difficult-to-answer question to do other Items first, effectively suspending the Attempt, and then comes back to start another candidate session in order to finish that Attempt before the exam ends).

**Cloning Engine:** A system for creating multiple similar items (or Item Clones) from an Item Template. TAO uses a cloning engine to assist users in authoring Items.

**Composite Item:** An Item that contains more than one Interaction.

**Container:** An aggregate data type that can contain multiple values of unmodified Base-types, or even be empty.

**D**

**Delivery System:** A system that administers and delivers assessments to test-takers through the use of a delivery engine, or a process that coordinates both Item delivery and response evaluation (scoring) and feedback.

**E**

**F**

**Feedback:** Any material presented to the candidate as a result of an outcome variable meeting or exceeding particular conditions. This can include integrated, modal, and test feedback.

**G**

**H**

**I**

**Interaction:** The part of an Item that allows the candidate to interact in an assessment, selecting or constructing a response.

**Integrated Feedback:** Feedback that is integrated into an Item. Unlike with Modal Feedback, test-takers may update their responses while viewing Integrated Feedback.

**Item:** The smallest exchangeable object in an assessment. An item is more than a 'Question' in that it contains also the contextual instructions, the processing to be applied to the test-taker's response(s), and any Feedback (including hints and solutions). May also be called assessment item.

**Item Clone:** An Item that appears similar to others created by an Item Template. These are identical except for designated variables called Template Variables.

**Item Fragment:** Part of an Item managed independently from other parts. If it introduces all items in a set, such a fragment is often referred to as a set leader.

**Item Session:** The accumulation of all test-taker Attempts at a particular Item.

**Item Set:** A group of items that share common characteristics. 

**Item Template:** A template used for producing large numbers of similar Items, often called Cloned Items. These will have one or more designated Template Variables, and will be governed by a set of Template processing rules that are assigned these values. These may be produced by a special purpose Cloning Engine, such as TAO.

**Item Variable:** A variable that records test-taker responses and any outcomes assigned during response processing during an Item Session. As a special kind of Assessment Variable, Item Variables are also used to define Item Templates.

**J**

**K**

**L**

**M**

**Material:** All static text, image, or media objects that are intended for the test-taker rather than for being interpreted by a processing system. Interactions are not considered as material.

**Modal Feedback:** Feedback that is not integrated into an Item's body during presentation to the test-taker.

**Multiple Response:** A Response Variable that serves as a Container for multiple values taken from a value set defined by a Base-type. These are processed as an unordered list, and may be empty.

**N**

**Non-adaptive Item:** An Item that does not change following attempts made by a test-taker.

**O**

**Object Bank:** A collection of objects used during an assessment, including Items, Item Fragments, or Test parts.

**Ordered Response:** A Response Variable that is a Container for multiple values taken from a value set defined by a Base-type. These are processed as an ordered list (sequence) of values, but may be empty.

**Outcome:** The result of an Assessment Test or Item. These are represented by one or more Outcome Variables.

**Outcome Processing:** The process that aggregates values of item Outcomes (or Responses) to make test outcomes.

**Outcome Variable:** Variables taken from outcome declarations. Values are set either from a default given within the declaration or by a response rule encountered during Response Processing (for Item outcomes) or Outcome Processing (for Test outcomes).

**P**

**Pool:** A special type of Object Bank that includes related items transported together with metadata that describes the group as a whole.

**Q**

**R**

**Response:** Data provided by the Test-taker through interaction with an Item or Item Part. Associated values are represented as Response Variables.

**Response Processing:** The process by which Response Variable values are scored and Item Outcome values are assigned.

**Response Variable:** Variables taken from response declarations and bound to Interactions in the Item body, they record the candidate's responses.

**S**

**Scoring Engine:** The part of the assessment system that process test-taker responses and scores them based on Response Processing rules.

**Single Response:** A Response Variable that takes a single value from the value set defined by a Base-type.

**T**

**Test Feedback:** Feedback presented to a test-taker conditionally based on final score values.

**Template Processing:** Rules used to set values for Template Variables. These are typically set by a random process that selects a specific clone to be used for an Item Session.

**Template Variable:** Variables taken from template declarations that record values that render an item template unique. These values determine the clone within a set defined by an Item Template that will be used for a given Item Session.

**Test (or Assessment):** An organized collection of Items that are used to measure performance of a candidate with respect to that person's level of mastery of a given subject. Assessment tests contain all instructions required for navigation through a sequence of Items. They also calculate the final score earned by the test-taker.

**Test Fragment:** Part of a test managed independently.

**Test Report:** A report describing a Test Session.

**Test Session:** The interaction of a candidate with a Test and the items it contains.

**Test-taker (or Candidate):** A person that participates in a test, assessment or exam by answering questions.

**Time Dependent Item:** An Item that records the accumulated elapsed time for a Candidate Session in a Response Variable, used during Response Processing.

**Time Independent Item:** An Item that does not use the accumulated elapsed time during Response Processing.

**U**

**V**

**W**

**X**

**Y**

**Z**
