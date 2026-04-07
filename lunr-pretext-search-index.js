var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec11-SystemLinearEquations",
  "level": "1",
  "url": "sec11-SystemLinearEquations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   Back in previous algebra classes, you probably learned how to solve system of linear equations algebraically using methods like substitution and elimination. While these methods are effective for small systems, they quickly become unwieldy as there are more variables and\/or more equations.  As our introductory lesson to linear algebra, we will learn a more efficient method for solving systems of linear equations using elementary row operations on augmented matrices .    After this section, students will be able to:     construct an augmented matrix from a system of linear equations (and vice versa);    use elementary row operations on an augmented matrix to solve a system of linear equations;    distinguish between systems with exactly one solution , infinitely many solutions , and no solution .    express the solution set of a system of linear equations with infinitely many solutions in parametric form .        Recall we learned solving a (system of) linear equation(s) before. Let's try solving some of them.    The equation is a linear equation. What is the solution(s) to this equation?   It is a system of linear equations. It's just a boring one because there is only one variable and only one equation.  It has one solution,      The equation is also a linear equation. What is the solution(s) to this equation?   This system has only one equation but it has two variables. It has infinitely many solutions!  Every point on the line is a solution. Some specific solutions are and .     The two linear equations and form a system of linear equations. What is the solution(s) to this system of equations?   This system has two equations but only one variable.  It doesn't have any solutions! It isn't possible for to be both and .      Solving Systems of Linear Equations  The type of systems of linear equations you may encounter a lot before may look like this: You probably learned the two most common ways to solve these equations.  The first method is called substitution . In this method, you will   solve for one variable in terms of the other (using either equation);    substitute the resulting expression in the other equation;    substitute the resulting value into the expression from Step 1 (or into either equation) to get the second value.   Let's use this method to solve this system of linear equations!  If we solve the first equation for , we get Then we can substitute this into the second equation to get Then we can simplify and solve for and get a specific number: Then we can substitute this value of into to find the value of . So the solution to this system of linear equations is .   NOTE: This method can be generalized and used for larger linear systems (more equations and\/or more variables). But the next method is much better for larger systems.  You may have called the next method something like the \"subtraction method\" or the \"elimination method\". In this method you perform \" elementary operations \" on the equations until you get a system that is super easy to solve.  The elementary operations you can choose from are:   swap two equations;    multiply an equation by a constant (on both sides);    add a multiple of one equation to the other equation.     Let's use the elementary operations to solve the same system of linear equations as before:   First, we will add times the first equation to the second equation (replacing the second equation) to get Next, we will multiply both sides of the second equation by to get Then we will add times the second equation to the first equation (replacing the first equation) to get Finally, we will multiply the first equation by to get Notice that we have now turned our system of equations into a new system of equations that is absurdly easy to solve. It literally just says the answer is .  But why does the method of elementary operations work? This method works because none of the three elementary operations changes the solution set of the system of equations . At each step, the set of solutions of the system before you perform the elementary operation is exactly the same as the solution set after you perform the elementary operation.   But Richard... Why don't the elementary operations change the solution set of a system of equations?  Instead of giving a formal proof for all cases (which you can find in the book if you want), Richard will explain why it works in the case of a system of two equations with two variables:   It is obvious that swapping equations clearly can't change the solution set. It makes no difference what order the equations are listed in.    It is also pretty clear that multiplying both sides of an equation by a non-zero number will not change the solution set.  First, notice that if is a solution before , then it is a solution after . That is, if , then it is also true that for any non-zero constant . This is because when two numbers are equal, you get the same answer when you multiply each of them by the same number.  Second, notice that if is a solution after , then it is a solution before . Since the number is not zero, exists and is not zero. So if , then it is also true that (you can just multiply both sides by !).    The least obvious one is the elementary operation of adding a multiple of one equation to another equation (and replacing the equation). We can think of this elementary operation as doing two steps:   multiply one equation by a non-zero constant, and    add one equation to another equation (and replace that equation with the sum).   The first step is just the operation of multiplying an equation by a non-zero constant, which we already know does not change the solution set. So we just need to demonstrate that adding one equation to another (and replacing the second equation with the sum) does not change the solution set.  First, we need to show that anything that was a solution before is still a solution after . Consider the system of linear equations Suppose that and (in other words suppose is a solution). We want to show that is still a solution to the system Since we already know that is a solution to the first equation, we just need to show it is a solution to the second equation.  Since the number is equal to the number . If we add to both of them, we get the same thing. So we get And since we know that , we can substitute to get Do some simplifying and factoring on the left side and we get This proves is indeed a solution to the second equation!  Second, we want to show that if is a solution after then it is a solution before . But really we already have! That is because we can get from the after system to the before system by multiplying the first equation by and adding it to the second equation. So going backwards just involves doing the exact same thing as going forward (just after multiplying by a non-zero constant which we know always works!).      But Richard... Why bother showing the solution sets are the same before and after, and vice versa?  That is because this establishes that the elementary operations are reversible ! Then we can call the two systems \" equivalent \" in the sense that they have the same solution set.  To give you an example of non-reversible operations, consider the operation of \"squaring both sides of an equation\".  Let's say we have an equation . Obviously, there is only one solution to this equation, which is . If we apply this operation, then we get the equation . Clearly, is still a solution to this new equation. Hence, in this operation, the solution before is still a solution after .  Yet, the new equation has another solution, which is . This isn't a solution to the original equation, and hence, the solution after may not be a solution before .  This shows that this operation is not reversible and hence the two equations are not equivalent (in the sense that they don't have the same solution set).     Use the elementary operations to solve the following system of linear equations:    There are a lot of ways to do this. This is one:  Step 1: Multiply the second equation by to get   Step 2: Add times the first equation to the second equation (replacing the second equation) to get   Step 3: Multiply the second equation by to get   Step 4: Add times the second equation to the first equation (replacing the first equation) to get   Step 5: Multiply the first equation by to get   And that's our solution, !      Augmented Matrices and Elementary Operations  Basically, a matrix is just an array of numbers inside of a set of brackets. For example, is a matrix since there are rows and columns.  We will learn a lot more about matrices this term! But first we will learn about a kind of \"fake\" matrix called an augmented matrix . An augmented matrix is compressed version of a matrix equation which we will learn about soon.  For any system of equations we can make the associated augmented matrix by basically writing down the equation inside of a big set of brackets and erasing all of the variables and addition\/subtraction signs and replacing all of the equal signs with a big vertical line (some people used a dashed line).  For example, we can convert the following system of linear equations into its associated augmented matrix as The part of the augmented matrix to the left of the vertical line(s) is called the coefficient matrix (the coefficient part of the system) and the part to the right of the vertical line(s) is called the constant matrix (the constant part of the system).  When you write a system of linear equations as an augmented matrix, you can do the exact same operations to your equations except now you do them to the rows of the matrix (each row is just a compressed version of an equation!). So the three elementary row operations are:   swap two rows;    multiply a row by a non-zero constant;    add a multiple of a row to another row (replacing that row).   You can solve a system of equations by (1) writing it as an augmented matrix, (2) performing elementary row operations until it is in a \"nice\" form, and then (3) writing this nice version as a system of linear equations (and reading off the answer).  Let's solve the previous system of linear equations using the augmented matrix. Our augmented matrix is We can add times Row 1 to Row 2 (replacing Row 2) to get Then we can multiply Row 2 by to get And then add times Row 2 to Row 1 (replacing Row 1) to get Finally, we can multiply Row 1 by to get Now if we convert this back to a system of linear equations, we get And it's already solved!   Solve the following system of linear equations (again). This time make the augmented matrix and use elementary row operations to solve it.   The augmented matrix for this system is There are a lot of ways to solve the system. Here is one:  Step 1: Multiply Row 2 by to get   Step 2: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 1 (replacing Row 1) to get   Step 5: Multiply Row 1 by to get   Then we can write this as a system of equations again and get And that's our solution, !      How many solutions can a linear system have?  The system of linear equations in the previous example has exactly one solution (which we found in three different ways!) but not all linear systems have exactly one solution. Some do not have any solutions and some have infinitely many solutions.  Let's solve the following system of linear equations using the augmented matrix and elementary row operations: The augmented matrix is Let's first add times Row 1 to Row 2 (replacing Row 2). We get Now we can write this as a system of linear equations, and we get But... is definitely NOT equal to . So this system has no solution!  Notice that both of the equations in our original system are lines (that's where the \"linear\" comes from!). Richard graphed these two lines and they look like this:    The line (in blue) and (in red)   These lines are parallel and they don't intersect!  When you have three variables then each equation is a plane, so you get no solutions when one of the planes is parallel to (but not equal to) the other. And the same kind of thing happens in higher dimensions except that it would blow your mind if you tried to see it!   What happens in your augmented matrix when you have no solution? You zero out a row of coefficients using elementary operations BUT the constant in that row is NOT zero.  Next, let's solve this system of linear equations using the augmented matrix and elementary row operations: The augmented matrix is This time, we will add times Row 1 to Row 2 (replacing Row 2), and we get Now we can write this as a system of linear equations. We get This time, the second equation is true. IS definitely equal to . Notice that our second equation is true no matter what and are! That means that any that satisfies the first equation will satisfy both equations. So the solution is every point on the line .  If you were to graph the two original equations, this time you would find that they were actually the exact same line!  When you have infinitely many solutions, you will want to write the solution set in parametric form . The way to do this (for a two-variable system) is to solve for one variable in terms of the other and then write a general form for any solution . For this example, we can solve for in terms of and get So for any value of , we get the solution . In this case, the is called the parameter .  We can pick any value of  we want and plug it into that formula to get a solution to the system. For example, if Richard picks , then he will get the solution .   Notation Warning!  Your textbook likes to introduce a new letter to use for the parameter and the homework system will do this as well. For example, in this case they would probably use and write the solutions as This is unnecessary but Richard will do it from time to time just to match what you will see from the textbook and the homework system.   Sometimes we may need more than one parameter to describe all of the solutions to a system of equations. But that is a story for another day (that day will be Thursday).   What happens in your augmented matrix when you have infinitely many solutions? You zero out a row of coefficients using elementary operations AND the constant in that row is also zero.    Existence and Uniqueness Questions  Recall that a system of linear equations can have either no solution, exactly one solution, or infinitely many solutions. We ask two questions to determine which of these three cases we are in:   Is the system consistent ? That is, does a solution exist ?    If a solution exists, is it the only one? That is, is the solution unique ?     Right now, we can answer these questions by actually solving the system of equations and seeing what happens. In , we will learn how to answer these questions by using only the augmented matrix and elementary row operations without having to write the system of equations out.    Some Exercises for This Section   Richard included some practice problems that cover some main concepts in this section. You don't need to turn it in, but you are highly encouraged to work on this with your classmates. The problems here may end up being in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  Only the final answers are included to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.    The following matrix is the augmented matrix of a linear system. State in words the next two elementary row operations that should be performed in the process of solving the system.      The following matrix is the augmented matrix of a linear system. Continue the appropriate row operations and describe the solution set of the original system.            In the following exercises, solve the system of linear equations.           Verify that the solution you found to Problem 11 is correct by substituting the values you obtained back into the original equations.    Determine if the system is consistent. Do not completely solve the system.      Determine the value(s) of such that the matrix is the augmented matrix of a consistent linear system.      Recall a consistent system means a solution exists. So let's pretent is just a number and try to solve the system of linear equations using the elementary row operations.    There are many ways to solve this system. Here is one way of doing so:  Step 1: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 2: Multiply Row 2 by to get   Step 3: Add times Row 2 to Row 1 (replacing Row 1) to get             In the following exercises, mark each statement True or False ( T\/F ). Justify each answer.    ( T\/F ) Every elementary row operation is reversible.    ( T\/F ) A matrix has six rows.    ( T\/F ) The solution set of a linear system involving variables is a list of numbers that makes each equation in the system a true statement when the values are substituted for respectively.    ( T\/F ) Two fundamental questions about a linear system involve existence and uniqueness.     Find an equation involving , , and that makes this augmented matrix correspond to a consistent system:     "
},
{
  "id": "sec11-SystemLinearEquations-2-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#sec11-SystemLinearEquations-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations augmented matrices "
},
{
  "id": "sec11-SystemLinearEquations-2-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#sec11-SystemLinearEquations-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     construct an augmented matrix from a system of linear equations (and vice versa);    use elementary row operations on an augmented matrix to solve a system of linear equations;    distinguish between systems with exactly one solution , infinitely many solutions , and no solution .    express the solution set of a system of linear equations with infinitely many solutions in parametric form .    "
},
{
  "id": "sec11-SystemLinearEquations-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#sec11-SystemLinearEquations-3",
  "type": "Investigation",
  "number": "1.1.1",
  "title": "",
  "body": "  Recall we learned solving a (system of) linear equation(s) before. Let's try solving some of them.    The equation is a linear equation. What is the solution(s) to this equation?   It is a system of linear equations. It's just a boring one because there is only one variable and only one equation.  It has one solution,      The equation is also a linear equation. What is the solution(s) to this equation?   This system has only one equation but it has two variables. It has infinitely many solutions!  Every point on the line is a solution. Some specific solutions are and .     The two linear equations and form a system of linear equations. What is the solution(s) to this system of equations?   This system has two equations but only one variable.  It doesn't have any solutions! It isn't possible for to be both and .    "
},
{
  "id": "subsec-SolvingSystemsEquations-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-SolvingSystemsEquations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitution "
},
{
  "id": "subsec-SolvingSystemsEquations-11",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-SolvingSystemsEquations-11",
  "type": "Note",
  "number": "1.1.1",
  "title": "But Richard... Why don’t the elementary operations change the solution set of a system of equations?",
  "body": " But Richard... Why don't the elementary operations change the solution set of a system of equations?  Instead of giving a formal proof for all cases (which you can find in the book if you want), Richard will explain why it works in the case of a system of two equations with two variables:   It is obvious that swapping equations clearly can't change the solution set. It makes no difference what order the equations are listed in.    It is also pretty clear that multiplying both sides of an equation by a non-zero number will not change the solution set.  First, notice that if is a solution before , then it is a solution after . That is, if , then it is also true that for any non-zero constant . This is because when two numbers are equal, you get the same answer when you multiply each of them by the same number.  Second, notice that if is a solution after , then it is a solution before . Since the number is not zero, exists and is not zero. So if , then it is also true that (you can just multiply both sides by !).    The least obvious one is the elementary operation of adding a multiple of one equation to another equation (and replacing the equation). We can think of this elementary operation as doing two steps:   multiply one equation by a non-zero constant, and    add one equation to another equation (and replace that equation with the sum).   The first step is just the operation of multiplying an equation by a non-zero constant, which we already know does not change the solution set. So we just need to demonstrate that adding one equation to another (and replacing the second equation with the sum) does not change the solution set.  First, we need to show that anything that was a solution before is still a solution after . Consider the system of linear equations Suppose that and (in other words suppose is a solution). We want to show that is still a solution to the system Since we already know that is a solution to the first equation, we just need to show it is a solution to the second equation.  Since the number is equal to the number . If we add to both of them, we get the same thing. So we get And since we know that , we can substitute to get Do some simplifying and factoring on the left side and we get This proves is indeed a solution to the second equation!  Second, we want to show that if is a solution after then it is a solution before . But really we already have! That is because we can get from the after system to the before system by multiplying the first equation by and adding it to the second equation. So going backwards just involves doing the exact same thing as going forward (just after multiplying by a non-zero constant which we know always works!).      But Richard... Why bother showing the solution sets are the same before and after, and vice versa?  That is because this establishes that the elementary operations are reversible ! Then we can call the two systems \" equivalent \" in the sense that they have the same solution set.  To give you an example of non-reversible operations, consider the operation of \"squaring both sides of an equation\".  Let's say we have an equation . Obviously, there is only one solution to this equation, which is . If we apply this operation, then we get the equation . Clearly, is still a solution to this new equation. Hence, in this operation, the solution before is still a solution after .  Yet, the new equation has another solution, which is . This isn't a solution to the original equation, and hence, the solution after may not be a solution before .  This shows that this operation is not reversible and hence the two equations are not equivalent (in the sense that they don't have the same solution set).   "
},
{
  "id": "subsec-SolvingSystemsEquations-12",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-SolvingSystemsEquations-12",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": " Use the elementary operations to solve the following system of linear equations:    There are a lot of ways to do this. This is one:  Step 1: Multiply the second equation by to get   Step 2: Add times the first equation to the second equation (replacing the second equation) to get   Step 3: Multiply the second equation by to get   Step 4: Add times the second equation to the first equation (replacing the first equation) to get   Step 5: Multiply the first equation by to get   And that's our solution, !   "
},
{
  "id": "subsec-AugmentedMatrices-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-AugmentedMatrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "subsec-AugmentedMatrices-5",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-AugmentedMatrices-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix constant matrix "
},
{
  "id": "subsec-AugmentedMatrices-8",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-AugmentedMatrices-8",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": " Solve the following system of linear equations (again). This time make the augmented matrix and use elementary row operations to solve it.   The augmented matrix for this system is There are a lot of ways to solve the system. Here is one:  Step 1: Multiply Row 2 by to get   Step 2: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 1 (replacing Row 1) to get   Step 5: Multiply Row 1 by to get   Then we can write this as a system of equations again and get And that's our solution, !   "
},
{
  "id": "subsec-NumberOfSolution-5",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-NumberOfSolution-5",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "  The line (in blue) and (in red)  "
},
{
  "id": "subsec-NumberOfSolution-11",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-NumberOfSolution-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solve for one variable in terms of the other and then write a general form for any solution parameter "
},
{
  "id": "subsec-NumberOfSolution-13",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-NumberOfSolution-13",
  "type": "Note",
  "number": "1.1.6",
  "title": "Notation Warning!",
  "body": " Notation Warning!  Your textbook likes to introduce a new letter to use for the parameter and the homework system will do this as well. For example, in this case they would probably use and write the solutions as This is unnecessary but Richard will do it from time to time just to match what you will see from the textbook and the homework system.  "
},
{
  "id": "subsec-ExistenceUniqueness-SystemEquations-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-ExistenceUniqueness-SystemEquations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent unique "
},
{
  "id": "ws-sec11-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-3",
  "type": "Worksheet Exercise",
  "number": "1.1.5",
  "title": "",
  "body": " The following matrix is the augmented matrix of a linear system. State in words the next two elementary row operations that should be performed in the process of solving the system.   "
},
{
  "id": "ws-sec11-4-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-4-2",
  "type": "Worksheet Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec11-4-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-4-3",
  "type": "Worksheet Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec11-5-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-5-2",
  "type": "Worksheet Exercise",
  "number": "1.1.11",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec11-5-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-5-3",
  "type": "Worksheet Exercise",
  "number": "1.1.13",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec11-6",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-6",
  "type": "Worksheet Exercise",
  "number": "1.1.15",
  "title": "",
  "body": " Verify that the solution you found to Problem 11 is correct by substituting the values you obtained back into the original equations.  "
},
{
  "id": "ws-sec11-7",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-7",
  "type": "Worksheet Exercise",
  "number": "1.1.19",
  "title": "",
  "body": " Determine if the system is consistent. Do not completely solve the system.   "
},
{
  "id": "ws-sec11-8-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-8-2",
  "type": "Worksheet Exercise",
  "number": "1.1.23",
  "title": "",
  "body": "   Recall a consistent system means a solution exists. So let's pretent is just a number and try to solve the system of linear equations using the elementary row operations.    There are many ways to solve this system. Here is one way of doing so:  Step 1: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 2: Multiply Row 2 by to get   Step 3: Add times Row 2 to Row 1 (replacing Row 1) to get      "
},
{
  "id": "ws-sec11-8-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-8-3",
  "type": "Worksheet Exercise",
  "number": "1.1.25",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec11-9-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-9-2",
  "type": "Worksheet Exercise",
  "number": "1.1.27",
  "title": "",
  "body": " ( T\/F ) Every elementary row operation is reversible.  "
},
{
  "id": "ws-sec11-9-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-9-3",
  "type": "Worksheet Exercise",
  "number": "1.1.29",
  "title": "",
  "body": " ( T\/F ) A matrix has six rows.  "
},
{
  "id": "ws-sec11-9-4",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-9-4",
  "type": "Worksheet Exercise",
  "number": "1.1.31",
  "title": "",
  "body": " ( T\/F ) The solution set of a linear system involving variables is a list of numbers that makes each equation in the system a true statement when the values are substituted for respectively.  "
},
{
  "id": "ws-sec11-9-5",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-9-5",
  "type": "Worksheet Exercise",
  "number": "1.1.33",
  "title": "",
  "body": " ( T\/F ) Two fundamental questions about a linear system involve existence and uniqueness.  "
},
{
  "id": "ws-sec11-10",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#ws-sec11-10",
  "type": "Worksheet Exercise",
  "number": "1.1.35",
  "title": "",
  "body": " Find an equation involving , , and that makes this augmented matrix correspond to a consistent system:   "
},
{
  "id": "sec12-RowReduction",
  "level": "1",
  "url": "sec12-RowReduction.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction and Echelon Forms",
  "body": " Row Reduction and Echelon Forms   While we have already explored the use of elementary operations to solve linear systems, we now turn our attention to a formal, algorithmic approach known as Gaussian Elimination . This method provides a systematic way to navigate the \"staircase\" of a matrix, ensuring that we can solve systems of any size—whether by hand or by programming a computer to do the heavy lifting for us.  In this section, we will define the \"goal\" states for our matrices: row echelon form and reduced row echelon form . We will also learn how to use these forms to quickly identify whether a system has a unique solution, infinitely many solutions, or no solution at all by identifying pivots and free variables .    After this section, students will be able to:     distinguish between a matrix in row echelon form and one in reduced row echelon form ;    apply the Gaussian Elimination Algorithm to transform an augmented matrix into (reduced) echelon form;    perform back substitution to find the solution to a system whose augmented matrix is in echelon form;    identify free variables and use them to express the solution set in parametric form .    determine if a system is consistent by checking for pivots in the rightmost column of the augmented matrix.      The method we have been talking about in for solving a system of linear equations using an augmented matrix and elementary row operations is called Gaussian Elimination . We now will learn some more terminology related to Gaussian Elimination and boil it down to an algorithm.  There are LOTS of different ways that you can go about solving a system using an augmented matrix and elementary row operations. You can do lots of different steps in lots of different orders and you can convert back to a system of linear equations at lots of different points in the process.  However, it will be helpful to learn a more algorithmic approach both for consistency with hand calculations and because a consistent algorithm is one that you can program a computer to execute.  In this section, we will learn two variants of the Gaussian Elimination algorithm. Both of them include what I will call Part 1 while the second includes a Part 2.  Let's solve the following system of linear equations we worked on in using the Gaussian Elimination algorithm. Then Richard will describe the algorithm in general.  The augmented matrix is The first thing we will do is to multiply Row 1 by to get The goal of that step was to have the first non-zero thing in Row 1 be a .  Next, we will add times Row 1 to Row 2 (and replace Row 2) to get The goal of that step was to make everything below that first a zero.  Then we will multiply Row 2 by to get Notice that now the coefficient matrix looks like a litter stair step with the first thing in each row a with only below it. This matrix is in what is called row echelon form .  When you reach that point, you have completed Part 1 of the Gaussian Elimination algorithm.  Now let's keep going with Part 2!  We will now add times Row 2 to Row 1 (and replace Row 1) to get The goal of that step was to turn \"everything\" above the first in Row 2 into a zero. Now the matrix is in what is called a reduced row echelon form . The difference being that now we have zeros above our staircase of 's.   Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if:   Every row consisting of only zeros must appear at the bottom of the matrix.    The first entry in any non-zero row is a . These are called the \"leading\" 's.    Every leading has only zeros below it (a \"leading \" is a that is the first non-zero number in a row).     A matrix is in reduced row echelon form if conditions 1-3 above are met AND every leading has only zeros above it.     Some variations on the above definition  If you read other textbooks, you may find that the second condition is considered as part of the definition condition for reduced row echelon form instead of row echelon form. That is, the first non-zero entry can be anything (of course, except for zero) in row echelon form, but it must be a (the leading ) in reduced row echelon form.  Practically, it doesn't make a difference how you define it, because you can always multiply a row by the reciprocal of its first non-zero entry to get a leading out of it.    Note: These definitions apply to regular matrices and to augmented matrices.  For example, the following matrices are all in row echelon form:   The following matrices (and the last one above) are all in reduced row echelon form:    Note on the homework system (and the second example above)  Technically, the full augmented matrix in the second example above is not in reduced row echelon form (but the coefficient matrix is, which is what we really care about). To get the full augmented matrix into reduced row echelon form, you would need to multiply the bottom row by to get a leading and then turn everything above that into a zero for a total of three more completely useless steps. There isn't anything gained by doing these steps because at this point it is already clear that there are no solutions to the system...  However, if you are asked for reduced row echelon form of an augmented matrix by the homework\/quiz, it will annoyingly expect those last steps.   When applying the Gaussian Elimination algorithm, the goal is to get the augmented matrix into row echelon form (Part 1) and\/or reduced row echelon form (Part 2). Here are the steps:   Step 0: If the matrix has only zeros in it, you are done!    Step 1: If any rows start out with one or more zeros, move them toward the bottom. The more zeros a row has before the first non-zero entry, the lower it goes on the list.    Step 2: Multiply Row 1 by the reciprocal of its first non-zero entry. This will give you your first leading .    Step 3: For each non-zero entry that appears directly below the leading , multiply Row 1 by the opposite (negative) of that number and add Row 1 to its row. This will give you all zeros below the leading .   Now the process is iterated! Apply the above procedure to the part of the matrix that excludes the first row and column. Repeat until either (1) the part you have left is all zeros, or (2) you get to the bottom of the matrix. In either case, the matrix will now be in row echelon form.   If you want to get a reduced row echelon form you will need to do Step 4:    Step 4: For each row that contains a leading , eliminate each non-zero entry above it by multiplying that row by the opposite of the non-zero entry and adding that to the row containing the non-zero entry.     Let's apply the method to try to solve this (larger) system of linear equations: The augmented matrix is Step 1 is already done since none of the rows starts out with a zero. So, let's do Step 2 and multiply the first equation by to get our first leading : Now let's do Step 3 and turn everything below our leading (in Row 1) into a zero! We will add times Row 1 to Row 2, add times Row 1 to Row 3, and add times Row 1 to Row 4. We get Now we imagine crossing out Row 1 and Column 1 and apply the method to what is left. Since the row with the most zeros in the beginning (Row 4) is already on the bottom and Row 2 and Row 3 have the same number of leading zeros, we still don't have to do anything for Step 1. Moving on to Step 2, we will multiply Row 2 by to get a leading in Row 2: Now we need to zero out all of the entries below this new leading . All we have to do is add times Row 2 to Row 3 to get And now our matrix is in row echelon form because everything below Row 2 is a zero!  To get our matrix into reduced row echelon form, we need to zero out everything above my leading s (Step 4). But there is nothing above the first leading obviously, so we just have to worry about the leading in Row 2. We will add times Row 2 to Row 1 to get Now the matrix is in reduced row echelon form!  If we convert the reduced row echelon form of the augmented matrix back to a system of linear equations, we get So we know that and we can see that . So the solution is or where is our parameter and can be anything.  But if we stopped early and converted to a system of linear equations after getting the matrix into row echelon form, we get Again, we know that and we can solve for in terms of and : But isn't a parameter! It's just , so we have to \"back substitute\", plugging this value into the equation for to get    But Richard... Should I use row echelon form or reduced row echelon form?  Both row echelon form and reduced row echelon form can be used to solve a system of equations. If it is EASY to do Step 4 and put your matrix into reduced row echelon form, you can basically just write down your answer! But if it is not so easy, then you are usually better off stopping with row echelon form IF your goal is just to solve the system. However, you will have to do an additional step of \"back substitution\" in order to solve the system.   Later on we will some applications of the algorithm that require reduced row echelon form. When the time comes, Richard will explain why it is needed in those cases.     Solve the following system of linear equations using the Gaussian Elimination algorithm.    The augmented matrix is   Step 1: Add times Row 1 to Row 2 (and replace Row 2) to get   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 3 (and replace Row 3) to get   Step 5: Multiply Row 3 by to get   Now the matrix is in row echelon form. We can convert it back to a system of linear equations. We get We will then back substitute to solve for and : Hence, the solution is .  Alternatively, we can keep going with the algorithm to obtain the reduced row echelon form of the augmented matrix.  Step 6: Add times Row 3 to Row 2 (and replace Row 2) to get   Step 7: Add times Row 3 to Row 1 (and replace Row 1) to get   Step 8: Add times Row 2 to Row 1 (and replace Row 1) to get Hence, the solution is .     How many parameters does the solution have?  We use parameters to write the solution only when there are infinitely many solutions. And we can tell how many parameters we have by counting how many leading s we have when we put our matrix in row echelon form!    All we have to do is to subtract the number of leading s from the total number of variables.   Each leading is associated with a variable that we can solve for in terms of the other variables. The author of your textbook calls these the \"leading variable\". The other variables are called \"free variables\" and these are the ones that can be used as parameters (or if you do it like the author, these are the variables you can set equal to new letters that you use for the parameters).  In the exapmle we just did, and are leading variables, and is the only free variable. So we only need one parameter to write the solution. The solution in parametric form is or if you want to use a new letter like the author would do.   Note: It doesn't matter whether you are in reduced row echelon form or just row echelon form, you will have the same number of leading s (and so the same number of leading variables and free variables).  Pretend that we had a system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and we got This time we have 3 leading s, so we have 3 leading variables. These are , , and . We also have free variables, and they are and .  Since the matrix isn't in reduced row echelon form, we will have to do some back substitution to get the solution. Converting it to a system of linear equations, we get Now we will be able to see why it is called \"back substitution\", because we go backwards!  First, we will ignore the . It is true (which is important!) but it doesn't actually help us figure out the solution.  We see that , then we substitute that \"back\" into our second equation to get Then we substitute and back into our first equation to get So we will treat the and as free variables (parameters) and write the solution. The solution set is all points of the form where and can be any real numbers.  Because of the importance of the leading s, there are special terms for it.   Pivots, Pivot Columns, and Rank   A pivot position in a matrix is a location that corresponds to a leading in (reduced) row echelon form.  A pivot column is a column that contains a pivot position.  The rank of a matrix is the number of leading s in (reduced) row echelon form, which is the same as the number of pivot positions and the same as the number of pivot columns.     Note: Rank is a term reserved for regular matrices, not augmented matrices. If someone asks for the rank of an augmented matrix, they mean the coefficient part of the matrix (the part to the left of the vertical line(s)). Also, we will learn a better (but equivalent) definition of rank later in the term.    Existence and Uniqueness Questions  Imagine we have an inconsistent system of linear equations. Then its augmented matrix, in row echelon form, will have a row of the form which corresponds to the equation . The is a pivot position (since this is the first non-zero entry in its row and we can easily turn it into a leading ). This implies that a system is inconsistent if there is a pivot position in the rightmost column (the one to the right of the vertical lines(s) which represents the constant matrix). Furthermore, if there is a pivot position in the rightmost column, then the rightmost column is a pivot column. Let's make it a theorem!   Existence and Uniqueness Theorem   A linear system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column. That is, if an only if an echelon form of the augmented matrix has no row of the form   If a linear system is consistent, then the solution set contains either (1) a unique solution, when there are no free variables, or (2) infinitely many solutions, when there is at least one free variable.    Next week, we will develop a (more sophisticated) version of the above theorem (using the rank of the matrices) when we learn more about matrices (and matrix equations). For now, we will just use the term \"pivot column\" instead of \"rank\" for our augmented matrices.   Each of the following matrices represents the augmented matrix of a system of linear equations. Determine whether the system is consistent or not, and if it is consistent, determine whether the solution is unique.                       The system is consistent because there is no pivot position in the rightmost column. Also, there is exactly one solution because there are three pivot positions and three variables.    The system is inconsistent because there is a pivot position in the rightmost column.    The system is consistent because there is no pivot position in the rightmost column. Also, there are infinitely many solutions because there are only three pivot positions but four variables, so there is a free variable.         Some Exercises for This Section   Richard included some practice problems that cover some main concepts in this section. You don't need to turn it in, but you are highly encouraged to work on this with your classmates. The problems here may end up being in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  Only the final answers are included to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.    Determine which of the following matrices are in reduced echelon form and which are only in echelon form.                          Row reduce the following matrix to reduced row echelon form. Circle the pivot positions in the final matrix and in the original matrix, and list the pivot columns.     Describe the possible echelon forms of a nonzero matrix. Use for leading entries (aka the pivot positions), for any value (that could possibly be zero), and .    Repeat Exercise 5 for a nonzero matrix.     In the following exercises, find the solutions of the systems whose augmented matrices are given.              Write down the equations corresponding to the augmented matrix in Exercise 9 and verify your answer to Exercise 9 is correct by substituting the solutions you obtained back into the original equations.    Write down the equations corresponding to the augmented matrix in Exercise 11 and verify your answer to Exercise 11 is correct by substituting the solutions you obtained back into the original equations.    Suppose each matrix below represents the augmented matrix for a system of linear equation. In each case, determine if the system is consistent. If the system is consistent, determine if the solution is unique.  Recall means the leading entries (aka the pivot positions) and means any value (that could possibly be zero).                Determine the value(s) of such that the following matrix is the augmented matrix of a consistent linear system.     Choose and such that the system has (a) no solution, (b) a unique solution, and (c) many solutions. Give separate answers for each part.      In the following exercises, mark each statement True or False ( T\/F ). Justify each answer.    ( T\/F ) In some cases, a matrix may be row reduced to more than one matrix in reduced echelon form, using different sequences of row operations.    ( T\/F ) The row reduction algorithm applies only to augmented matrices for a linear system.    ( T\/F ) A basic variable in a linear system is a variable that corresponds to a pivot column in the coefficient matrix.    ( T\/F ) Finding a parametric description of the solution set of a linear system is the same as solving the system.    ( T\/F ) If one row in an echelon form of an augmented matrix is then the associated linear system is inconsistent.     Suppose experimental data are represented by a set of points in the plane. An interpolating polynomial for the data is a polynomial whose graph passes through every point. In scientific work, such a polynomial can be used, for example, to estimate values between the known data points. Another use is to create curves for graphical images on a computer screen. One method for finding an interpolating polynomial is to solve a system of linear equation.  Find the interpolating polynomial for the data , , . That is, find , , and such that     "
},
{
  "id": "sec12-RowReduction-2-1",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian Elimination "
},
{
  "id": "sec12-RowReduction-2-2",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row echelon form reduced row echelon form pivots free variables "
},
{
  "id": "sec12-RowReduction-2-3",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     distinguish between a matrix in row echelon form and one in reduced row echelon form ;    apply the Gaussian Elimination Algorithm to transform an augmented matrix into (reduced) echelon form;    perform back substitution to find the solution to a system whose augmented matrix is in echelon form;    identify free variables and use them to express the solution set in parametric form .    determine if a system is consistent by checking for pivots in the rightmost column of the augmented matrix.    "
},
{
  "id": "def-ReducedRowEchelonForm",
  "level": "2",
  "url": "sec12-RowReduction.html#def-ReducedRowEchelonForm",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Row Echelon Form and Reduced Row Echelon Form.",
  "body": " Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if:   Every row consisting of only zeros must appear at the bottom of the matrix.    The first entry in any non-zero row is a . These are called the \"leading\" 's.    Every leading has only zeros below it (a \"leading \" is a that is the first non-zero number in a row).     A matrix is in reduced row echelon form if conditions 1-3 above are met AND every leading has only zeros above it.   "
},
{
  "id": "sec12-RowReduction-15",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-15",
  "type": "Note",
  "number": "1.2.2",
  "title": "Some variations on the above definition.",
  "body": " Some variations on the above definition  If you read other textbooks, you may find that the second condition is considered as part of the definition condition for reduced row echelon form instead of row echelon form. That is, the first non-zero entry can be anything (of course, except for zero) in row echelon form, but it must be a (the leading ) in reduced row echelon form.  Practically, it doesn't make a difference how you define it, because you can always multiply a row by the reciprocal of its first non-zero entry to get a leading out of it.  "
},
{
  "id": "sec12-RowReduction-19",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-19",
  "type": "Note",
  "number": "1.2.3",
  "title": "Note on the homework system (and the second example above).",
  "body": " Note on the homework system (and the second example above)  Technically, the full augmented matrix in the second example above is not in reduced row echelon form (but the coefficient matrix is, which is what we really care about). To get the full augmented matrix into reduced row echelon form, you would need to multiply the bottom row by to get a leading and then turn everything above that into a zero for a total of three more completely useless steps. There isn't anything gained by doing these steps because at this point it is already clear that there are no solutions to the system...  However, if you are asked for reduced row echelon form of an augmented matrix by the homework\/quiz, it will annoyingly expect those last steps.  "
},
{
  "id": "sec12-RowReduction-26",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-26",
  "type": "Note",
  "number": "1.2.4",
  "title": "But Richard... Should I use row echelon form or reduced row echelon form?",
  "body": " But Richard... Should I use row echelon form or reduced row echelon form?  Both row echelon form and reduced row echelon form can be used to solve a system of equations. If it is EASY to do Step 4 and put your matrix into reduced row echelon form, you can basically just write down your answer! But if it is not so easy, then you are usually better off stopping with row echelon form IF your goal is just to solve the system. However, you will have to do an additional step of \"back substitution\" in order to solve the system.   Later on we will some applications of the algorithm that require reduced row echelon form. When the time comes, Richard will explain why it is needed in those cases.   "
},
{
  "id": "sec12-RowReduction-27",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-27",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " Solve the following system of linear equations using the Gaussian Elimination algorithm.    The augmented matrix is   Step 1: Add times Row 1 to Row 2 (and replace Row 2) to get   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 3 (and replace Row 3) to get   Step 5: Multiply Row 3 by to get   Now the matrix is in row echelon form. We can convert it back to a system of linear equations. We get We will then back substitute to solve for and : Hence, the solution is .  Alternatively, we can keep going with the algorithm to obtain the reduced row echelon form of the augmented matrix.  Step 6: Add times Row 3 to Row 2 (and replace Row 2) to get   Step 7: Add times Row 3 to Row 1 (and replace Row 1) to get   Step 8: Add times Row 2 to Row 1 (and replace Row 1) to get Hence, the solution is .   "
},
{
  "id": "def-Pivot",
  "level": "2",
  "url": "sec12-RowReduction.html#def-Pivot",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Pivots, Pivot Columns, and Rank.",
  "body": " Pivots, Pivot Columns, and Rank   A pivot position in a matrix is a location that corresponds to a leading in (reduced) row echelon form.  A pivot column is a column that contains a pivot position.  The rank of a matrix is the number of leading s in (reduced) row echelon form, which is the same as the number of pivot positions and the same as the number of pivot columns.   "
},
{
  "id": "thm-ExistenceUniquenessTheorem",
  "level": "2",
  "url": "sec12-RowReduction.html#thm-ExistenceUniquenessTheorem",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Existence and Uniqueness Theorem.",
  "body": " Existence and Uniqueness Theorem   A linear system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column. That is, if an only if an echelon form of the augmented matrix has no row of the form   If a linear system is consistent, then the solution set contains either (1) a unique solution, when there are no free variables, or (2) infinitely many solutions, when there is at least one free variable.   "
},
{
  "id": "subsec-ExistenceUniqueness-AugmentedMatrices-5",
  "level": "2",
  "url": "sec12-RowReduction.html#subsec-ExistenceUniqueness-AugmentedMatrices-5",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " Each of the following matrices represents the augmented matrix of a system of linear equations. Determine whether the system is consistent or not, and if it is consistent, determine whether the solution is unique.                       The system is consistent because there is no pivot position in the rightmost column. Also, there is exactly one solution because there are three pivot positions and three variables.    The system is inconsistent because there is a pivot position in the rightmost column.    The system is consistent because there is no pivot position in the rightmost column. Also, there are infinitely many solutions because there are only three pivot positions but four variables, so there is a free variable.      "
},
{
  "id": "ws-sec12-3",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-3",
  "type": "Worksheet Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " Determine which of the following matrices are in reduced echelon form and which are only in echelon form.                        "
},
{
  "id": "ws-sec12-4",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-4",
  "type": "Worksheet Exercise",
  "number": "1.2.3",
  "title": "",
  "body": " Row reduce the following matrix to reduced row echelon form. Circle the pivot positions in the final matrix and in the original matrix, and list the pivot columns.   "
},
{
  "id": "ws-sec12-5",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-5",
  "type": "Worksheet Exercise",
  "number": "1.2.5",
  "title": "",
  "body": " Describe the possible echelon forms of a nonzero matrix. Use for leading entries (aka the pivot positions), for any value (that could possibly be zero), and .  "
},
{
  "id": "ws-sec12-6",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-6",
  "type": "Worksheet Exercise",
  "number": "1.2.6",
  "title": "",
  "body": " Repeat Exercise 5 for a nonzero matrix.  "
},
{
  "id": "ws-sec12-7-2",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-7-2",
  "type": "Worksheet Exercise",
  "number": "1.2.9",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec12-7-3",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-7-3",
  "type": "Worksheet Exercise",
  "number": "1.2.11",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec12-7-4",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-7-4",
  "type": "Worksheet Exercise",
  "number": "1.2.13",
  "title": "",
  "body": "  "
},
{
  "id": "ws-sec12-8",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-8",
  "type": "Worksheet Exercise",
  "number": "1.2.15",
  "title": "",
  "body": " Write down the equations corresponding to the augmented matrix in Exercise 9 and verify your answer to Exercise 9 is correct by substituting the solutions you obtained back into the original equations.  "
},
{
  "id": "ws-sec12-9",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-9",
  "type": "Worksheet Exercise",
  "number": "1.2.17",
  "title": "",
  "body": " Write down the equations corresponding to the augmented matrix in Exercise 11 and verify your answer to Exercise 11 is correct by substituting the solutions you obtained back into the original equations.  "
},
{
  "id": "ws-sec12-10",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-10",
  "type": "Worksheet Exercise",
  "number": "1.2.19",
  "title": "",
  "body": " Suppose each matrix below represents the augmented matrix for a system of linear equation. In each case, determine if the system is consistent. If the system is consistent, determine if the solution is unique.  Recall means the leading entries (aka the pivot positions) and means any value (that could possibly be zero).              "
},
{
  "id": "ws-sec12-11",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-11",
  "type": "Worksheet Exercise",
  "number": "1.2.21",
  "title": "",
  "body": " Determine the value(s) of such that the following matrix is the augmented matrix of a consistent linear system.   "
},
{
  "id": "ws-sec12-12",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-12",
  "type": "Worksheet Exercise",
  "number": "1.2.23",
  "title": "",
  "body": " Choose and such that the system has (a) no solution, (b) a unique solution, and (c) many solutions. Give separate answers for each part.   "
},
{
  "id": "ws-sec12-13-2",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-13-2",
  "type": "Worksheet Exercise",
  "number": "1.2.25",
  "title": "",
  "body": " ( T\/F ) In some cases, a matrix may be row reduced to more than one matrix in reduced echelon form, using different sequences of row operations.  "
},
{
  "id": "ws-sec12-13-3",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-13-3",
  "type": "Worksheet Exercise",
  "number": "1.2.27",
  "title": "",
  "body": " ( T\/F ) The row reduction algorithm applies only to augmented matrices for a linear system.  "
},
{
  "id": "ws-sec12-13-4",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-13-4",
  "type": "Worksheet Exercise",
  "number": "1.2.29",
  "title": "",
  "body": " ( T\/F ) A basic variable in a linear system is a variable that corresponds to a pivot column in the coefficient matrix.  "
},
{
  "id": "ws-sec12-13-5",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-13-5",
  "type": "Worksheet Exercise",
  "number": "1.2.31",
  "title": "",
  "body": " ( T\/F ) Finding a parametric description of the solution set of a linear system is the same as solving the system.  "
},
{
  "id": "ws-sec12-13-6",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-13-6",
  "type": "Worksheet Exercise",
  "number": "1.2.33",
  "title": "",
  "body": " ( T\/F ) If one row in an echelon form of an augmented matrix is then the associated linear system is inconsistent.  "
},
{
  "id": "ws-sec12-14",
  "level": "2",
  "url": "sec12-RowReduction.html#ws-sec12-14",
  "type": "Worksheet Exercise",
  "number": "1.2.45",
  "title": "",
  "body": " Suppose experimental data are represented by a set of points in the plane. An interpolating polynomial for the data is a polynomial whose graph passes through every point. In scientific work, such a polynomial can be used, for example, to estimate values between the known data points. Another use is to create curves for graphical images on a computer screen. One method for finding an interpolating polynomial is to solve a system of linear equation.  Find the interpolating polynomial for the data , , . That is, find , , and such that   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
