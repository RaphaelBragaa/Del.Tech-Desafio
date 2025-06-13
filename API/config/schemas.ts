/**
 * @swagger
 * components:
 *   schemas:
 *     Tarefa:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "507f1f77bcf86cd799439011"
 *         titulo:
 *           type: string
 *           example: "Comprar leite"
 *         descricao:
 *           type: string
 *           example: "Ir ao supermercado comprar leite"
 *         concluido:
 *           type: boolean
 *           example: false
 *         dataCriacao:
 *           type: string
 *           format: date-time
 *           example: "2025-06-13T12:00:00Z"
 */

/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefa'
 */