# Glossary

>The following are specialized terms that users of TAO may frequently run into while using the program to author tests, administrate them, or generate assessment reports.

**A**

**Adaptive Item:** An [Item][i_004] that changes either its interaction, its scoring, or both following unsatisfactory attempts by the Test-taker to provide an correct response. The adaptivity usually is used to adapt assessment questions into learning experiences for the candidate, guiding that person through the Item while scoring performance. Advanced.

**Adaptive Test:** A Test that varies presentation of [Items][i_0004] based on Test-taker response. Generally achieved through the use of pre-conditions and branching. Advanced.

**Assessment Variable:** Technical term for the final score assigned to a Test-taker's performance in an [Item][i_0004] Session or a [Test][i_0006] Session.

**Attempt:** A singular candidate interaction with an [Item][i_0004] that possibly assigns values to or updates an associated Response Variable.

**Authoring System:** A system used by authors to create and edit [Items][i_0004] and [Tests][i_0006]. [TAO][i_0001] is an example of an authoring system.

**B**

**Base-type:** A predefined data type used to define a value set from which Item Variables are drawn.

**Basic Item:** An [Item][i_0004] that contains one and only one [Interaction][i_0005].

**C**

![Glossary 1][media_bma189]

**Candidate Session:** The time during which the candidate or Test-taker is interacting with an [Assessment Item][i_0004] as part of an Attempt. An attempt may extend across more than one candidate session (such as when a Test-taker terminates one candidate session to move on from a difficult-to-answer question to do other Items first, effectively suspending the Attempt, and then comes back to start another candidate session in order to finish that Attempt before the exam ends).

**Cloning Engine:** A system for creating multiple similar items (or Item Clones) from an Item Template. [TAO][i_0001] uses a cloning engine to assist users in authoring Items.

**Composite Item:** An [Item][i_0004] that contains more than one [Interaction][i_0005].

**Container:** An aggregate data type that can contain multiple values of unmodified Base-types, or even be empty.

**D**

[**Delivery System:**][i_0007] A system that administers and delivers assessments to Test-takers through the use of a delivery engine, or a process that coordinates both Item delivery and [response evaluation (scoring)][i_0018] and feedback.

**E**

**F**

**Feedback:** Any material presented to the candidate as a result of an outcome variable meeting or exceeding particular conditions. This can include integrated, [modal][i_0019], and test feedback.

**G**

**H**

**I**

[**Interaction:**][i_0005] The part of an [Item][i_0004] that allows the candidate to interact in an assessment, selecting or constructing a response.

**Integrated Feedback:** Feedback that is integrated into an [Item][i_0004]. Unlike with [Modal Feedback][i_0019], Test-takers may update their responses while viewing Integrated Feedback.

[**Item:**][i_0004] The smallest exchangeable object in an assessment. An item is more than a 'Question' in that it contains also the contextual instructions, the processing to be applied to the Test-taker's response(s), and any Feedback (including hints and solutions). May also be called Assessment Item.

**Item Clone:** An [Item][i_0004] that appears similar to others created by an Item Template. These are identical except for designated variables called Template Variables.

**Item Fragment:** Part of an [Item][i_0004] managed independently from other parts. If it introduces all Items in a set, such a fragment is often referred to as a set leader.

**Item Session:** The accumulation of all Test-taker Attempts at a particular [Item][i_0004].

**Item Set:** A group of [Items][i_0004] that share common characteristics. 

**Item Template:** A template used for producing large numbers of similar [Items][i_0004], often called Cloned Items. These will have one or more designated Template Variables, and will be governed by a set of Template processing rules that are assigned these values. These may be produced by a special purpose Cloning Engine, such as [TAO][i_0001].

**Item Variable:** A variable that records Test-taker responses and any outcomes assigned during [response processing][i_0018] during an Item Session. As a special kind of Assessment Variable, Item Variables are also used to define Item Templates.

**J**

**K**

**L**

**M**

**Material:** All static text, image, or media objects that are intended for the Test-taker rather than for being interpreted by a processing system. [Interactions][i_0005] are not considered as material.

![Glossary 2][media_bma190]

[**Modal Feedback:**][i_0019] Feedback that is not integrated into an [Item's][i_0004] body during presentation to the Test-taker.

**Multiple Response:** A Response Variable that serves as a Container for multiple values taken from a value set defined by a Base-type. These are processed as an unordered list, and may be empty.

**N**

**Non-adaptive Item:** An [Item][i_0004] that does not change following attempts made by a Test-taker.

**O**

**Object Bank:** A collection of objects used during an assessment, including [Items][i_0004], Item Fragments, or Test parts.

**Ordered Response:** A Response Variable that is a Container for multiple values taken from a value set defined by a Base-type. These are processed as an ordered list (sequence) of values, but may be empty.

**Outcome:** The result of an [Assessment Test][i_0006] or [Item][i_0004]. These are represented by one or more Outcome Variables.

**Outcome Processing:** The process that aggregates values of [Item][i_0004] Outcomes (or Responses) to make [Test][i_0006] outcomes.

**Outcome Variable:** Variables taken from outcome declarations. Values are set either from a default given within the declaration or by a response rule encountered during [Response Processing (for Item outcomes)][i_0018] or Outcome Processing (for Test outcomes).

**P**

**Pool:** A special type of Object Bank that includes related [Items][i_0004] transported together with metadata that describes the group as a whole.

**Q**

**R**

**Response:** Data provided by the Test-taker through interaction with an [Item][i_0004] or Item Part. Associated values are represented as Response Variables.

[**Response Processing:**][i_0018] The process by which Response Variable values are scored and Item Outcome values are assigned.

**Response Variable:** Variables taken from response declarations and bound to [Interactions][] in the [Item body][i_0004], they record the candidate's responses.

**S**

**Scoring Engine:** The part of the assessment system that process Test-taker responses and scores them based on [Response Processing][i_0018] rules.

**Single Response:** A Response Variable that takes a single value from the value set defined by a Base-type.

**T**

**Test Feedback:** Feedback presented to a Test-taker conditionally based on final score values.

**Template Processing:** Rules used to set values for Template Variables. These are typically set by a random process that selects a specific clone to be used for an Item Session.

**Template Variable:** Variables taken from template declarations that record values that render an item template unique. These values determine the clone within a set defined by an Item Template that will be used for a given Item Session.

**Test (or Assessment):** An organized collection of [Items][i_0004] that are used to measure performance of a candidate with respect to that person's level of mastery of a given subject. Assessments contain all instructions required for navigation through a sequence of Items. They also calculate the final score earned by the Test-taker.

**Test Fragment:** Part of a [Test][i_0006] managed independently.

**Test Report:** A report describing a [Test][i_0006] Session.

**Test Session:** The interaction of a candidate with a [Test][i_0006] and the [Items][i_0004] it contains.

![Glossary 3][PhotobyJuanAndracaSanchezWikimediaCommons]

**Test-taker (or Candidate):** A person that participates in a [Test][i_0006], assessment or exam by answering questions.

**Time Dependent Item:** An [Item][i_0004] that records the accumulated elapsed time for a Candidate Session in a Response Variable, used during [Response Processing][i_0018].

**Time Independent Item:** An Item that does not use the accumulated elapsed time during [Response Processing][i_0018].

**U**

**V**

**W**

**X**

**Y**

**Z**
